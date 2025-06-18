import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Spinner from "./loading/spinner";

//If there's an error with sending forms, returns a message with different options what to do next
export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [reportState, setReportState] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pathName = usePathname();

  const sendErrorReport = async () => {
    setIsLoading((s) => !s);
    const response = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        formData: { message: error.message, pathName },
        subject: "Error Report",
        cc: "",
      }),
    });

    const body = await response.json();

    if (body === "Ok") {
      console.log("Successfully sent mail");
      setIsLoading((s) => !s);
      setReportState(true);
    }
  };

  return (
    <main className="compact-container">
      <div className="flex flex-col gap-4">
        <h2 className={clsx("text-center text-lg", { hidden: reportState })}>
          Atrodo, kad įvyko klaida kraunant puslapį.
        </h2>
        <button
          className={clsx(
            "bg-blue-500 px-4 py-2 text-lg font-bold text-white hover:bg-blue-700",
            {
              hidden: reportState,
            },
          )}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Pabandyti Iš Naujo
        </button>
        <button
          className={clsx(
            "flex w-full bg-red-500 px-4 py-2 text-lg font-bold text-white hover:bg-red-700",
            {
              hidden: reportState,
            },
          )}
          onClick={sendErrorReport}
          disabled={reportState}
        >
          <span className={clsx("w-full text-center", { hidden: isLoading })}>
            Pranešti Apie Klaidą
          </span>
          <span
            className={clsx("flex w-full justify-center", {
              hidden: !isLoading,
            })}
          >
            <Spinner />
          </span>
        </button>
        <div className={clsx({ hidden: !reportState })}>
          <h2>Pranešimas buvo išsiųstas. Dėkojame už Jūsų pagalbą.</h2>
        </div>
        <Link
          className="bg-black px-4 py-2 text-center text-lg font-bold text-white hover:bg-black/70"
          href={"/"}
        >
          Grįžti į Pradžią
        </Link>
      </div>
    </main>
  );
}
