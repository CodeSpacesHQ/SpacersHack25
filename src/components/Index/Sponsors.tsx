import Container from "../container";
import SponsorCard from "./SponsorCard";

export default function Sponsors() {
    const sponsors = [
        {
            name: "AWS",
            logo: "/images/sponsors/aws.png",
            tag: "Cloud Partner",
            description: "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform.",
            website: "https://aws.amazon.com"
        },
        {
            name: "Google",
            logo: "/images/sponsors/google.webp",
            tag: "Tech Giant",
            description: "Google's mission is to organize the world's information and make it universally accessible and useful.",
            website: "https://about.google"
        },
        {
            name: "JetBrains",
            logo: "/images/sponsors/jetbrains.png",
            tag: "Tooling Partner",
            description: "Essential tools for software developers and teams, including IntelliJ IDEA, PyCharm, and more.",
            website: "https://www.jetbrains.com"
        },
        {
            name: "Kora",
            logo: "/images/sponsors/kora.png",
            tag: "Payment Partner",
            description: "Kora is a payment infrastructure for Africa, enabling businesses to accept payments and settle funds.",
            website: "https://korapay.com"
        },
        {
            name: "Paystack",
            logo: "/images/sponsors/paystack.png",
            tag: "Payment Partner",
            description: "Paystack helps businesses in Africa get paid by anyone, anywhere in the world.",
            website: "https://paystack.com"
        },
        {
            name: "TerraHaptix",
            logo: "/images/sponsors/terrahaptix.webp",
            tag: "Hardware Partner",
            description: "TerraHaptix is building the future of autonomous systems and robotics in Africa.",
            website: "https://terrahaptix.com"
        },
        {
            name: "Wix Studio",
            logo: "/images/sponsors/wix-studio.webp",
            tag: "Web Partner",
            description: "Wix Studio is the ultimate web creation platform for agencies and freelancers.",
            website: "https://www.wix.com/studio"
        },
    ];

    return (
        <div className="w-full py-20">
            <Container>
                <div className="flex flex-col items-center">
                    <h3 className="font-medium text-[30px] text-[#989898] uppercase font-inter-display text-center mb-12">
                        EVENT SPONSORS
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full">
                        {sponsors.map((sponsor, index) => (
                            <SponsorCard key={index} {...sponsor} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
