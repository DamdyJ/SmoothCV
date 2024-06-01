import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
}

interface AvatarProps {
    images: ImageProps[];
}

export default function Avatar({ images }: AvatarProps) {
    return (
        <>
            <div className="flex h-11 -space-x-4">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full border-4 border-base-content bg-base-300 object-cover"
                        priority
                    />
                ))}
            </div>
        </>
    );
}
