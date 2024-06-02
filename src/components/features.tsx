"use client";
import Image from "next/image";
import { useState } from "react";

export default function Features() {
    const [open, setOpen] = useState(true);

    const toggleMenu = () => {
        setOpen(!open);
    };
    return (
        <>
            <section className="w-full px-4 lg:px-6">
                <div className="mx-auto w-full max-w-7xl">
                    <h2 className="my-16 text-center text-3xl font-extrabold">
                        Easyly build your own resume
                    </h2>
                    <div className="my-8 grid gap-6 sm:grid-cols-2 md:mx-8 md:gap-8 lg:mx-16">
                        <div className="grid place-items-center">
                            <Image
                                src="/easy-edit-thumbnail.png"
                                alt="easy edit thumbnail"
                                width={500}
                                height={100}
                                priority
                                className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>
                        <div>
                            <div
                                className={`collapse collapse-plus hover:text-primary ${open ? "collapse-open" : "collapse-close"} `}
                                onClick={toggleMenu}
                            >
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-semibold">
                                    1. AI-Powered Resume Suggestions
                                </div>
                                <div className="border-content mx-auto my-4 w-full border-b"></div>
                                <div className="collapse-content">
                                    <p>
                                        Get personalized recommendations on
                                        skills, experiences, and keywords to
                                        make your resume stand out.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus hover:text-primary">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-semibold">
                                    2. Professional Templates
                                </div>
                                <div className="border-content mx-auto my-4 w-full border-b"></div>
                                <div className="collapse-content">
                                    <p>
                                        Choose from a variety of beautifully
                                        designed templates that fit your
                                        industry and style.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus hover:text-primary">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-semibold">
                                    3. One-Click Export
                                </div>
                                <div className="border-content mx-auto my-4 w-full border-b"></div>
                                <div className="collapse-content">
                                    <p>
                                        Export your resume in multiple formats
                                        (PDF, Word, etc.) with a single click,
                                        making it easy to share with potential
                                        employers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
