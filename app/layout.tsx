import type { Metadata, Viewport } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { Navigation } from "./_components/navigation";
import { AuthProvider } from "./_context/AuthContext";
import { getNavigation, getPages } from "@/lib/api/pages";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["arial", "sans-serif"],
});

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  fallback: ["arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "designmatters.",
  description: "Design Matters - we care about your design needs.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();
  console.log("Pages from DB:", pages);

  const navigationItems = await getNavigation();
  console.log("Navigation items extracted from CMS:", navigationItems);

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${lato.variable} antialiased bg-brand-fill-bg`}
      >
        <AuthProvider>
          <header className="fixed top-0 left-0 right-0 z-50 bg-brand-fill-bg border-b border-brand-stroke-weak">
            <Navigation pages={navigationItems} />
          </header>
          <main className="pt-28">
            <NuqsAdapter>{children}</NuqsAdapter>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
