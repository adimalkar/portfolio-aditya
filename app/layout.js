import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/globals.scss";

const sans = localFont({ src: "./fonts/space-grotesk.woff2", weight: "300 700", variable: "--sans", display: "swap" });
const serif = localFont({ src: "./fonts/fraunces-italic.woff2", style: "italic", variable: "--serif", display: "swap" });
const siteUrl = "https://www.adityamalkar.com";
const title = "Aditya Malkar | Applied AI & ML Engineer";
const description = "Aditya Malkar builds retrieval systems, ML services, and open-source developer tools. Explore his projects, contributions, experience, and résumé.";

export const metadata = {
  metadataBase: new URL(siteUrl), title, description,
  authors: [{ name: "Aditya Malkar", url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: "Aditya Malkar", title, description },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/profile.png", apple: "/profile.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable + " " + serif.variable}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
