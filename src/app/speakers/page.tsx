"use client";

import Container from "@/components/container";
import NavBar from "@/components/nav-bar";
import SpeakerCard from "@/components/Index/SpeakerCard";
import { useState } from "react";

const hosts = [
    {
        name: "Shalom Adebola",
        role: "Co-Host/Product Designer",
        image: "/images/hosts/shalom-adebola.png",
        bio: "Shalom is a Product Manager at Code Space and a Product Designer at Kora. She is passionate about building products that solve real-world problems.",
        socials: {
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Oluwatoyin Akande",
        role: "Co-Host/Digital Media Specialist",
        image: "/images/hosts/oluwatoyin-akande.png",
        bio: "Oluwatoyin is a Digital Media Specialist at Code Space. She is passionate about creating engaging content and building communities.",
        socials: {
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Felix Bissong (TheGenzHR)",
        role: "Panel Moderator/Recruiter and HR professional",
        image: "/images/hosts/felix-bissong.jpg",
        bio: "Detailed bio coming soon...",
        imagePosition: "object-[50%_25%]",
        socials: {
            twitter: "#",
            linkedin: "#"
        }
    },
];

const speakers = [
    {
        name: "Sodiq Akinjobi",
        role: "Developer Ecosystem Community Manager, Google",
        image: "/images/speakers/sodiq-akinjobi.jpg",
        bio: "Sodiq Akinjobi is the Developer Ecosystem Community Manager at Google. He is passionate about building communities and empowering developers.",
        imagePosition: "object-[50%_35%]",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        name: "Peace Obinani",
        role: "Founder, Non-tech In Tech",
        image: "/images/speakers/peace-obinani.jpg",
        bio: "Peace Obinani is the Founder of Non-tech In Tech. she is passionate about helping non-technical people break into the tech industry.",
        imagePosition: "object-[50%_35%]",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        name: "David Ijaola",
        role: "Product Manager at Norebase",
        image: "/images/speakers/david-ijaola.jpeg",
        bio: "David Ijaola is a Product Manager at Norebase. He is passionate about building products that solve real-world problems.",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        name: "Kanayo Uzo",
        role: "Brand Designer at Belonwus",
        image: "/images/speakers/kanayo-uzo.jpg",
        bio: "Kanayo Uzo is a Brand Designer at Belonwus. passionate about creating engaging brands and visual identities.",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        name: "Nmesoma Okonkwo",
        role: "Product Designer at Fundall",
        image: "/images/speakers/nmesoma-okonkwo.png",
        bio: "Nmesoma Okonkwo is a Product Designer at Fundall. She is passionate about creating user-centric designs.",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        name: "Orim Dominic",
        role: "Software Engineer at Zedi Africa",
        image: "/images/speakers/orim-dominic.jpg",
        bio: "Orim Dominic is a Software Engineer at Zedi Africa. He is passionate about building scalable software solutions.",
        socials: { twitter: "#", linkedin: "#" }
    },
];

const filters = [
    "ALL",
    "HOSTS",
    "SPEAKERS",
    "PANELISTS",
    "MENTORS",
    "JUDGES"
];

export default function SpeakersPage() {
    const [activeFilter, setActiveFilter] = useState("ALL");

    return (
        <main className="relative min-h-screen bg-[#0B0D13] text-white overflow-x-hidden">
            {/* Background blobs similar to home page but toned down */}
            <div className="absolute left-0 right-0 -top-96 rounded-full blur-[250px] h-[1000px] w-[1000px] bg-[#4F46E5]/20 pointer-events-none -z-10" />

            <NavBar />

            <div className="pt-32 lg:pt-48 pb-20">
                <Container>
                    {/* Header Section */}
                    <div className="mb-20">
                        <h2 className="text-lg md:text-xl font-medium tracking-wide mb-4 font-inter-display uppercase text-white/80">
                            SPACER'S HACK CONF 2026
                        </h2>
                        <h1 className="text-[60px] md:text-[100px] lg:text-[160px] leading-[0.9] font-bold italic font-inter-display mb-10 uppercase tracking-tighter">
                            SPEAKERS
                        </h1>

                        <p className="max-w-3xl text-xl md:text-2xl text-white/70 font-inter-display leading-relaxed mb-12">
                            We're bringing together some of the most audacious thinkers and doers in African tech,
                            working on everything from fintech to commerce, energy, Web3, AI, and more.
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-3">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`
                    px-6 py-3 border text-sm font-medium transition-all duration-300 uppercase font-inter-display
                    ${activeFilter === filter
                                            ? "bg-white text-black border-white"
                                            : "bg-transparent text-white border-white/30 hover:border-white hover:text-white"
                                        }
                  `}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Speakers Grid */}
                    <div className="space-y-20">
                        {/* Hosts Section - Show if filter is ALL or HOSTS */}
                        {(activeFilter === "ALL" || activeFilter === "HOSTS") && (
                            <div>
                                {activeFilter === "ALL" && (
                                    <h3 className="font-medium text-[30px] uppercase mb-12 text-white/60 font-inter-display">
                                        Hosts
                                    </h3>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {hosts.map((host, i) => (
                                        <SpeakerCard key={`host-${i}`} {...host} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Speakers Section - Show if filter is ALL or SPEAKERS */}
                        {(activeFilter === "ALL" || activeFilter === "SPEAKERS") && (
                            <div>
                                {activeFilter === "ALL" && (
                                    <h3 className="font-medium text-[30px] uppercase mb-12 text-white/60 font-inter-display">
                                        Speakers
                                    </h3>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {speakers.map((speaker, i) => (
                                        <SpeakerCard
                                            key={`speaker-${i}`}
                                            {...speaker}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Panelists Placeholder - Show if filter is PANELISTS */}
                        {activeFilter === "PANELISTS" && (
                            <div className="py-20 text-center text-white/50 font-inter-display">
                                No panelists announced yet.
                            </div>
                        )}

                        {/* Mentors Placeholder - Show if filter is MENTORS */}
                        {activeFilter === "MENTORS" && (
                            <div className="py-20 text-center text-white/50 font-inter-display">
                                No mentors announced yet.
                            </div>
                        )}

                        {/* Judges Placeholder - Show if filter is JUDGES */}
                        {activeFilter === "JUDGES" && (
                            <div className="py-20 text-center text-white/50 font-inter-display">
                                No judges announced yet.
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        </main>
    );
}
