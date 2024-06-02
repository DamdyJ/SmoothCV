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
                        <div className="grid text-white md:grid-cols-3">
                            <div>
                                <Link
                                    href="/"
                                    className="btn btn-ghost w-full justify-self-start px-0 text-center text-lg text-primary hover:bg-transparent hover:text-primary md:w-fit md:text-left"
                                >
                                    SmoothCV
                                </Link>
                                <p className="w-full text-center text-sm md:w-2/3 md:text-left">
                                    &quot;SmoothCV: Craft standout resumes
                                    effortlessly. Professional templates, AI
                                    suggestions, intuitive tools.&quot;
                                </p>
                                <p className="py-4 text-center text-sm text-white/50 md:text-left">
                                    Copyright © 2024 - All rights reserved
                                </p>
                            </div>
                            <div className="w-full pt-4 text-center md:text-left">
                                <h4 className="font-xl font-bold text-white/50">
                                    LINKS
                                </h4>
                                <ul>
                                    <li>
                                        <Link
                                            href="#pricing"
                                            className="text-sm"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#faq" className="text-sm">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full pt-4 text-center md:text-left">
                                <h4 className="font-xl font-bold text-white/50">
                                    LEGAL
                                </h4>
                                <ul>
                                    <li>
                                        <Link href="/" className="text-sm">
                                            Terms of services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-sm">
                                            Privacy policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 py-4">
                            <Avatar images={image} />
                            <p className="text-center text-sm text-white md:text-left">
                                Hi👋 I&apos;m Damdy, the creator of SmoothCV.
                                You can follow my work on{" "}
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
