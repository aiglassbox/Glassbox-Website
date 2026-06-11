import type { Metadata } from "next";
import { Inter, Chivo_Mono, Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProgressiveBlur } from "@/components/ui/ProgressiveBlur";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const chivo = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo",
  display: "swap",
});

// Heavy grotesk used for display headings
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

// Utara Bold, the GLASSBOX hero wordmark
const utara = localFont({
  src: "../fonts/Utara-Bold.ttf",
  variable: "--font-utara",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glassbox - Creative Agency",
  description:
    "Glassbox was designed for forward-thinking studios that value substance as much as style, engineered to command attention, simplify complex ideas, and build lasting authority.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${chivo.variable} ${archivo.variable} ${utara.variable}`}>
      <body className="noise antialiased">
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
        <ProgressiveBlur />
      </body>
    </html>
  );
}
