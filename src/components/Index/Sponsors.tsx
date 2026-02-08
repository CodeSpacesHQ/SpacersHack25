import Container from "../container";
import Image from "next/image";

export default function Sponsors() {
    const sponsors = [
        { name: "AWS", logo: "/images/sponsors/aws.png" },
        { name: "Paystack", logo: "/images/sponsors/paystack.png" },
        { name: "Wix Studio", logo: "/images/sponsors/wix-studio.webp" },
        { name: "Kora", logo: "/images/sponsors/kora.png" },
        { name: "TerraHaptix", logo: "/images/sponsors/terrahaptix.webp" },
        { name: "Pallax", logo: "/images/sponsors/pallax.png" },
        { name: "Tublian", logo: "/images/sponsors/tuliban.png" },
        { name: "JetBrains", logo: "/images/sponsors/jetbrains.png" },
        { name: "Inside The Tech Ecosystem", logo: "/images/sponsors/inside-the-tech-ecosystem.jpg" },
        { name: "Google", logo: "/images/sponsors/google.webp" },
        { name: "Couchbase", logo: "/images/sponsors/couchbase.png" },
    ];

    const communityPartners = [
        { name: "Nontech In Tech", logo: "/images/sponsors/ntit.png" },
        { name: "Design With Rooks", logo: "/images/sponsors/design-with-rooks.png" },
        { name: "People In Product", logo: "/images/sponsors/people-in-product.jpg" },
        { name: "Empower Her Community", logo: "/images/sponsors/empower-her.jpg" },
        { name: "The Garage", logo: "/images/sponsors/the-garage.png" },
        { name: "BuildHubb", logo: "/images/sponsors/build-hubb.jpg" },
        { name: "Community Leads Africa", logo: "/images/sponsors/community-leads-africa.png" },
        { name: "APMP", logo: "/images/sponsors/apmp.png" },
        { name: "Product Buddies", logo: "/images/sponsors/product-buddies.jpg" },
        { name: "Tech Noob", logo: "/images/sponsors/tech-noob.jpg" },
        { name: "Techies On LinkedIn", logo: "/images/sponsors/techies-on-linkedin.png" },
        { name: "Mentorship For Acceleration", logo: "/images/sponsors/mentorship-for-acceleration.png" },
    ];

    const mediaPartners = [
        { name: "Tech Moonshot", logo: "/images/sponsors/tech-moon-shot.png" },
        { name: "The Unserious Tech Show", logo: "/images/sponsors/the-unserious-tech-show.png" },
    ];

    const renderLogos = (logos: { name: string; logo: string }[]) => (
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-12">
            {logos.map((partner, index) => {
                const isJpg =
                    partner.logo.endsWith(".jpg") || partner.logo.endsWith(".jpeg");
                return (
                    <div
                        key={index}
                        className={`relative h-16 w-40 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${isJpg ? "mix-blend-multiply" : ""
                            }`}
                    >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className={`object-contain ${isJpg ? "mix-blend-multiply" : ""} ${partner.name === "TerraHaptix" ? "brightness-0 invert scale-[1.5]" : ""}`}
                        />
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="w-full py-20 flex flex-col items-center">
            <Container>
                <div className="flex flex-col items-center gap-20">
                    <div className="flex flex-col items-center">
                        <h3 className="font-medium text-[30px] text-[#989898] uppercase font-inter-display text-center mb-12">
                            2025 SPONSORS
                        </h3>
                        {renderLogos(sponsors)}
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="font-medium text-[30px] text-[#989898] uppercase font-inter-display text-center mb-12">
                            Community Partners
                        </h3>
                        {renderLogos(communityPartners)}
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="font-medium text-[30px] text-[#989898] uppercase font-inter-display text-center mb-12">
                            Media Partners
                        </h3>
                        {renderLogos(mediaPartners)}
                    </div>
                </div>
            </Container>
        </div>
    );
}
