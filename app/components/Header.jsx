"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full px-8 py-4 border-b border-gray-200 flex items-center justify-between bg-[#fef8f7]">
            <nav className="flex space-x-4">

            <div className="text-xl font-bold">
                <Link href="/">
                    Yarnsy
                </Link>
            </div>  
        
            </nav>

            <ul>
                <li className="inline-block mx-4">
                    <Link href="/" className="text-gray-700 hover:text-gray-900">
                        Home
                    </Link>
                </li>
                <li className="inline-block mx-4">
                    <Link href="/shop" className="text-gray-700 hover:text-gray-900">
                        Shop
                    </Link>
                </li>
                <li className="inline-block mx-4">
                    <Link href="/about" className="text-gray-700 hover:text-gray-900">
                        About
                    </Link>
                </li>
                <li className="inline-block mx-4">
                    <Link href="/login" className="text-gray-700 hover:text-gray-900">
                        Login
                    </Link>
                </li>
                <li className="inline-block mx-4 bg-violet-200 rounded-lg px-3 py-1 hover:bg-violet-300">
                    <Link href="/signup" className="text-gray-700 hover:text-gray-900">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </header>
    );
}
