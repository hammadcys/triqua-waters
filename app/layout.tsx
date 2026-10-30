import type { Metadata } from "next";
import { Outfit, Figtree } from "next/font/google";
import "./globals.css";
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const description = "Customized bottled water with your own logo and label for cafes, restaurants, hotels, offices and events. Wah Cantt, Pakistan.";
export const metadata: Metadata = {
  title: "TRIQUA WATERS | Customized Branded Water Bottles in Pakistan",
  description,
  keywords: ["customized water bottles Pakistan", "branded bottled water", "personalized water bottles", "restaurant branded water bottles", "custom water bottle labels", "customized water bottles Wah Cantt", "branded bottled water Rawalpindi", "customized bottled water Islamabad"],
  openGraph: { title: "TRIQUA WATERS | Label Every Bottle. Mark Every Sip.", description, type: "website", siteName: "TRIQUA WATERS" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${outfit.variable} ${figtree.variable}`}><body>{children}</body></html>);
}
