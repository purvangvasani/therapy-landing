import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DockDemo } from "./dock-navigation/dock-nav";
import Link from "next/link";
import GoogleTag from "./GoogleTag";
import ChatWidget from "../../components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyTherapy.co.in",
  description: "Ai Powered Therapy app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <DockDemo />
        <main>
          {children}
          <GoogleTag />
          <ChatWidget />
        </main>
        <footer className="footer bg-base-200/60 px-6 py-4">
          <div className="flex w-full flex-wrap items-center justify-between">
            
            <aside className="grid-flow-col items-center justify-center">
              <p> ©2025 <Link className="link link-hover font-medium" href="/">MyTherapy.co.in</Link> </p>
            </aside>
            {/* <div className="flex h-5 gap-4">
              <GitHubLogoIcon className="size-5" />
              <TwitterLogoIcon className="size-5" />
              <LinkedInLogoIcon className="size-5" />
              <DiscordLogoIcon className="size-5" />
            </div> */}
          </div>
        </footer>
      </body>
    </html>
  );
}
