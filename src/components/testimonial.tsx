import Avatar from "./ui/avatar";
import Rating from "./ui/rating";

interface Testimonial {
    message: string;
    name: string;
}

const testimonials: Testimonial[] = [
    {
        message:
            "SmoothCV's professional templates fit my industry perfectly. With an intuitive interface, I easily highlight my strengths, achieving polished results in minutes.",
        name: "Samuel",
    },
    {
        message:
            "I'm amazed by SmoothCV's user-friendly interface and variety of templates. It helped me create a standout resume effortlessly!",
        name: "Alexander",
    },
    {
        message:
            "SmoothCV made the daunting task of resume building simple and enjoyable. I highly recommend it!",
        name: "Olivia",
    },
    {
        message:
            "I love how SmoothCV streamlines the resume creation process. It's incredibly efficient and produces impressive results.",
        name: "Sophia",
    },
    {
        message:
            "SmoothCV's AI-powered suggestions took my resume to the next level. I'm thrilled with the professional outcome!",
        name: "Benjamin",
    },
];

export default function Testimonial({ index }: { index: number }) {
    const testimonial = testimonials[index];

    return (
        <section className="w-full px-4 lg:px-6">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4">
                <Rating count={5} />
                <p className="mx-auto flex w-full md:w-1/3 text-center">
                    {testimonial.message}
                </p>
                <div className="flex items-center gap-4">
                    <Avatar
                        images={[
                            {
                                src: `/avatars/${testimonial.name}.png`,
                                alt: testimonial.name,
                            },
                        ]}
                    />
                    <span>{testimonial.name}</span>
                </div>
            </div>
        </section>
    );
}
