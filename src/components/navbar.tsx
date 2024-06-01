"use client";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handler = () => {
        setOpen(!open);
    };

    return (
        <>
            <header className="h-16 w-full bg-base-100 px-4 lg:px-6">
                <nav className="container mx-auto grid h-full max-w-7xl grid-cols-2 items-center justify-items-stretch md:grid-cols-3">
                    <Link
                        href="/"
                        className="btn btn-ghost justify-self-start px-0 text-xl hover:bg-transparent hover:text-primary"
                    >
                        SmoothCV
                    </Link>
                    <div className="hidden justify-self-center md:block">
                        <ul className="flex gap-6">
                            <li>
                                <Link href="/pricing">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/pricing">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden justify-self-end md:block">
                        <div className="flex gap-4">
                            <button className="btn btn-outline btn-primary">
                                Login
                            </button>
                            <button className="btn btn-primary font-semibold">
                                Join SmoothCV
                            </button>
                        </div>
                    </div>
                    {open ? (
                        <div className="-mr-4 justify-self-end md:hidden lg:hidden">
                            <button
                                onClick={handler}
                                role="button"
                                className="btn btn-circle btn-ghost"
                            >
                                <MenuIcon size={24} />
                            </button>
                        </div>
                    ) : (
                        <div className="absolute right-0 top-0 z-10 min-h-screen w-full bg-white pt-[10px] shadow-lg sm:w-2/3">
                            <div className="grid">
                                <button
                                    onClick={handler}
                                    role="button"
                                    className="btn btn-circle btn-ghost justify-self-end"
                                >
                                    <X size={24} />
                                </button>
                                <ul className="grid gap-4 text-center">
                                    <li>
                                        <Link
                                            href="/pricing"
                                            className="btn btn-ghost w-2/3 text-lg"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/faq"
                                            className="btn btn-ghost w-2/3 text-lg"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                                <div className="mx-auto my-4 w-2/3 border-b border-primary"></div>
                                <div className="mx-auto grid w-2/3 gap-4">
                                    <button className="btn btn-outline btn-primary">
                                        Login
                                    </button>
                                    <button className="btn btn-primary font-semibold">
                                        Get SmoothCV
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
}
