import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "docx to html convertor",
  description: "Simple app created to convert the docx file to semantic html",
  openGraph:{
    title:"docx to html converter",
    description:"created by Galaxytechcraft",
    url:'https://www.galaxytechcraft.com',
    siteName:'GalaxyTechCraft'
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
