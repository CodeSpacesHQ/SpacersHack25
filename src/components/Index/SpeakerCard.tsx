"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface SpeakerProps {
    name: string;
    role: string;
    image?: string;
    bio?: string;
    imagePosition?: string;
    socials?: {
        twitter?: string;
        linkedin?: string;
    };
}

export default function SpeakerCard({ name, role, image, bio, socials, imagePosition = "object-top" }: SpeakerProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-[#16181E] p-2 cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
        >
            <motion.div
                className="w-full relative bg-[#111319]"
                initial={{ height: 320 }}
                animate={{ height: isOpen ? 208 : 320 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className={`object-cover ${imagePosition}`}
                    />
                ) : null}
            </motion.div>

            <div className="text-center text-white my-6 px-4">
                <h3 className="font-medium text-[24px] mb-2 font-inter-display">
                    {name}
                </h3>
                <p className="text-[22px] font-normal text-white font-inter-display leading-[130%]">
                    {role}
                </p>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3, delay: isOpen ? 0.1 : 0 }}
                    className="overflow-hidden"
                >
                    <div className="pt-4">
                        <p className="text-[16px] text-[#989898] font-inter-display leading-[150%]">
                            {bio}
                        </p>

                        <div className="flex items-center justify-center gap-4 mt-4">
                            {socials?.twitter && (
                                <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                                    <Twitter size={20} />
                                </a>
                            )}
                            {socials?.linkedin && (
                                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                                    <Linkedin size={20} />
                                </a>
                            )}
                            {!socials && (
                                <>
                                    <button className="text-white/60 hover:text-white transition-colors">
                                        <Twitter size={20} />
                                    </button>
                                    <button className="text-white/60 hover:text-white transition-colors">
                                        <Linkedin size={20} />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
