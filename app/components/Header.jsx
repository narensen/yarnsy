"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full px-8 py-4 border-b border-gray-200 flex items-center justify-between bg-black text-white">
            <nav className="flex space-x-4">

            <div className="text-xl font-mono font-bold">
                <Link href="/">
                    MadForge
                </Link>
            </div>  
        
            </nav>

            <ul>
                <li className="inline-block mx-4">
                    <Link href="/" className="text-gray-300 hover:text-gray-100">
                        Home
                    </Link>
                </li>
                <li className="inline-block mx-4">
                    <Link href="/shop" className="text-gray-300 hover:text-gray-100">
                        Shop
                    </Link>
                </li>
                <li className="inline-block mx-4">
                    <Link href="/about" className="text-gray-300 hover:text-gray-100">
                        About
                    </Link>
                </li>
                <li className="inline-block mx-4">
                    <Link href="/login" className="text-gray-300 hover:text-gray-100">
                        Login
                    </Link>
                </li>
                <li className="inline-block mx-4 bg-white rounded-lg px-3 py-1 hover:bg-white/60 ease-in-out duration-200">
                    <Link href="/signup" className="text-black hover:text-white">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </header>
    );
}
