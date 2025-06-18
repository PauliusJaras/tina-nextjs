//deployment 45
import {
  UsernamePasswordAuthJSProvider,
  TinaUserCollection,
} from "tinacms-authjs/dist/tinacms";
import { defineConfig, LocalAuthProvider } from "tinacms";

import { HomepageCollection } from "./collections/homepage";
import { AutopliusCollection } from "./collections/autoplius";
import { CategoryCollection } from "./collections/category";
import { NavbarCollection } from "./collections/navbar";
import { FooterCollection } from "./collections/footer";
import { CarCollection } from "./collections/car";
import { CarPageCollection } from "./collections/carPage";
import { NewsPageCollection } from "./collections/news";
import { EmployeeCollection } from "./collections/employee";
import { ContactsPageCollection } from "./collections/contacts";
import { DealershipCarCollection } from "./collections/dealershipCar";
import { SpecialOfferCollection } from "./collections/specialOffer";
import { PageCollection } from "./collections/page";
import { FormCollection } from "./collections/forms";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default defineConfig({
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  contentApiUrlOverride: "/api/tina/gql",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-s3");
      return pack.TinaCloudS3MediaStore;
    },
  },
  schema: {
    collections: [
      TinaUserCollection,
      HomepageCollection,
      AutopliusCollection,      
      PageCollection,
      CategoryCollection,
      CarCollection,
      CarPageCollection,
      DealershipCarCollection,
      NewsPageCollection,
      EmployeeCollection,
      ContactsPageCollection,
      SpecialOfferCollection,
      FormCollection,
      NavbarCollection,
      FooterCollection,
    ],
  },
});
