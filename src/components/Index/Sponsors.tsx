import Container from "../container";
import SponsorCard from "./SponsorCard";

export default function Sponsors() {
    const sponsors = [
        {
            name: "Fincra",
            logo: "https://moonshot.techcabal.com/wp-content/uploads/sites/4/2024/09/Fincra@10x.png",
            tag: "Financial Institution",
            description: "Our payment gateway helps businesses to easily collect payments with low fees and no hidden charges. You can save costs when you accept payments with Fincra",
            website: "https://fincra.com/"
        },
        {
            name: "Raenest",
            logo: "https://moonshot.techcabal.com/wp-content/uploads/sites/4/2024/07/Cleva-black-background-short-2.png",
            tag: "Financial Institution",
            description: "Raenest is a modern, multi-currency platform for Africans that makes managing money across borders easy",
            website: "https://www.raenest.com/"
        },
        {
            name: "Cardtonic",
            logo: "https://moonshot.techcabal.com/wp-content/uploads/sites/4/2024/07/BudPay-Logo-Horizontal-3.png",
            tag: "Financial Institution",
            description: "Cardtonic is facilitating cross-border payments and purchases with its virtual card, gift cards and other several alternative methods",
            website: "https://cardtonic.com/"
        },
        {
            name: "Luno",
            logo: "https://moonshot.techcabal.com/wp-content/uploads/sites/4/2025/06/RGB_LUNO_LOGO_NAVY_BLUE@2x1-2.png",
            tag: "Financial Institution",
            description: "Luno is the crypto investment app you can rely on, enabling you to buy, store and explore crypto securely.",
            website: "https://www.luno.com/"
        },
        {
            name: "Roqqu",
            logo: "https://moonshot.techcabal.com/wp-content/uploads/sites/4/2025/06/roqqu-logo-Resized.png",
            tag: "Financial Institution",
            description: "Your freedom to do more with Money. We’ll supercharge every part of your financial future, from crypto trading to sending and receiving payments.",
            website: "https://roqqu.com/"
        },
        {
            name: "Opay",
            logo: "https://moonshot.techcabal.com/wp-content/uploads/sites/4/2025/06/logo_画板-1-1-2.png",
            tag: "Financial Institution",
            description: "OPay App is the easier and secure way to pay all your bills anytime, anywhere.",
            website: "https://www.opayweb.com"
        },
        {
            name: "Busha",
            logo: "https://moonshot.techcabal.com/wp-content/uploads/sites/4/2024/09/busha@10x.png",
            tag: "Financial Institution",
            description: "Manage your finances and digital asset portfolio on the simplest, safest, SEC-licensed cryptocurrency exchange.",
            website: "https://www.busha.co/about"
        },
        {
            name: "Flutterwave",
            logo: "https://moonshot.techcabal.com/wp-content/uploads/sites/4/2024/06/flutterwave.png",
            tag: "Financial Institution",
            description: "Endless possibilities for all. Empowering businesses of all sizes with seamless payment solutions tailored for enterprises, startups, and emerging markets.",
            website: "https://flutterwave.com/ng/"
        },
        {
            name: "Interswitch",
            logo: "https://moonshot.techcabal.com/wp-content/uploads/sites/4/2025/08/Resized-Interswitch-Logo-01-2.png",
            tag: "Financial Institution",
            description: "Interswitch’s broad network and robust payments platform have been instrumental to the development of the Nigerian payments ecosystem.",
            website: "http://www.interswitchgroup.com/"
        },
    ];

    return (
        <div className="w-full py-20">
            <Container>
                <div className="flex flex-col items-center">
                    <h3 className="font-medium text-[30px] text-[#989898] uppercase font-inter-display text-center mb-12">
                        EVENT SPONSORS
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 w-full">
                        {sponsors.map((sponsor, index) => (
                            <SponsorCard key={index} {...sponsor} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
