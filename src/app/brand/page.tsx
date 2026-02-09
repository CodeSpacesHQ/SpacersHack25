import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { Logo } from "@/components/brand";
import CustomVideoPlayer from "@/components/ui/custom-video-player";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Spacer's Hack Design",
    },
    openGraph: {
        images: ["/og-image.png"],
    },
};

const sections = [
    { id: "logo", title: "Logo" },
    { id: "typography", title: "Typography" },
    { id: "color", title: "Color" },
    { id: "assets", title: "Assets" },
];

export default function BrandPage() {
    return (
        <div className="min-h-screen bg-[#0e1016] text-white font-sans selection:bg-purple-500 selection:text-white">
            <div className="flex flex-col md:flex-row min-h-screen">


                <aside className="hidden md:block w-full md:w-64 lg:w-72 md:h-screen md:sticky md:top-0 p-6 md:p-12 bg-[#0e1016] z-20">
                    <div className="mb-12">
                        <Link href="/" className="block w-32 hover:opacity-70 transition-opacity">
                            <Logo className="text-white fill-white" />
                        </Link>
                    </div>
                    <nav className="space-y-1">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="block py-2 text-lg font-medium text-gray-400 hover:text-white transition-colors"

                            >
                                {section.title}
                            </a>
                        ))}
                    </nav>
                </aside>


                <main className="flex-1 p-6 md:p-12 lg:p-24 max-w-7xl mx-auto space-y-32">

                    <header className="space-y-6 pt-12 md:pt-0">
                        <h1 className="text-6xl md:text-7xl font-medium tracking-tight font-duplicate-sans leading-[0.9]">
                            Brand <br className="hidden md:block" /> guidelines
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
                            To ensure Spacer's Hack Conf is represented correctly, please follow these guidelines for using our brand assets and content.
                        </p>
                        <div className="pt-4">
                            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2 group">
                                Download brand kit
                                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                        <div className="pt-8 w-full">
                            <CustomVideoPlayer />
                        </div>
                    </header>

                    <section id="logo" className="scroll-mt-24 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-medium font-duplicate-sans border-t border-white/10 pt-8">Logo</h2>
                            <p className="text-lg text-gray-400 max-w-3xl">
                                The Spacer's Hack Conf wordmark is our primary identifier. It should be used in most instances to represent the brand. The mark is designed to be bold, modern, and instantly recognizable.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            <div className="bg-[#F7F7F7] rounded-lg p-12 md:p-24 flex items-center justify-center min-h-[400px]">
                                <h3 className="text-6xl md:text-8xl font-bold font-duplicate-sans tracking-tight text-black">
                                    SPACERS
                                </h3>
                            </div>
                            <div className="bg-black rounded-lg p-12 md:p-24 flex items-center justify-center min-h-[400px]">
                                <h3 className="text-6xl md:text-8xl font-bold font-duplicate-sans tracking-tight text-white">
                                    SPACERS
                                </h3>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <button className="text-sm font-medium border-b border-white pb-0.5 hover:opacity-70 transition-opacity">Download Logo (SVG)</button>
                            <span className="text-gray-500">|</span>
                            <button className="text-sm font-medium border-b border-white pb-0.5 hover:opacity-70 transition-opacity">Download Logo (PNG)</button>
                        </div>
                    </section>

                    <section id="typography" className="scroll-mt-24 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-medium font-duplicate-sans border-t border-white/10 pt-8">Typography</h2>
                            <p className="text-lg text-gray-400 max-w-3xl">
                                We use two primary typefaces: <strong>Space Grotesk</strong> for headlines to capture attention, and <strong>Inter</strong> for body copy to ensure readability.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="bg-[#1F2128] rounded-lg p-8 md:p-12 space-y-8">
                                <div className="space-y-2">
                                    <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">Headlines</span>
                                    <p className="text-3xl font-duplicate-sans font-bold text-white">Space Grotesk</p>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-5xl md:text-7xl font-duplicate-sans font-bold leading-none text-white">Aa</p>
                                        <p className="text-sm text-gray-400 mt-2">Bold</p>
                                    </div>
                                    <div>
                                        <p className="text-5xl md:text-7xl font-duplicate-sans font-medium leading-none text-white">Aa</p>
                                        <p className="text-sm text-gray-400 mt-2">Medium</p>
                                    </div>
                                    <p className="text-xl break-all opacity-60 font-duplicate-sans leading-relaxed text-white">
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                                        abcdefghijklmnopqrstuvwxyz <br />
                                        0123456789
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#1F2128] rounded-lg p-8 md:p-12 space-y-8">
                                <div className="space-y-2">
                                    <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">Body</span>
                                    <p className="text-3xl font-sans font-normal text-white">Inter</p>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-5xl md:text-7xl font-sans font-semibold leading-none text-white">Aa</p>
                                        <p className="text-sm text-gray-400 mt-2">SemiBold</p>
                                    </div>
                                    <div>
                                        <p className="text-5xl md:text-7xl font-sans font-normal leading-none text-white">Aa</p>
                                        <p className="text-sm text-gray-400 mt-2">Regular</p>
                                    </div>
                                    <p className="text-xl break-all opacity-60 font-sans leading-relaxed text-white">
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                                        abcdefghijklmnopqrstuvwxyz <br />
                                        0123456789
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="color" className="scroll-mt-24 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-medium font-duplicate-sans border-t border-white/10 pt-8">Color</h2>
                            <p className="text-lg text-gray-400 max-w-3xl">
                                Our color palette is bold and high-contrast, designed to stand out in digital and physical spaces.
                            </p>
                        </div>

                        <div className="relative w-full aspect-[2/3] md:aspect-square bg-[#0A0A0A] rounded-xl overflow-hidden p-6 md:p-12">
                            <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20 text-white">
                                <p className="font-bold text-lg md:text-xl mb-1">Space Black</p>
                                <p className="font-mono text-xs md:text-sm opacity-60">HEX: #0A0A0A</p>
                                <p className="font-mono text-xs md:text-sm opacity-60">RGB: 10, 10, 10</p>
                            </div>

                            <div className="absolute top-[22%] left-[10%] md:top-[12%] md:left-[12%] w-[150%] h-[150%]">
                                <div className="relative w-full h-full bg-[#4F46E5] rounded-tl-2xl md:rounded-tl-3xl p-4 md:p-8">
                                    <div className="text-white">
                                        <p className="font-bold text-base md:text-lg mb-1">Electric Indigo</p>
                                        <p className="font-mono text-xs md:text-sm opacity-80">HEX: #4F46E5</p>
                                        <p className="font-mono text-xs md:text-sm opacity-80">RGB: 79, 70, 229</p>
                                    </div>

                                    <div className="absolute top-24 left-10 md:top-32 md:left-32 right-0 bottom-0 bg-[#BEF264] rounded-tl-2xl md:rounded-tl-3xl p-4 md:p-8">
                                        <div className="text-black">
                                            <p className="font-bold text-base md:text-lg mb-1">Acid Green</p>
                                            <p className="font-mono text-xs md:text-sm opacity-80">HEX: #BEF264</p>
                                            <p className="font-mono text-xs md:text-sm opacity-80">RGB: 190, 242, 100</p>
                                        </div>

                                        <div className="absolute top-24 left-10 md:top-32 md:left-32 right-0 bottom-0 bg-[#6B3D0C] rounded-tl-2xl md:rounded-tl-3xl p-4 md:p-8">
                                            <div className="text-white">
                                                <p className="font-bold text-base md:text-lg mb-1">Rock Brown</p>
                                                <p className="font-mono text-xs md:text-sm opacity-80">HEX: #6B3D0C</p>
                                                <p className="font-mono text-xs md:text-sm opacity-80">RGB: 107, 61, 12</p>
                                            </div>

                                            <div className="absolute top-24 left-10 md:top-32 md:left-32 right-0 bottom-0 bg-[#BB06C7] rounded-tl-2xl md:rounded-tl-3xl p-4 md:p-8">
                                                <div className="text-white">
                                                    <p className="font-bold text-base md:text-lg mb-1">Pink</p>
                                                    <p className="font-mono text-xs md:text-sm opacity-80">HEX: #BB06C7</p>
                                                    <p className="font-mono text-xs md:text-sm opacity-80">RGB: 187, 6, 199</p>
                                                </div>

                                                <div className="absolute top-24 left-10 md:top-32 md:left-32 right-0 bottom-0 bg-[#FFD1B9] rounded-tl-2xl md:rounded-tl-3xl p-4 md:p-8">
                                                    <div className="text-black">
                                                        <p className="font-bold text-base md:text-lg mb-1">Human Peach</p>
                                                        <p className="font-mono text-xs md:text-sm opacity-80">HEX: #FFD1B9</p>
                                                        <p className="font-mono text-xs md:text-sm opacity-80">RGB: 255, 209, 185</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="assets" className="scroll-mt-24 space-y-12 pb-24">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-medium font-duplicate-sans border-t border-white/10 pt-8">Assets</h2>
                            <p className="text-lg text-gray-400 max-w-3xl">
                                Download visual assets including 3D elements, icons, and document templates.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group cursor-pointer">
                                <div className="bg-[#F7F7F7] rounded-lg aspect-[4/3] flex items-center justify-center mb-4 transition-colors group-hover:bg-gray-100">
                                    <div className="w-1/3 h-1/3 bg-gray-200 rounded-full blur-3xl opacity-50"></div>
                                    <span className="text-gray-400 font-medium">3D Elements Pack</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-lg">3D Objects</span>
                                    <Download className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="bg-[#4F46E5] rounded-lg aspect-[4/3] flex items-center justify-center mb-4 transition-colors group-hover:opacity-90">
                                    <div className="grid grid-cols-2 gap-4 opacity-50">
                                        <div className="w-12 h-12 border border-white rounded-full"></div>
                                        <div className="w-12 h-12 border border-white rotate-45"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-lg">Iconography Set</span>
                                    <Download className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}
