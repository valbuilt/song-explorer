import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Anton, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Anton only comes in one weight
const headingFont = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Oswald({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Song Explorer",
  description:
    "Search for songs and look up their specifics such as their tempo and length and listen to previews",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <div className="app-container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
