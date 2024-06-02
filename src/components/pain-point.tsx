import { X, Check } from "lucide-react";
import Card from "./ui/card";

const beforeItems = [
    "I don't know where to start with my resume.",
    "I'm unsure what skills and experiences to highlight.",
    "My resume looks unprofessional and poorly formatted.",
    "It takes too much time to create a resume.",
    "I struggle with organizing my resume content.",
];

const afterItems = [
    "Clear guidance and step-by-step instructions.",
    "AI-powered suggestions for relevant skills and experiences.",
    "Professional templates that ensure a polished look.",
    "Quick and easy resume creation with AI assistance.",
    "Seamless content organization with intelligent structuring.",
];

export default function PainPoint() {
    return (
        <>
            <section className="w-full px-4 lg:px-6">
                <div className="mx-auto w-full max-w-7xl">
                    <h2 className="text-center text-3xl font-extrabold lg:mb-16">
                        Struggling to Craft Your Resume?
                    </h2>
                    <div className="my-8 grid gap-6 sm:grid-cols-2 md:mx-8 md:gap-8 lg:mx-16">
                        <Card
                            title="Before Using SmoothCV"
                            bgColor="bg-error/20"
                            textColor="text-red-700"
                            items={beforeItems}
                            Icon={X}
                        />
                        <Card
                            title="After Using SmoothCV"
                            bgColor="bg-success/20"
                            textColor="text-green-700"
                            items={afterItems}
                            Icon={Check}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
