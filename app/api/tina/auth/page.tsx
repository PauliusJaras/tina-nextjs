"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Spinner from "../../../../components/loading/spinner";

//Renders loading page and checks if user is authorized to be automatically logged in to the admin dashboard
export default function Signin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tokenKey = searchParams?.get("atkn");

  useEffect(() => {
    const signInWithCredentials = async () => {
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", "/admin");
      }
      try {
        await signIn("credentials", {
          token: tokenKey,
          redirect: false,
        });
        router.push("/admin");
      } catch (error) {
        console.error("Sign-in error:", error);
      }
    };

    signInWithCredentials();
  }, [router, tokenKey]);

  return (
    <main className="flex items-center justify-center gap-4 text-3xl">
      <Spinner className="h-16 w-16 animate-spin fill-blue-600 text-black" />
      <p>Loading...</p>
    </main>
  );
}
