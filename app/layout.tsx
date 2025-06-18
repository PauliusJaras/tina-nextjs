import Navbar from "../components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { client } from "../tina/__generated__/databaseClient";
import Footer from "../components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "../components/google/CookieBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Analytics from "../components/google/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    "https://" + process.env.VERCEL_URL || "https://localhost:3000",
  ),
  title: {
    default: "Subaru - JMA Centras",
    template: "JMA Centras - %s",
  },
  description: "JMA Centras - oficialus Subaru atstovas",
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resNav = await client.queries.navbarAndNews({
    relativePath: "nav.md",
    sort: "date",
    last: 5,
  });
  const resFooter = await client.queries.footer({ relativePath: "footer.md" });

  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID || "G-TEMPLATE"} />
      <body className={inter.className}>
        <Navbar
          data={JSON.parse(JSON.stringify(resNav.data))}
          query={resNav.query}
          variables={resNav.variables}
        />
        {children}
        <SpeedInsights />
        <Suspense>
          <Analytics />
        </Suspense>
        <Footer
          data={JSON.parse(JSON.stringify(resFooter.data))}
          query={resFooter.query}
          variables={resFooter.variables}
        />
        <CookieBanner />
      </body>
    </html>
  );
}
