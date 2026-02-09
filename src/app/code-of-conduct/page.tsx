import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Code of Conduct | Spacer’s Hack Conf",
    },
};

export default function CodeOfConductPage() {
    return (
        <div className="min-h-screen bg-[#0e1016] text-white font-sans selection:bg-purple-500 selection:text-white">
            <div className="flex flex-col md:flex-row min-h-screen">
                <aside className="hidden md:block w-full md:w-64 lg:w-72 md:h-screen md:sticky md:top-0 p-6 md:p-12 bg-[#0e1016] z-20">
                    <div className="mb-12">
                        <Link href="/" className="block w-32 hover:opacity-70 transition-opacity">
                            <Logo className="text-white fill-white" />
                        </Link>
                    </div>
                </aside>

                <main className="flex-1 p-6 md:p-12 lg:p-24 max-w-4xl mx-auto space-y-12">
                    <header className="space-y-6 pt-12 md:pt-0">
                        <h1 className="text-5xl md:text-7xl font-medium tracking-tight font-duplicate-sans leading-[0.9]">
                            Code of <br className="hidden md:block" /> Conduct
                        </h1>
                        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                            Last Updated: February 8th, 2026
                        </p>
                    </header>

                    <div className="space-y-8 text-gray-300 font-light leading-relaxed text-lg">
                        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl italic text-white">
                            <strong>TL;DR.</strong> Be respectful. Harassment and abuse are never tolerated. If you are in a situation that makes you uncomfortable at Spacer’s Hack Conf, if the event itself creates an unsafe or inappropriate environment, or if interacting with a Code Space representative or event organizer makes you uncomfortable, please report it using the procedures included in this document.
                        </div>

                        <p>
                            Spacer’s Hack Conf is a pioneering event hosted by <a href="https://www.codespaces.org/" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors">Code Space</a>. We stand for inclusivity and believe that every single person has the right to hack in a safe and welcoming environment.
                        </p>

                        <p>
                            Harassment includes but is not limited to offensive verbal or written comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, religion, social class, economic status, and veteran status. Additional cases of harassment include but are not limited to sharing sexual images, violent depictions, vulgar language, deliberate intimidation, stalking, following, brigading, doxxing, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
                        </p>

                        <p>
                            In particular, attendees should not use sexualized images, activities, or other material both in their hacks and during the event. Booth staff (incl. volunteers) should not use sexualized clothing/uniforms/costumes or otherwise create a sexualized environment.
                        </p>

                        <p>
                            If what you’re doing is making someone feel uncomfortable, that counts as harassment and is enough reason to stop doing it. Participants asked to stop any harassing behavior are expected to comply immediately.
                        </p>

                        <p>
                            Sponsors, judges, mentors, volunteers, organizers, Code Space staff, and anyone else participating in the event are also subject to the anti-harassment policy.
                        </p>

                        <p>
                            If a participant engages in harassing behavior, Code Space may take any action it deems appropriate, including warning the offender or expulsion from the event with no eligibility for reimbursement or refund of any type.
                        </p>

                        <p>
                            If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact the Code Space team using the reporting procedures defined below.
                        </p>

                        <p>
                            Code Space representatives can help participants contact campus security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event. We value your attendance.
                        </p>

                        <p>
                            We expect participants to follow these rules at all hackathon venues, hackathon-related social events, hackathon-supplied transportation, and online interactions related to the event.
                        </p>

                        <div className="space-y-6 pt-12">
                            <h2 className="text-3xl font-medium font-duplicate-sans text-white border-t border-white/10 pt-8">Reporting Procedures</h2>
                            <p>
                                If you feel uncomfortable or think there may be a potential violation of the code of conduct, please report it immediately using one of the following methods. All reporters have the right to remain anonymous.
                            </p>
                            <p>
                                By sending information to the general reporting line, your report will go to our incident response team members.
                            </p>
                            <div className="flex items-center gap-2 text-white bg-white/5 p-4 rounded-xl border border-white/10 w-fit">
                                <span className="text-gray-400">General Reporting e-mail:</span>
                                <a href="mailto:hello@codespaces.org" className="hover:underline">hello@codespaces.org</a>
                            </div>
                        </div>

                        <div className="space-y-6 pt-12">
                            <h2 className="text-3xl font-medium font-duplicate-sans text-white border-t border-white/10 pt-8">Special Incidents</h2>
                            <p>
                                If you are uncomfortable reporting your situation to the general reporting line or need to contact someone directly in case of emergency, direct contact details are listed below.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <p className="font-medium text-white">Precious Kayili</p>
                                    <p className="text-sm text-gray-500 mb-2">Organizer</p>
                                    <a href="mailto:preciouskayili@codespaces.org" className="text-sm text-gray-400 hover:text-white transition-colors">preciouskayili@codespaces.org</a>
                                </div>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <p className="font-medium text-white">Tobi Uche</p>
                                    <p className="text-sm text-gray-500 mb-2">Lead Organizer</p>
                                    <a href="mailto:tobi@codespaces.org" className="text-sm text-gray-400 hover:text-white transition-colors">tobi@codespaces.org</a>
                                </div>
                            </div>
                        </div>

                        <p className="pt-12 text-sm text-gray-500 italic">
                            Code Space reserves the right to revise, make exceptions to, or otherwise amend these policies in whole or in part. If you have any questions regarding these policies, please contact Code Space by e-mail at hello@codespaces.org.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}
