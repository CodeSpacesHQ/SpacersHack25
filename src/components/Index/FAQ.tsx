"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import React from "react";
import Container from "../container";

const items = [
    {
        question: "When and where will the hackathon take place?",
        answer:
            "The hackathon will take place from August 20th to 30th, 2024, at The Zone Tech Park, Lagos, Nigeria. The final conference day will be held on August 31st, featuring talks, demos, and networking sessions.",
    },
    {
        question: "How can I register for the hackathon?",
        answer:
            "Registration details will be announced soon. Keep an eye on our website and social media channels for updates.",
    },
    {
        question: "Can I participate individually, or do I need to form a team?",
        answer:
            "You can participate individually or form a team of up to 4 members. Team formation events will also be held for individual participants looking for teammates.",
    },
    {
        question: "Are there any age restrictions for participants?",
        answer:
            "Participants must be at least 18 years old. If you are under 18, you will need parental consent to participate.",
    },
    {
        question: "How will projects be judged?",
        answer:
            "Projects will be judged based on innovation, technical complexity, impact, and presentation. A panel of industry experts will evaluate the submissions.",
    },
    {
        question: "What are the prizes for the winning teams?",
        answer:
            "We have exciting prizes for the top teams, including cash rewards, gadgets, and opportunities for mentorship and incubation.",
    },
    {
        question: "Can I join the hackathon if I'm not a developer?",
        answer:
            "Absolutely! Hackathons need designers, project managers, and creative thinkers. Diverse skills make for better teams and projects.",
    },
];

export default function FAQ() {
    return (
        <div className="w-full py-24">
            <Container>
                <div className="flex flex-col items-center mb-16 text-center max-w-4xl mx-auto">
                    <h2 className="font-medium text-[30px] text-[#4F46E5] uppercase font-inter-display text-center mb-6">
                        Get your questions answered
                    </h2>
                    <p className="text-[#989898] font-inter-display font-normal text-[1.2rem] leading-[1.5] tracking-[-0.48px] max-w-3xl">
                        From registration to what to expect on the day, our FAQs have all the info you need.
                    </p>
                </div>

                <Accordion.Root
                    type="single"
                    defaultValue="item-0"
                    collapsible
                    className="flex flex-col gap-4 max-w-[892px] mx-auto"
                >
                    {items.map((item, index) => (
                        <Accordion.Item
                            key={index}
                            value={`item-${index}`}
                            className="bg-[#16181E] rounded-[16px] overflow-hidden transition-all duration-300"
                        >
                            <Accordion.Header className="flex p-2">
                                <Accordion.Trigger className="flex flex-1 items-center justify-between p-4 px-6 w-full text-left group bg-white/5 rounded-[12px] hover:bg-white/10 transition-all data-[state=open]:bg-white/5">
                                    <span className="text-white font-inter-display text-[20px] font-normal leading-normal">
                                        {item.question}
                                    </span>
                                    <div className="text-white/60 group-hover:text-white transition-colors">
                                        <ChevronDown className="w-6 h-6 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                    </div>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                                <div className="px-8 pb-6 pt-2">
                                    <p className="text-[#989898] font-inter-display text-[16px] leading-[150%] max-w-[90%]">
                                        {item.answer.replace("2026", "2024")}
                                    </p>
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </Container>
        </div>
    );
}
