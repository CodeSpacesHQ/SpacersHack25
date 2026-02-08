import Container from "../container";
import SpeakerCard from "./SpeakerCard";

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

const keynoteSpeakers = [
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

export default function Speakers() {
  return (
    <div className="w-full py-20">
      <Container>
        <h3 className="font-medium text-[18px] text-white uppercase font-inter-display">
          MEET OUR SPEAKERS FOR SPACERS HACK 2025
        </h3>

        <div className="">
          <h3 className="font-medium text-[30px] uppercase mt-2 text-white/60 font-inter-display">
            Prestigious Hosts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {hosts.map((host, i) => (
              <SpeakerCard key={`host-${i}`} {...host} />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="font-medium text-[30px] uppercase text-white/60 font-inter-display">
            Speakers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {keynoteSpeakers.map((speaker, i) => (
              <SpeakerCard
                key={`keynote-${i}`}
                {...speaker}
              />
            ))}
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <button className="bg-white text-black text-lg px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors uppercase font-inter-display">
            View all speakers
          </button>
        </div>


      </Container>
    </div>
  );
}
