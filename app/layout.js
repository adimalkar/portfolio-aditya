import { GoogleTagManager } from "@next/third-parties/google";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedBackground from "./components/animated-background";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
});

export const metadata = {
  title: "Aditya Malkar | Data Scientist & ML Engineer",
  description:
    "Portfolio of Aditya Malkar - A passionate Data Science graduate student specializing in Machine Learning, AI, Deep Learning, and building impactful data-driven solutions. Explore my projects in NLP, Computer Vision, and AI systems.",
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className={spaceGrotesk.className}>
        <ToastContainer />
        <AnimatedBackground />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white z-10">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
