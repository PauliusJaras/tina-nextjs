"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="compact-container">
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-lg">{error.message}</h2>
        <button
          className="bg-blue-500 px-4 py-2 text-lg font-bold text-white hover:bg-blue-700"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Pabandyti Iš Naujo
        </button>
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
