import { BillingPeriodProvider } from "./components/billing-period-provider/billing-period-provider";
import { PricingCardGrid } from "./components/pricing-card-grid/pricing-card-grid";
import { PricingCard } from "./components/pricing-card/pricing-card";
import { ThemeProvider } from "./components/theme-provider/theme-provider";
import { ThemeToggle } from "./components/theme-toggle/theme-toggle";

const cards = [
    {
        id: "card-freebie",
        title: "Freebie",
        description:
            "Ideal for individuals who need quick access to basic features.",
        price: { monthly: 0, yearly: 0 },
        features: [
            {
                id: "feature-1-1",
                label: "20,000+ of PNG & SVG graphics",
                available: true,
            },
            {
                id: "feature-1-2",
                label: "Access to 100 million stock images",
                available: true,
            },
            {
                id: "feature-1-3",
                label: "Upload custom icons and fonts",
                available: false,
            },
            {
                id: "feature-1-4",
                label: "Unlimited Sharing",
                available: false,
            },
            {
                id: "feature-1-5",
                label: "Upload graphics & video in up to 4k",
                available: false,
            },
            {
                id: "feature-1-6",
                label: "Unlimited Projects",
                available: false,
            },
            {
                id: "feature-1-7",
                label: "Instant Access to our design system",
                available: false,
            },
            {
                id: "feature-1-8",
                label: "Create teams to collaborate on designs",
                available: false,
            },
        ],
    },
    {
        id: "card-professional",
        isFocused: true,
        title: "Professional",
        description:
            "Ideal for individuals who who need advanced features and tools for client work.",
        price: { monthly: 25, yearly: 250 },
        features: [
            {
                id: "feature-2-1",
                label: "20,000+ of PNG & SVG graphics",
                available: true,
            },
            {
                id: "feature-2-2",
                label: "Access to 100 million stock images",
                available: true,
            },
            {
                id: "feature-2-3",
                label: "Upload custom icons and fonts",
                available: true,
            },
            {
                id: "feature-2-4",
                label: "Unlimited Sharing",
                available: true,
            },
            {
                id: "feature-2-5",
                label: "Upload graphics & video in up to 4k",
                available: true,
            },
            {
                id: "feature-2-6",
                label: "Unlimited Projects",
                available: true,
            },
            {
                id: "feature-2-7",
                label: "Instant Access to our design system",
                available: false,
            },
            {
                id: "feature-2-8",
                label: "Create teams to collaborate on designs",
                available: false,
            },
        ],
    },
    {
        id: "card-enterprise",
        title: "Enterprise",
        description:
            "Ideal for businesses who need personalized services and security for large teams.",
        price: { monthly: 100, yearly: 1000 },
        features: [
            {
                id: "feature-3-1",
                label: "20,000+ of PNG & SVG graphics",
                available: true,
            },
            {
                id: "feature-3-2",
                label: "Access to 100 million stock images",
                available: true,
            },
            {
                id: "feature-3-3",
                label: "Upload custom icons and fonts",
                available: true,
            },
            {
                id: "feature-3-4",
                label: "Unlimited Sharing",
                available: true,
            },
            {
                id: "feature-3-5",
                label: "Upload graphics & video in up to 4k",
                available: true,
            },
            {
                id: "feature-3-6",
                label: "Unlimited Projects",
                available: true,
            },
            {
                id: "feature-3-7",
                label: "Instant Access to our design system",
                available: true,
            },
            {
                id: "feature-3-8",
                label: "Create teams to collaborate on designs",
                available: true,
            },
        ],
    },
];

function App() {
    return (
        <ThemeProvider>
            <BillingPeriodProvider>
                <div className="font-display flex flex-col items-center w-full min-h-screen p-6 py-10 md:p-18">
                    <PricingCardGrid>
                        {cards.map(({ id, ...props }) => (
                            <PricingCard key={id} {...props} />
                        ))}
                    </PricingCardGrid>
                </div>
                <ThemeToggle />
            </BillingPeriodProvider>
        </ThemeProvider>
    );
}

export default App;
