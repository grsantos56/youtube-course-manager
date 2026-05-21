'use client';

import { useState } from "react";
import Link from "next/link";
import {
  House,
  BookOpen,
  Newspaper,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();

    const currentLabel = currentPath === '/cursos' ? 'Cursos' : currentPath === '/blog' ? 'Blog' : 'Home';

    const linkClass = (path: string) =>
        `flex items-center justify-center gap-2 rounded-md px-3 py-2 transition-colors ${currentPath === path ? 'underline bg-white/10 font-semibold' : 'hover:underline'}`;

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="bg-primary text-white p-4">
            <nav className="mx-auto flex max-w-7xl items-center justify-between sm:justify-center">
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white transition-opacity hover:opacity-90 sm:hidden"
                    aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                <span className="sm:hidden text-sm font-medium text-white/90">{currentLabel}</span>

                <ul className={`w-full ${isOpen ? 'block' : 'hidden'} space-y-3 text-center sm:mx-auto sm:flex sm:w-auto sm:space-y-0 sm:flex-row sm:items-center sm:justify-center sm:gap-6`}>
                    <li>
                        <Link href="/" className={linkClass('/')} onClick={closeMenu}>
                            <House size={18} />
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/cursos" className={linkClass('/cursos')} onClick={closeMenu}>
                            <BookOpen size={18} />
                            Cursos
                        </Link>
                    </li>

                    <li>
                        <Link href="/blog" className={linkClass('/blog')} onClick={closeMenu}>
                            <Newspaper size={18} />
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};