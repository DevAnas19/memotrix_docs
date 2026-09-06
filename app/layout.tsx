import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
export const metadata: Metadata = {
  title: "Memotrix — Composable hybrid memory for agents",
  description:
    "Composable hybrid memory / RAG for agents — pip-installable. Hybrid search, pluggable embeddings, 30+ file formats, and flexible storage.",
  openGraph: {
    images: ["/preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/preview.png"],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-paper text-ink font-sans antialiased flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}