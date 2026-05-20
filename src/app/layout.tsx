import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { Header } from "@/components/header/Header";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gestor de Cursos",
  description: "Gestor de Cursos voltado para usuários que usam o youtube para aprender, com o objetivo de organizar os cursos e facilitar o acesso aos conteúdos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
    >
      <body className={nunito.className}>
        <Header />
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
