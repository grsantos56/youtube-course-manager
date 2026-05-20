'use client';

import Link from "next/link";
import {
  House,
  BookOpen,
  Newspaper,
} from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = () => {

    const currentPath = usePathname();

    const linkClass = (path: string) =>
      `flex items-center gap-2 hover:underline ${currentPath === path ? 'underline' : ''}`;

    return (
        <header className="bg-primary text-white p-4 flex items-center justify-center">
        <nav>
            <ul className="flex items-center gap-6">
            <li>
                <Link
                href="/"
                className={linkClass('/')}
                >
                <House size={18} />
                Home
                </Link>
            </li>

            <li>
                <Link
                href="/cursos"
                className={linkClass('/cursos')}
                >
                <BookOpen size={18} />
                Cursos
                </Link>
            </li>

            <li>
                <Link
                href="/blog"
                className={linkClass('/blog')}
                >
                <Newspaper size={18} />
                Blog
                </Link>
            </li>
            </ul>
        </nav>
        </header>
    );
};