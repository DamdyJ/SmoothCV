import { LucideIcon } from "lucide-react";

interface CardProps {
    title: string;
    bgColor: string;
    textColor: string;
    items: string[];
    Icon: LucideIcon;
}

export default function Card({
    title,
    bgColor,
    textColor,
    items,
    Icon,
}: CardProps) {
    return (
        <>
            <div
                className={`grid w-full gap-6 rounded-md ${bgColor} p-6 lg:p-8 ${textColor}`}
            >
                <h3 className="text-center text-xl font-semibold">{title}</h3>
                <ul className="grid gap-4">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 font-medium">
                            <Icon size={16} />
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
