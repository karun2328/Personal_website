import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purna Satya Karun Saride | ML Systems Engineer",
  description: "ML Systems Engineer specializing in LLM Inference & Deployment. Optimizing and serving LLM inference efficiently on real hardware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}