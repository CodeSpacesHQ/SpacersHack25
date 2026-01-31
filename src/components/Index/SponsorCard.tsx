"use client";

import Image from "next/image";
import Link from "next/link";

interface SponsorProps {
    name: string;
    logo: string;
    tag?: string;
    description?: string;
    website?: string;
}

export default function SponsorCard({ name, logo, tag = "Sponsor", description, website = "#" }: SponsorProps) {
    return (
        <div className="flex flex-col group">
            <div className="relative h-[200px] w-full bg-white/5 rounded-lg overflow-hidden mb-6">
                <Image
                    src={logo}
                    alt={name}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="flex flex-col gap-3">
                <span className="text-[#989898] text-sm font-inter-display uppercase tracking-wider">
                    {tag}
                </span>

                <h3 className="text-white text-2xl font-medium font-inter-display">
                    {name}
                </h3>

                <p className="text-[#989898] text-base leading-relaxed font-inter-display">
                    {description || "Supporting the growth of technology and innovation in Africa."}
                </p>

                <Link
                    href={website}
                    target="_blank"
                    className="text-white hover:text-white/60 transition-colors text-sm underline underline-offset-4 font-inter-display mt-1"
                >
                    Visit Website
                </Link>
            </div>
        </div>
    );
}
