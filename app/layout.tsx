import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "./components/Navigations/TopNav";
import Wrapper from "./components/Wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn to Detect Fake Links",
  description:
    "Learn how to detect phishing links and stay safe online. Scan suspicious URLs, access simple phishing awareness guides, and test your knowledge with an interactive quiz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNav />
        <main>{children}</main>

        <footer className=" ">
          <Wrapper>
            <div className=" mx-auto py-6 text-sm text-gray-600 flex items-center justify-between">
              <p>
                © {new Date().getFullYear()} PhishAware. Built with Love to make
                the web safer.
              </p>
              <p>
                <span>Made by</span> <strong>Adamu A.</strong>,{" "}
                <span>Ahmad T. A.</span>, <span>Sabo A. I.</span>
              </p>
            </div>
          </Wrapper>
        </footer>
      </body>
    </html>
  );
}
