"use client";

import Link from "next/link";
import { Switch } from "@material-tailwind/react";
import { useEffect } from "react";
import { useGoogleStore } from "../../stores/zustandStore";
import { LiaCookieBiteSolid } from "react-icons/lia";
import clsx from "clsx";
import { routes } from "../../routes/routes";

export default function CookieBanner() {
  const adStorage = useGoogleStore((state) => state.adStorage);
  const analyticsStorage = useGoogleStore((state) => state.analyticsStorage);
  const functionalityStorage = useGoogleStore(
    (state) => state.functionalityStorage,
  );
  const setAdStorage = useGoogleStore((state) => state.setAdStorage);
  const setAdUserData = useGoogleStore((state) => state.setAdUserData);
  const setAdPersonalization = useGoogleStore(
    (state) => state.setAdPersonalization,
  );
  const setAnalyticsStorage = useGoogleStore(
    (state) => state.setAnalyticsStorage,
  );
  const setFunctionalityStorage = useGoogleStore(
    (state) => state.setFunctionalityStorage,
  );
  const setCookieConsent = useGoogleStore((state) => state.setCookieConsent);
  const acceptAllCookies = useGoogleStore((state) => state.acceptAllCookies);
  const acceptCookies = useGoogleStore((state) => state.acceptCookies);
  const declineAllCookies = useGoogleStore((state) => state.declineAllCookies);

  const consentParameters = useGoogleStore((state) => state.consentParameters);

  const cookieConsent = useGoogleStore((state) => state.cookieConsent);

  useEffect(() => {
    useGoogleStore.persist.rehydrate();

    if (cookieConsent == null && useGoogleStore?.persist?.hasHydrated()) {
      window.gtag("consent", "default", consentParameters);
    }
  }, []);

  useEffect(() => {
    window.gtag("consent", "update", consentParameters);
  }, [cookieConsent]);

  const handleMarketingCookies = () => {
    setAdStorage();
    setAdUserData();
    setAdPersonalization();
  };

  const handleStatisticalCookies = () => {
    setAnalyticsStorage();
  };

  const handleFunctionalCookies = () => {
    setFunctionalityStorage();
  };

  return (
    <>
      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 z-[99] mx-auto my-0 max-w-max flex-col items-center justify-between gap-4 rounded-lg bg-gray-900 px-3 py-3 shadow md:my-10 md:max-w-screen-md md:px-4",
          {
            flex:
              cookieConsent == null && useGoogleStore?.persist?.hasHydrated(),
            hidden: cookieConsent != null,
          },
        )}
      >
        <div className="w-full text-center text-gray-300">
          <Link href={`${routes.pages}/privatumo-politika`}>
            <p>
              Svetainėje naudojami slapukai, kurie padeda užtikrinti Jums
              teikiamų paslaugų kokybę.{" "}
              <span className="font-bold text-white">Sužinoti daugiau.</span>
            </p>
          </Link>
        </div>

        <div className="flex w-full flex-wrap justify-around gap-4 rounded-lg bg-white p-4 xs:flex-nowrap">
          <div className="flex flex-col items-center gap-2">
            <p className="text-black">Būtini</p>
            <Switch defaultChecked disabled />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-black">Funkciniai</p>
            <Switch
              onChange={handleFunctionalCookies}
              checked={functionalityStorage}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-black">Statistiniai</p>
            <Switch
              onChange={handleStatisticalCookies}
              checked={analyticsStorage}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-black">Marketinginiai</p>
            <Switch onChange={handleMarketingCookies} checked={adStorage} />
          </div>
        </div>

        <div className="flex w-full flex-wrap gap-2 xs:flex-nowrap">
          <button
            className="w-full rounded-md border border-gray-200 px-5 py-2 text-gray-300 hover:opacity-80"
            onClick={declineAllCookies}
          >
            Nesutinku Saugoti
          </button>
          <button
            className="w-full rounded-md border border-gray-200 px-5 py-2 text-gray-300 hover:opacity-80"
            onClick={acceptCookies}
          >
            Saugoti Pasirinktus Slapukus
          </button>
          <button
            className="w-full rounded-lg bg-black px-5 py-2 text-white hover:opacity-80"
            onClick={acceptAllCookies}
          >
            Saugoti Visus Slapukus
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "fixed bottom-28 left-4 right-0 z-[69] mx-auto my-0 flex lg:bottom-4",
          {
            hidden: cookieConsent == null,
          },
        )}
      >
        <LiaCookieBiteSolid
          onClick={() => setCookieConsent(null)}
          className="h-8 w-8 cursor-pointer rounded-full border bg-white shadow-md transition delay-300 duration-200 ease-in-out hover:scale-125 hover:opacity-90"
        />
      </div>
    </>
  );
}
