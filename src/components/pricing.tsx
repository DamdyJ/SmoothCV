import { Check } from "lucide-react";

const pricingTiers = [
    {
        name: "Basic",
        price: "$5",
        features: [
            "5 Custom Templates",
            "Limited Resume Builder",
            "500 AI token / month",
        ],
    },
    {
        name: "Standard",
        price: "$10",
        features: [
            "10 Custom Templates",
            "Unlimited Resume Builder",
            "1,000 AI token / month",
        ],
    },
    {
        name: "Premium",
        price: "$15",
        features: [
            "15 Custom Templates",
            "Unlimited Resume Builder",
            "2,000 AI token / month",
        ],
    },
];

export default function Pricing() {
    return (
        <>
            <section className="w-full px-4 lg:px-6">
                <div className="mx-auto w-full max-w-7xl">
                    <h2
                        id="pricing"
                        className="pb-8 pt-4 text-center text-3xl font-extrabold"
                    >
                        Pricing
                    </h2>
                    <div className="lg:mx-20 flex flex-col md:flex-row md:justify-between gap-4">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`grid sm:text-center md:w-fit gap-4 rounded-lg border bg-white p-8 shadow-sm ${
                                    index === 1 ? "border-2 border-primary" : ""
                                }`}
                            >
                                <h4 className="text-xl font-medium">
                                    {tier.name}
                                </h4>
                                <span className="text-5xl font-bold">
                                    {tier.price}
                                </span>
                                <div className="divider"></div>
                                <ul className="grid gap-2">
                                    {tier.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-3 justify-center sm:justify-start"
                                        >
                                            <Check size={16} />
                                            <p>{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <button className="btn btn-primary">
                                    Get SmoothCV
                                </button>
                                <p className="text-sm text-base-content/50">
                                    One-time payment, then it's yours forever
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
