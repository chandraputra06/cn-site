import "./globals.css";

export const metadata = {
  title: "CN Createsites",
  description: "Navigating Online Visibility & Authority",
  icons: {
    icon: "/images/CN-LOGO.png",
    shortcut: "/images/CN-LOGO.png",
    apple: "/images/CN-LOGO.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}