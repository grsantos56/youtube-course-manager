import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
import "./globals.css";

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
        <div className="min-h-full flex flex-col">{children}</div>
      </body>
    </html>
  );
}
