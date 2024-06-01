import Image from "next/image";

interface RatingProps {
    count?: number;
}

export default function Rating({ count = 5 }: RatingProps) {
    const stars = Array.from({ length: count }, (_, index) => (
        <Image
            key={index}
            src={"/icons/star.svg"}
            alt="star icon"
            width={24}
            height={24}
            priority
        />
    ));

    return <div className="flex">{stars}</div>;
}
