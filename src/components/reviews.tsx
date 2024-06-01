import Avatar from "./ui/avatar";
import Rating from "./ui/rating";

const imageList = [
    { src: "/avatars/Alexander.png", alt: "Alexander" },
    { src: "/avatars/Olivia.png", alt: "Olivia" },
    { src: "/avatars/Benjamin.png", alt: "Benjamin" },
    { src: "/avatars/Sophia.png", alt: "Sophia" },
    { src: "/avatars/Samuel.png", alt: "Samuel" },
];

export default function Reviews() {
    return (
        <div className="flex flex-col items-center gap-2 md:items-start xl:flex-row xl:items-center xl:gap-12">
            <Avatar images={imageList} />

            <div className="flex flex-col items-center md:items-start">
                <div>
                    <Rating count={5} />
                </div>

                <div className="w-full">
                    <strong className="text-sm">1,000+</strong>
                    <span className="text-sm">
                        {" "}
                        Job Seekers Succeed with SmoothCV
                    </span>
                </div>
            </div>
        </div>
    );
}
