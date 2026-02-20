"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import { cn } from "@/lib/utils";

const galleryImages = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image.png",
    "/images/image7.png",
    "/images/image8.png",
    "/images/image9.png",
];

const GalleryCard = ({ src, index }: { src: string; index: number }) => {
    return (
        <div className="w-[390px] h-[400px] bg-[#F4F4F4] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[12px] border-r-[12px] border-t-[12px] border-b-[50px] border-[#F4F4F4] relative overflow-hidden flex-shrink-0">
            <div className="relative w-full h-full overflow-hidden">
                <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 300px, 420px"
                />
            </div>
        </div>
    );
};

const Gallery = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [randomizedImages, setRandomizedImages] = useState<string[]>([]);

    React.useEffect(() => {
        const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
        setRandomizedImages(shuffled);
    }, []);

    const displayImages = randomizedImages.length > 0 ? randomizedImages : galleryImages;

    return (
        <section className="bg-white py-0 overflow-hidden relative" id="gallery">
            <div className="flex flex-col gap-[10px] relative select-none pointer-events-none">
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-marquee-reverse gap-[10px]">
                        {[...displayImages, ...displayImages].map((src, index) => (
                            <GalleryCard key={`top-${index}`} src={src} index={index} />
                        ))}
                    </div>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-marquee gap-[10px]">
                        {[...displayImages, ...displayImages].reverse().map((src, index) => (
                            <GalleryCard key={`bottom-${index}`} src={src} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0f1117]/90 backdrop-blur-[0.5px]">
                <Container className="text-center relative">
                    <h2 className="text-4xl md:text-[50px] font-normal text-white uppercase font-inter-display tracking-tight leading-tight mb-4">
                        GALLERY
                    </h2>
                    <p className="text-white text-lg md:text-2xl font-light font-inter-display mb-10 max-w-lg mx-auto leading-relaxed">
                        Check out photos from our past events
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="https://photos.google.com/share/AF1QipNZLoBBtTpfOmYgeBrz8tPCIbBWBtSlMmvlVNfh-dgdl3esj_chb7E83DYSmacdZQ?key=d2VYUEQ5NmVLVm1fLUxtOTF3Z3hhaVVlbVI3Y1RR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full transition-transform hover:scale-105 active:scale-95 group"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className="text-[#0c0c21] text-base font-normal tracking-tight">
                                VIEW PHOTOS
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-[#0c0c21] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Gallery;
