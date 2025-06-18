import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type MenuStates = {
  menuOpen: boolean;
  phoneIconState: boolean;
  mapIconState: boolean;
};

type MenuActions = {
  setMenuOpen: (menuOpen: MenuStates["menuOpen"]) => void;
  setPhoneIconState: () => void;
  setMapIconState: () => void;
};

type ConsentStatus = "granted" | "denied";

type ConsentParameters = {
  ad_storage: ConsentStatus;
  ad_user_data: ConsentStatus;
  ad_personalization: ConsentStatus;
  analytics_storage: ConsentStatus;
  functionality_storage: ConsentStatus;
};

type GoogleStates = {
  cookieConsent: boolean | null;
  adStorage: boolean;
  adUserData: boolean;
  adPersonalization: boolean;
  analyticsStorage: boolean;
  functionalityStorage: boolean;
  consentParameters: ConsentParameters;
};

type GoogleActions = {
  setCookieConsent: (cookieConsent: GoogleStates["cookieConsent"]) => void;
  setAdStorage: () => void;
  setAdUserData: () => void;
  setAdPersonalization: () => void;
  setAnalyticsStorage: () => void;
  setFunctionalityStorage: () => void;
  updateConsentParameteres: () => void;
  acceptAllCookies: () => void;
  acceptCookies: () => void;
  declineAllCookies: () => void;
};

export const useMenuStore = create<MenuStates & MenuActions>((set) => ({
  menuOpen: false,
  phoneIconState: false,
  mapIconState: false,
  setMenuOpen: () => set((state) => ({ menuOpen: !state.menuOpen })),
  setPhoneIconState: () =>
    set((state) => ({ phoneIconState: !state.phoneIconState })),
  setMapIconState: () =>
    set((state) => ({ mapIconState: !state.mapIconState })),
}));

export const useGoogleStore = create<GoogleStates & GoogleActions>()(
  persist(
    (set, get) => ({
      cookieConsent: null,
      adStorage: false,
      adUserData: false,
      adPersonalization: false,
      analyticsStorage: false,
      functionalityStorage: false,
      consentParameters: {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
      },
      setCookieConsent: (value) =>
        set({ cookieConsent: value }),
      setAdStorage: () => set((state) => ({ adStorage: !state.adStorage })),
      setAdUserData: () => set((state) => ({ adUserData: !state.adUserData })),
      setAdPersonalization: () =>
        set((state) => ({ adPersonalization: !state.adPersonalization })),
      setAnalyticsStorage: () =>
        set((state) => ({ analyticsStorage: !state.analyticsStorage })),
      setFunctionalityStorage: () =>
        set((state) => ({ functionalityStorage: !state.functionalityStorage })),
      updateConsentParameteres: () =>
        set((state) => ({
          consentParameters: {
            ad_storage: state.adStorage ? "granted" : "denied",
            ad_user_data: state.adUserData ? "granted" : "denied",
            ad_personalization: state.adPersonalization ? "granted" : "denied",
            analytics_storage: state.analyticsStorage ? "granted" : "denied",
            functionality_storage: state.functionalityStorage
              ? "granted"
              : "denied",
          },
        })),
      acceptAllCookies: () => {
        set(() => ({
          adStorage: true,
          adUserData: true,
          adPersonalization: true,
          analyticsStorage: true,
          functionalityStorage: true,
		  cookieConsent: true,
        }));
        get().updateConsentParameteres();
      },
      declineAllCookies: () => {
        set(() => ({
          adStorage: false,
          adUserData: false,
          adPersonalization: false,
          analyticsStorage: false,
          functionalityStorage: false,
		  cookieConsent: false,
        }));
        get().updateConsentParameteres();
      },
	  acceptCookies: () => {
		set(() => ({
			cookieConsent: true,
		}))
		get().updateConsentParameteres();
	  }
    }),
    {
      name: "cookie_consent_settings",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
