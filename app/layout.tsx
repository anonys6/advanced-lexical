import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Next.js Lexical Playground",
  description: "A playground for the Lexical Editor, built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-center m-0 bg-white">
          <nav className="flex w-[1200px] items-center justify-between py-6">
            <Link href="/" className="text-3xl font-bold text-blue-600">
              Advanced Text Editor
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-600 text-lg hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 text-lg hover:text-gray-900"
              >
                Blog
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 text-lg hover:text-gray-900"
              >
                Privacy
              </Link>
            </div>
          </nav>
        </header>

        {children}

        <Footer />
      </body>
    </html>
  );
}
