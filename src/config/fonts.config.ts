import { Fira_Code, Geist, Lora, Noto_Sans_Arabic } from "next/font/google";

const fireCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  style: "italic",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

export const fonts = `${fireCode.variable} ${geist.variable} ${lora.variable} ${notoSansArabic.variable}`;
