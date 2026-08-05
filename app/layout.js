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

export const metadata = {
  title: "Aditya Malkar | Data Scientist & ML Engineer",
  description:
    "The voyage of Aditya Malkar — Data Scientist and ML Engineer. From Mumbai to Hoboken, charted in deep learning models, AI agents, and data pipelines. Explore projects in NLP, Computer Vision, and AI systems.",
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
      </body>
    </html>
  );
}
