import Link from "next/link";
import React from "react";
import Avatar from "./ui/avatar";

const image = [{ src: "/avatars/DamdyJ.png", alt: "Damdy Junaedi" }];

export default function Footer() {
    return (
        <>
            <footer className="min-h-24 w-full bg-base-content px-4 lg:px-6">
                <div className="mx-auto w-full max-w-7xl">
                    <div>
                        <div className="grid md:grid-cols-3 text-white">
                            <div>
                                <Link
                                    href="/"
                                    className="btn btn-ghost justify-self-start px-0 text-lg text-center w-full md:text-left md:w-fit text-primary hover:bg-transparent hover:text-primary"
                                >
                                    SmoothCV
                                </Link>
                                <p className="text-sm text-center md:text-left w-full md:w-2/3">
                                    "SmoothCV: Craft standout resumes
                                    effortlessly. Professional templates, AI
                                    suggestions, intuitive tools."
                                </p>
                                <p className="text-sm text-white/50 py-4 text-center md:text-left">
                                    Copyright © 2024 - All rights reserved
                                </p>
                            </div>
                            <div className="pt-4 w-full text-center md:text-left">
                                <h4 className="font-xl font-bold text-white/50">
                                    LINKS
                                </h4>
                                <ul>
                                    <li>
                                        <Link
                                            href={"/#pricing"}
                                            className="text-sm"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"/#faq"}
                                            className="text-sm"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 w-full text-center md:text-left">
                                <h4 className="font-xl font-bold text-white/50">
                                    LEGAL
                                </h4>
                                <ul>
                                    <li>
                                        <Link href={"/"} className="text-sm">
                                            Terms of services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className="text-sm">
                                            Privacy policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 py-4">
                            <Avatar images={image} />
                            <p className="text-sm text-white text-center md:text-left">
                                Hi👋 I'm Damdy, the creator of SmoothCV. You can
                                follow my work on{" "}
                                <Link
                                    href={"https://github.com/DamdyJ"}
                                    className="font-bold underline underline-offset-2"
                                >
                                    Github
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
