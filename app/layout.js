import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://chandranova.com"), // ganti domain kamu nanti
  title: {
    default: "Chandra Nova | Website & Digital Services",
    template: "%s | Chandra Nova",
  },
  description:
    "Chandra Nova helps brands build a stronger digital presence through landing pages, company profile websites, travel websites, and social media content support.",

  openGraph: {
    title: "Chandra Nova | Website & Digital Services",
    description:
      "Premium websites and content support for brands that want to look professional and convert better.",
    url: "https://chandranova.com", // ganti domain kamu nanti
    siteName: "Chandra Nova",
    images: [
      {
        url: "/images/company-profile.png", // idealnya nanti pakai image khusus OG 1200x630
        width: 1200,
        height: 630,
        alt: "Chandra Nova - Website & Digital Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chandra Nova | Website & Digital Services",
    description:
      "Premium websites and content support for brands that want to look professional and convert better.",
    images: ["/images/company-profile.png"], // nanti lebih bagus pakai OG image khusus
  },

  icons: {
    icon: "/images/CN-LOGO.png", // bisa juga pakai /favicon.ico kalau ada
    shortcut: "/images/CN-LOGO.png",
    apple: "/images/CN-LOGO.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}