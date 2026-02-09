import {
  ChartAreaIcon,
  CrownIcon,
  GlobeIcon,
  HandshakeIcon,
  MonitorPlayIcon,
  PuzzleIcon,
  TrophyIcon,
  UsersRoundIcon,
  MailIcon,
  Twitter,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export const values = [
  {
    title: "Impact",
    description:
      "Driving change through technology by empowering tech talent to build innovative solutions for global challenges.",
    icon: GlobeIcon,
  },
  {
    title: "Growth",
    description:
      "Fostering continuous learning and development for our community, enabling them to thrive in the evolving tech landscape.",
    icon: ChartAreaIcon,
  },
  {
    title: "Inclusion",
    description:
      "Creating a diverse and welcoming community where everyone has equal access to opportunities and mentorship.",
    icon: HandshakeIcon,
  },
  {
    title: "Leadership",
    description:
      "Equipping young people with the skills and mentorship needed to become tomorrow's tech leaders and innovators.",
    icon: CrownIcon,
  },
  {
    title: "Collaboration",
    description:
      "Encouraging teamwork and knowledge-sharing to create impactful projects and build meaningful connections in the tech space.",
    icon: UsersRoundIcon,
  },
];

export type ValueType = (typeof values)[number];

export const what_we_do = [
  {
    title: "Hybrid Hackathon",
    description:
      "A dynamic hybrid hackathon where passionate minds build amazing products. Connect with visionaries to turn ideas into reality across Fintech, AgriTech, AI, and more.",
    date: "2026",

    icon: TrophyIcon,
    stats: [
      {
        name: "Participants",
        value: 1500,
        suffix: "+",
      },

      {
        name: "Mentors",
        value: 50,
        suffix: "+",
      },

      {
        name: "Projects",
        value: 40,
        suffix: "+",
      },
    ],
  },
  {
    title: "Product Showcase",
    description:
      "Interactive product showcases and live pitches of products built. Experience both existing and emerging technologies from Africa's brightest talent.",
    date: "2026",

    icon: PuzzleIcon,
    stats: [
      {
        name: "Showcases",
        value: 15,
        suffix: "+",
      },

      {
        name: "Investors",
        value: 20,
        suffix: "+",
      },

      {
        name: "Categories",
        value: 12,
        suffix: "+",
      },
    ],
  },
  {
    title: "Tech Conference",
    description:
      "Thought-provoking panel sessions, keynote talks, and sponsor exhibitions. Networking opportunities at the intersection of innovation and technology.",
    date: "2026",

    icon: MonitorPlayIcon,
    stats: [
      {
        name: "Speakers",
        value: 20,
        suffix: "+",
      },

      {
        name: "Attendees",
        value: 1000,
        suffix: "+",
      },

      {
        name: "Hours",
        value: 48,
        suffix: "+",
      },
    ],
  },
];

export type WhatWeDo = (typeof what_we_do)[number];

export const stats = [
  {
    name: "Attendees",
    value: 1200,
    suffix: "+",
    description:
      "A massive gathering of tech enthusiasts from across the continent, collaborating and learning together.",
  },
  {
    name: "Sponsors",
    value: 16,
    suffix: "",
    description:
      "Supported by industry-leading organizations committed to fostering the next generation of tech talent.",
  },
  {
    name: "Projects Built",
    value: 40,
    suffix: "+",
    description:
      "Real-world solutions conceived and built during the high-intensity hackathon tracks.",
  },
  {
    name: "Speakers",
    value: 20,
    suffix: "+",
    description:
      "Insightful sessions and mentorship from world-class industry professionals.",
  },
];

export type StatsType = (typeof stats)[number];

export const brands = [
  "couchbase.png",
  "technext.png",
  "inside-the-tech.jpg",
  "paystack.png",
  "aws.png",
  "pallax.png",
  "theguardian.png",
  "vercel.png",
  "kora.png",
  "genztechies.png",
  "tuliban.png",
  "ntit-community.png",
  "wix-studio.png",
];

export const links = [
  { name: "Home", href: "/" },
  { name: "Schedule", href: "#schedule" },
  { name: "About", href: "#about" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Speakers", href: "#speakers" },
  { name: "Contact", href: "#contact" },
];

export const quick_links = [
  { name: "About Us", href: "#about" },
  { name: "Schedule", href: "#schedule" },
  { name: "Speakers", href: "/speakers" },
  { name: "Contact Us", href: "#contact" },
  { name: "FAQs", href: "/#faq" },
];

export const other_links = [
  { name: "Brand Guidelines", href: "/guidelines" },
  { name: "Code of Conduct", href: "/code-of-conduct" },
  { name: "Gallery", href: "https://www.codespaces.org/gallery" },
  { name: "Community", href: "https://www.codespaces.org/" },
];

export const socials = [
  {
    name: "Email us",
    url: "mailto:hello@codespaces.org",
    description: "Email us for inquiries and partnerships.",
    username: "hello@codespaces.org",
    icon: MailIcon,
  },
  {
    name: "x (formerly twitter)",
    url: "https://twitter.com/codespacehq",
    description: "Follow us on X for live updates and tech buzz.",
    username: "@codespacehq",
    icon: Twitter,
  },
  {
    name: "instagram",
    url: "https://instagram.com/codespaces",
    description: "Go behind the scenes and check our impact on Instagram.",
    username: "@codespaces",
    icon: InstagramIcon,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/codespace",
    description: "Connect for professional updates and partnerships.",
    username: "@codespace",
    icon: LinkedinIcon,
  },
];

export const why_us = [
  {
    title: "Code Space Community",
    content:
      "Code Space is a dynamic community connecting African Gen Zs for Growth, Impact, and Success. We empower developers and tech enthusiasts through education and opportunities.",
  },
  {
    title: "Spacer’s Hack Conf 2026",
    content:
      "A pioneering 2-in-1 experience uniting tech enthusiasts to push boundaries. Featuring a dynamic hybrid hackathon, interactive product showcases, and curated networking across sectors from Fintech to AI and IoT.",
  },
  {
    title: "Theme: Beyond Boundaries",
    content: `“Beyond boundaries, Building for tomorrow” is about exploring what’s next through collaboration. Join 1000+ people in person and 1.5k+ virtually on August 29th for our premium conference experience.`,
  },
];

export const upcoming_events = [
  {
    image: "https://pbs.twimg.com/media/GbuMEnOWEAgnWNW?format=jpg&name=large",
    title: "Spacer's Hack Conf 2026",
    description:
      "Africa's pioneering tech event organized by Code Space. Join 1000+ visionaries for a hybrid hackathon, dynamic product showcases, and world-class networking across Fintech, AgriTech, AI, and more.",
    date: "29th Aug, 2026",
    location: "Lagos, Nigeria / Hybrid",
    action_link: "https://hackathon.codespaces.org/",
    action_text: "Register Now",
    icon: MonitorPlayIcon,
    stats: [
      {
        name: "Registered Attendees",
        value: 1200,
        suffix: "+",
      },

      {
        name: "Speakers",
        value: 20,
        suffix: "+",
      },
    ],
  },
];

export const past_events = [
  {
    image: "https://pbs.twimg.com/media/GauyZWqWQAAhoZt?format=jpg&name=large",
    title: "Wix Studio Hack",
    description:
      "The International Day of the Girl Child is celebrated on October 11th every year. As part of our mission to support women and girls in tech, we commemorated this day with a one-day virtual event. The theme: “Girls' Vision for the Future,” was a powerful call to action that highlighted the aspirations of young girls in tech and their role in shaping the future of technology.",
    date: new Date().toISOString(),
    location: "Virtual",
    action_link: "/events/wix-studio-hack",
    action_text: "Watch the Replay!",
  },
  {
    image: "https://pbs.twimg.com/media/GZldN7TXgAkXjGC?format=jpg&name=large",
    title: "International Day of the Girl Child 2024",
    description:
      "The International Day of the Girl Child is celebrated on October 11th every year. As part of our mission to support women and girls in tech, we commemorated this day with a one-day virtual event. The theme: “Girls' Vision for the Future,” was a powerful call to action that highlighted the aspirations of young girls in tech and their role in shaping the future of technology.",
    date: new Date().toISOString(),
    location: "Virtual",
    action_link: "https://www.youtube.com/live/Z-MrZQQyhWI?si=7MVlQjyOY6e2clSM",
    action_text: "Watch the Replay!",
  },
  {
    image: "https://pbs.twimg.com/media/GQGUYcLWIAAxkNn?format=jpg&name=medium",
    title: "Fusion Tech Fest 2024",
    description:
      "Code Space co-organized Fusion Tech Fest 2024 with GenZTechies. This groundbreaking event brought together Africa's brightest Gen Z tech innovators. The week-long festival offered immersive learning sessions and a high-energy hackathon, where participants collaborated to solve real-world challenges with creative tech solutions. The event concluded with an in-person conference in Lagos, featuring insightful keynotes, hands-on workshops, and invaluable networking opportunities.",
    date: new Date().toISOString(),
    location: "New York, USA",
    action_link: "https://youtu.be/9wDcD6T6OqY?si=3VKp_dl1svpO1pmB",
    action_text: "Experience the Event",
  },
  {
    image: "https://i.ibb.co/xfV4Bj0/shc.jpg",
    title: "Spacers HackConf 2023",
    description:
      "We launched our first-ever hackathon and conference in 2023. Spacers HackConf 2023 was a week-long hackathon, followed by a one-day conference held virtually. The conference had a remarkable lineup of speakers who shared their insightful knowledge, and the hackathon brought together visionary developers, designers, and tech enthusiasts from around the continent. This thought-provoking event allowed Spacers to learn, ideate, and build pan-African solutions.",
    date: "2023",
    location: "San Francisco, USA",
    action_link: "https://www.youtube.com/live/FbVoWNW62uw?si=tu_6GkF2V5Lu96a_",
    action_text: "Catch the Action",
  },
  {
    image: "https://i.postimg.cc/htQFDXQQ/PHOTO-2023-12-30-00-44-54-2.jpg",
    title: "2023 End of Year Picnic",
    description:
      "There’s one thing you need to know about Code Spacers, although we are career-driven, we never slack when it comes to having fun! Our 2023 End of Year Picnic was a blast, filled with unforgettable moments, goal-sharing, and plenty of games. Of course, we captured the fun with some amazing pictures along the way!",
    date: "2023",
    location: "Berlin, Germany",
    action_link: "https://photos.app.goo.gl/JTovdLo23YCRSNiXA",
    action_text: "See What You Missed",
  },
];

export type EventType = (typeof past_events)[number];

export const gallery = [
  {
    label: "Fuse Tech Fest 2024",
    images: [
      "1ZSW9J1bGXNahC5mOO6S-a3GmABghgDKi",
      "1q08LFx75jYwG0Om0uTV757AxXZAtcwEg",
      "1p4dZKvPk55MJdufnlxieOhbCS0_-_8Tz",
      "10pusS6p85iF2QxqTGUfYmjQnFiy9a3_z",
      "1DSZQ0pwoi2QQM22xY0U_T9yT3bIqOJpQ",
    ],
  },
];
