import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Fraunces, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import VoyageStage from "./components/voyage/voyage-stage";
import "./css/globals.scss";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains',
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: '--font-fraunces',
});

const siteUrl = "https://www.adityamalkar.com";
const description =
  "The voyage of Aditya Malkar — Data Scientist and ML Engineer. From Mumbai to Hoboken, charted in deep learning models, AI agents, and data pipelines. Explore projects in NLP, Computer Vision, and AI systems.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aditya Malkar | Data Scientist & ML Engineer",
  description,
  keywords: [
    "Aditya Malkar",
    "Data Scientist",
    "Machine Learning Engineer",
    "MLOps",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "LangChain",
    "AWS",
    "Stevens Institute of Technology",
  ],
  authors: [{ name: "Aditya Malkar", url: siteUrl }],
  creator: "Aditya Malkar",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Aditya Malkar",
    title: "Aditya Malkar | Data Scientist & ML Engineer",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Malkar | Data Scientist & ML Engineer",
    description,
    creator: "@malkar_aditya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}>
      <body className={spaceGrotesk.className}>
        <ToastContainer theme="dark" position="top-center" autoClose={5000} style={{ zIndex: 99999 }} />
        <VoyageStage />
        <Navbar />
        <main className="voyage-main">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
