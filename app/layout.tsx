import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { Navigation } from "./_components/navigation";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${lato.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 border-b">
          <div className="container mx-auto py-4 flex justify-center">
            <Navigation />
          </div>
        </header>
        <main className="pt-20">
          <NuqsAdapter>{children}</NuqsAdapter>
        </main>
      </body>
    </html>
  );
}
