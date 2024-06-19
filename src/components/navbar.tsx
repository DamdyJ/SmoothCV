import { X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <header className="drawer drawer-end z-50">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar w-full bg-neutral text-neutral-content">
                        <div className="mx-auto w-full max-w-7xl">
                            <div className="mx-2 flex-1 px-2 text-lg font-semibold text-primary md:navbar-start">
                                <Link href={"/"}>SmoothCV</Link>
                            </div>
                            <div className="hidden md:navbar-center md:flex">
                                <ul className="menu menu-horizontal px-1">
                                    <li>
                                        <Link
                                            href={"#pricing"}
                                            className="btn btn-ghost hover:bg-transparent hover:font-semibold hover:text-white"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#faq"}
                                            className="btn btn-ghost hover:bg-transparent hover:font-semibold hover:text-white"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-none md:hidden">
                                <label
                                    htmlFor="my-drawer-3"
                                    aria-label="open sidebar"
                                    className="btn btn-square btn-ghost"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-6 w-6 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </label>
                            </div>

                            <div className="hidden flex-none md:navbar-end sm:items-end md:flex md:flex-1">
                                <ul className="menu menu-horizontal space-x-4">
                                    {/* Navbar menu content here */}
                                    <li>
                                        <Link
                                            href={"/"}
                                            className="btn btn-outline btn-primary"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"/"}
                                            className="btn btn-primary"
                                        >
                                            Get SmoothCV
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-3"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu min-h-full w-80 space-y-4 bg-white p-4">
                        {/* Sidebar content here */}
                        <div className="flex items-center justify-between">
                            <span className="w-fit text-2xl font-semibold">
                                Menu
                            </span>
                            <label
                                htmlFor="my-drawer-3"
                                aria-label="close sidebar"
                                className="btn btn-ghost rounded-lg"
                            >
                                <X size={24} />
                            </label>
                        </div>
                        <li>
                            <Link
                                href={"#pricing"}
                                className="btn btn-ghost text-lg hover:text-black"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"#faq"}
                                className="btn btn-ghost text-lg hover:text-black"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="btn btn-outline btn-primary text-lg"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="btn btn-primary text-lg"
                            >
                                Get SmoothCV
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
