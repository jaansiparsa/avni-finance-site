import "./globals.css";

import Link from "next/link";
import type { Metadata } from "next";
import NavAuthButton from "../NavAuthButton";

export const metadata: Metadata = {
  title: "lil finance bro",
  description: "finance: by friends, for friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-modern antialiased bg-bg-offwhite min-h-screen">
        <nav className="w-full flex items-center justify-between py-6 px-10 bg-primary mb-12 border-accent-yellow ">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-black text-3xl tracking-tighter text-white"
            >
              lil finance bro
            </Link>
          </div>
          <ul className="flex gap-10 text-lg font-bold">
            <li>
              <Link
                href="/about"
                className="px-2 py-1 hover:text-accent-yellow transition-colors text-white"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className="px-2 py-1 hover:text-accent-yellow transition-colors text-white"
              >
                articles
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="px-2 py-1 hover:text-accent-yellow transition-colors text-white"
              >
                resources
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="px-2 py-1 hover:text-accent-yellow transition-colors text-white"
              >
                contact
              </Link>
            </li>
            <li>
              <NavAuthButton />
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
