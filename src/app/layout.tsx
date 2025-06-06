import customTheme from "@/theme/themeConfig";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "List Tutorial",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>List Tutorial</title>
      </head>
      <ConfigProvider theme={customTheme}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </ConfigProvider>
    </html>
  );
}
