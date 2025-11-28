import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "Perfect for testing and small projects.",
        features: [
            "1 Agent",
            "100 mins/month",
            "Standard Voices",
            "Community Support",
        ],
        cta: "Start Free",
        popular: false,
    },
    {
        name: "Pro",
        price: "$49",
        period: "/month",
        description: "For growing businesses and teams.",
        features: [
            "5 Agents",
            "1,000 mins/month",
            "Premium Voices",
            "Priority Support",
            "Analytics Dashboard",
        ],
        cta: "Get Started",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large scale deployments.",
        features: [
            "Unlimited Agents",
            "Volume Discounts",
            "Custom Voice Clones",
            "Dedicated Account Manager",
            "SLA",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function PricingPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Simple, Transparent Pricing</h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                    Start for free and scale as you grow. No hidden fees.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative bg-zinc-900 border rounded-2xl p-8 flex flex-col ${plan.popular ? 'border-violet-500 shadow-2xl shadow-violet-500/10' : 'border-zinc-800'
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                            <p className="text-zinc-400 text-sm h-10">{plan.description}</p>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-bold text-white">{plan.price}</span>
                            <span className="text-zinc-500">{plan.period}</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center text-zinc-300 text-sm">
                                    <Check className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-3 rounded-lg font-medium transition ${plan.popular
                                ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                                : 'bg-zinc-800 text-white hover:bg-zinc-700'
                            }`}>
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
