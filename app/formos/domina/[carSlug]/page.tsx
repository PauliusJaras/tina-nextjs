"use client";

import Image from "next/image";
import React, { useState, FormEvent } from "react";
import { useAsyncError } from "../../../hooks/useAsyncError";
import Spinner from "../../../../components/loading/spinner";
import Link from "next/link";
import SvgIcon from "../../../../components/svgIcon";
import { ccEmails } from "../../../mail/cc";
import { routes } from "../../../../routes/routes";

export default function StaticForm({ params }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [field, setField] = useState<string>("");
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const throwError = useAsyncError();

  const carName = params?.carSlug?.replaceAll("-", " ");

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (field !== "") {
      throwError(new Error("Įvyko klaida. Užpildyti papildomi laukeliai."));
    }

    setIsLoading(true);
    const baseUrl = `${window?.location?.protocol}//${window?.location?.host}`;
    const carPageUrl = `${baseUrl}${routes.dealershipCars}/${params?.carSlug}`;
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          formData: {
            ...formObject,
            Domenas: carPageUrl,
            Forma: "Domina automobilis",
          },
          subject: `Domina automobilis - ${window?.location?.hostname}`,
          cc: ccEmails.pardavimai,
          replyEmailData: {
            topText: ccEmails.topText,
            bottomText: ccEmails.bottomText,
          },
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
        <div className="relative min-h-[30vh] basis-3/5 overflow-hidden md:min-h-[90vh]">
          <Image
            src={"/forms/isvyka-su-subaru.jpg"}
            alt="Subaru automobilis"
            fill
            className="object-cover object-center"
          ></Image>
        </div>
        {!emailSent && (
          <div className="basis-2/5 bg-gray-300 p-10">
            <div>
              <h2 className="py-2 text-3xl">DOMINA AUTOMOBILIS?</h2>
              <p className="py-2 text-sm">
                SUBARU ypatingas tuo, kad visada kelia neprilygstamą
                pasitikėjimą. Tai itin malonus jausmas, apimantis dėl retai
                sutinkamos darnos – nuoseklios dinamiškų savybių pusiausvyros,
                genialaus dizaino ir ramybę užtikrinančio saugumo.
              </p>
              <p className="py-2 text-sm">
                <strong>
                  Nedelskite ir užpildykite užklausą dėl Jus dominančio
                  automobilio!
                </strong>
              </p>
            </div>
            <form
              onSubmit={sendEmail}
              className="mt-4 flex flex-col gap-4 pr-2"
              action=""
            >
              <div className="flex flex-col">
                <label htmlFor="">Automobilis</label>
                <input
                  readOnly
                  name="Automobilis"
                  value={carName}
                  className="border border-gray-700 p-2 hover:cursor-default"
                  type="text"
                />
              </div>
              <input
                className="border border-gray-700 p-2"
                placeholder={"Vardas"}
                name={"Vardas"}
                type={"text"}
                required
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
                onInvalid={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity(
                    "Nurodykite savo vardą",
                  )
                }
              />
              <input
                className="border border-gray-700 p-2"
                placeholder={"Pavardė"}
                name={"Pavardė"}
                type={"text"}
              />
              <input
                className="border border-gray-700 p-2"
                placeholder={"El. Paštas"}
                name={"Email"}
                type={"email"}
                required
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
                onInvalid={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity(
                    "Įrašykite el. paštą",
                  )
                }
              />
              <input
                className="border border-gray-700 p-2"
                placeholder={"Telefono numeris"}
                name={"Telefonas"}
                type={"tel"}
                required
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
                onInvalid={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity(
                    "Nurodykite telefono numerį",
                  )
                }
              />
              <textarea
                className="border border-gray-700 p-2"
                placeholder={"Pastabos ir komentarai"}
                name={"Komentarai"}
              />
              <input
                autoComplete="off"
                name="field"
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="hidden"
              />
              <p className="text-justify text-xs font-light">
                Pateikdami duomenis auksčiau sutinkate, kad su jumis susisiektų
                JMA Centras atstovai dėl pateiktos užklausos.
              </p>
              <button
                disabled={isLoading}
                className="self-start bg-black px-6 py-2 text-sm font-bold text-white hover:opacity-50 xl:text-lg"
              >
                {isLoading ? (
                  <div className="flex flex-row items-center gap-2">
                    <Spinner></Spinner>
                    Vykdoma...
                  </div>
                ) : (
                  "Patvirtinti"
                )}
              </button>
            </form>
          </div>
        )}
        {emailSent && (
          <div className="flex basis-2/5 flex-col items-center justify-center bg-gray-300 p-8">
            <h1 className="text-2xl ">Užklausa išsiųsta</h1>
            <p className="pb-4 text-justify">
              Ačiū, kad naudojates JMA Centras paslaugomis. Jeigu norite grįžti
              atgal į pagrindinį puslapį, paspauskite mygtuką žemiau.
            </p>
            <div className="flex bg-black px-4 py-1 text-sm font-bold text-white hover:opacity-90 xl:text-lg">
              <Link
                className="flex items-center text-white hover:text-blue-500"
                href={"/"}
              >
                Atgal
                <SvgIcon iconName={"arrowRight"} className={"h-4 w-4"} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
