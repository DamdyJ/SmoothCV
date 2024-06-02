import Image from "next/image";
import Reviews from "./reviews";

export default function Hero() {
    return (
        <>
            <div className="w-full px-4 lg:px-6">
                <div className="mx-auto flex flex-col min-h-[calc(100vh-64px)] w-full max-w-7xl grid-rows-2 gap-4 md:grid md:grid-cols-12 md:grid-rows-1">
                    <div className="flex h-full w-full items-center justify-center text-left md:col-span-5 lg:col-span-4">
                        <div className="gird w-full text-center md:text-left">
                            <h1 className="mb-5 mt-4 text-3xl font-bold lg:text-5xl">
                                The Easy Way to Build Your Perfect Resume
                            </h1>
                            <p className="mb-5">
                                AI-Powered Suggestions and Corrections to Help
                                You Stand Out
                            </p>
                            <button className="btn btn-primary font-semibold">
                                Join SmoothCV
                            </button>
                            <div className="mt-12">
                                <Reviews />
                            </div>
                        </div>
                    </div>
                    <div className="grid h-full w-full md:col-span-7 md:mt-0 md:place-items-center md:pt-4 lg:col-span-8">
                        <Image
                            src="/hero.png"
                            alt="hero image"
                            width={1080}
                            height={(928 / 9) * 16}
                            priority
                            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
