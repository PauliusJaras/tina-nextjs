"use client";

import { useTina } from "tinacms/dist/react";
import React, { useState, FormEvent } from "react";
import { FormQuery } from "../../tina/__generated__/types";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import MissingPage from "../missingPage";
import TinaBox from "../tinaBox";
import InputField from "./inputField";
import SvgIcon from "../svgIcon";
import Link from "next/link";
import Spinner from "../loading/spinner";
import { useAsyncError } from "../../app/hooks/useAsyncError";

export default function SingleFormPage(props: {
  data: FormQuery;
  variables: object;
  query: string;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [field, setField] = useState<string>("");
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const throwError = useAsyncError();

  const { data } = useTina(props);

  if (!data) {
    return <MissingPage title="Home" url="/"></MissingPage>;
  }

  const itemClasses = {
    h1: "text-4xl py-2",
    h2: "text-3xl py-2",
    h3: "text-2xl py-2",
    h4: "text-xl py-2",
    h5: "text-lg py-2",
    h6: "text-base py-2",
    p: "text-sm py-2",
    a: "text-blue-500 font-semibold hover:text-black cursor-pointer",
    li: "list-disc ml-6 p-1 text-sm",
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (field !== "") {
      throwError(new Error("Įvyko klaida. Užpildyti papildomi laukeliai."));
    }

    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          formData: {
            ...formObject,
            Domenas: window.location.href,
            Forma: data?.form?.title,
          },
          subject: `${data?.form?.emailDetails?.subject} - ${window.location.hostname}`,
          cc: data?.form?.emailDetails?.cc,
          replyEmailData: data?.form?.emailDetails?.replyEmailMessage,
          replyEmail: formObject?.Email,
        }),
      });
      const body = await response.json();

      if (body === "Ok") {
        console.log("Successfully sent mail");
        setEmailSent(true);
      }
    } catch (error) {
      console.log("Error sending email:", error);
      throwError(new Error("Įvyko klaida siunčiant duomenis"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="p-0">
      <div className="flex flex-col md:flex-row">
        <div
          data-tina-field={data?.form?.img && tinaField(data?.form, "img")}
          className="relative min-h-[30vh] basis-3/5 overflow-hidden md:min-h-[90vh]"
        >
          <Image
            src={data?.form?.img || ""}
            alt={data?.form?.imgAlt || data?.form?.title || "Main Image"}
            fill
            className="object-cover object-bottom"
          ></Image>
        </div>
        {!emailSent && (
          <div className="basis-2/5 bg-gray-300 p-10">
            <TinaBox
              data={data?.form}
              updateItemClasses={itemClasses}
            ></TinaBox>
            <form
              onSubmit={sendEmail}
              className="mt-4 flex flex-col gap-4 pr-2"
              action=""
            >
              {data?.form?.form?.fields?.map((field, index) => {
                return <InputField key={index} fieldData={field}></InputField>;
              })}
              <input
                autoComplete="off"
                name="field"
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="hidden"
              ></input>
              {data?.form?.form?.warningText && (
                <p
                  data-tina-field={
                    data?.form?.form &&
                    tinaField(data?.form?.form, "warningText")
                  }
                  className="text-justify text-xs font-light"
                >
                  {data?.form?.form?.warningText}
                </p>
              )}
              {data?.form?.form?.buttonText && (
                <button
                  disabled={isLoading}
                  data-tina-field={
                    data?.form?.form &&
                    tinaField(data?.form?.form, "buttonText")
                  }
                  className="self-start bg-black px-6 py-2 text-sm font-bold text-white hover:opacity-50 xl:text-lg"
                >
                  {isLoading ? (
                    <div className="flex flex-row items-center gap-2">
                      <Spinner></Spinner>
                      Vykdoma...
                    </div>
                  ) : (
                    data?.form?.form?.buttonText
                  )}
                </button>
              )}
            </form>
          </div>
        )}
        {emailSent && (
          <div className="flex basis-2/5 flex-col items-center justify-center bg-gray-300 p-8">
            <h1 className="text-2xl ">
              {data?.form?.emailDetails?.completionMessage?.header ||
                "Žinutė išsiųsta"}
            </h1>
            <p className="pb-4 text-justify">
              {data?.form?.emailDetails?.completionMessage?.message ||
                "Ačiū, kad naudojates JMA Centras paslaugomis. Jeigu norite grįžti atgal į pagrindinį puslapį, paspauskite mygtuką žemiau."}
            </p>
            <div className="flex bg-black px-4 py-1 text-sm font-bold text-white hover:opacity-90 xl:text-lg">
              <Link
                className="flex items-center text-white hover:text-blue-500"
                href={data?.form?.emailDetails?.completionMessage?.url || "/"}
              >
                {data?.form?.emailDetails?.completionMessage?.button || "Atgal"}
                <SvgIcon iconName={"arrowRight"} className={"h-4 w-4"} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
