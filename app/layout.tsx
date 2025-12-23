import type { Metadata } from "next";
import { Caladea, DM_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Matt Shapiro",
};

const caladea = Caladea({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: "--font-caladea" 
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans" 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en" className={`${caladea.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}