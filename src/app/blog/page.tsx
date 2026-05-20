import { Hammer } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="bg-background text-text flex items-center justify-center py-10">
      <div className="flex flex-col items-center gap-4">
        <Hammer size={64} className="text-primary" />

        <h1 className="text-3xl font-bold">
          Página em desenvolvimento
        </h1>

        <p className="text-zinc-400">
          Estamos preparando novidades para você.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
          <Link href="/">Voltar para a home</Link>
        </button>
      </div>
    </main>
  );
}