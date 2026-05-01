import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/common/header";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "박찬오 | 프론트엔드 포트폴리오",
  description: "프론트엔드 개발자 박찬오 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body>
        <Header />
        <main className="relative h-full w-full p-4 md:px-5">{children}</main>
      </body>
    </html>
  );
}
