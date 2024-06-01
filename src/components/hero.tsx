import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="w-full px-4 lg:px-6">
                <div className="mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-7xl grid-rows-2 gap-4 md:grid-cols-12 md:grid-rows-1">
                    <div className="flex h-full w-full items-center justify-center text-left md:col-span-5 lg:col-span-4">
                        <div className="gird w-full text-center md:text-left">
                            <h1 className="mb-5 text-3xl font-bold lg:text-5xl">
                                The Easy Way to Build Your Perfect Resume
                            </h1>
                            <p className="mb-5">
                                AI-Powered Suggestions and Corrections to Help
                                You Stand Out
                            </p>
                            <button className="btn btn-primary font-semibold">
                                Join SmoothCV
                            </button>
                        </div>
                    </div>
                    <div className="grid h-full w-full place-items-center -mt-6 md:mt-0 md:col-span-7 lg:col-span-8">
                        <Image
                            src="/hero.png"
                            alt="hero image"
                            priority
                            width={1080}
                            height={(928 / 9) * 16}
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
