import Container from "../container";
import Image from "next/image";

export default function Sponsors() {
    const sponsors = [
        { name: "AWS", logo: "/images/sponsors/aws.png" },
        { name: "Google", logo: "/images/sponsors/google.webp" },
        { name: "JetBrains", logo: "/images/sponsors/jetbrains.png" },
        { name: "Kora", logo: "/images/sponsors/kora.png" },
        { name: "Paystack", logo: "/images/sponsors/paystack.png" },
        { name: "TerraHaptix", logo: "/images/sponsors/terrahaptix.webp" },
        { name: "Wix Studio", logo: "/images/sponsors/wix-studio.webp" },
    ];

    return (
        <div className="w-full py-20">
            <Container>
                <div className="flex flex-col items-center">
                    <h3 className="font-medium text-[30px] text-[#989898] uppercase font-inter-display text-center mb-12">
                        2025 SPONSORS
                    </h3>

                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-12">
                        {sponsors.map((sponsor, index) => (
                            <div
                                key={index}
                                className="relative h-12 w-32 md:h-16 md:w-40 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            >
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
