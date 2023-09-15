import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <header className="flex justify-between p-4 w-full">
            <div>
                <Link href={'/'}>
                    <h1 className="text-3xl font-bold">10005&rsquo;s Blog</h1>
                </Link>
            </div>
            <nav className="flex gap-4">
                <Link href={'/'}>home</Link>
                <Link href={'/about'}>about</Link>
                <Link href={'/posts'}>posts</Link>
                <Link href={'/contact'}>contact</Link>
            </nav>
        </header>
    );
}
