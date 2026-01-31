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
];

const keynoteSpeakers = [
  {
    name: "Odun Eweniyi",
    role: "Cofounder/COO, Piggytech",
    image: "/images/speakers/odunayo-eweniyi.png",
    bio: "Odunayo Eweniyi is the co-founder and Chief Operations Officer of Piggytech, the company behind Piggyvest, Nigeria’s largest digital savings and micro-investment platform with over 6 million users.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Peace Itimi",
    role: "Host Founders Connect",
    image: "/images/speakers/peace-itimi.png",
    bio: "Peace Itimi is a Growth Marketer and YouTuber. She is the Host of 'Founders Connect'.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Ire Aderinokun",
    role: "Limited Partner, Angel Investor",
    image: "/images/speakers/ire-aderinokun.png",
    bio: "Ire Aderinokun is an investor, entrepreneur, and software engineer with a decade of experience building and backing technology ventures in frontier markets.",
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
            Keynote Speakers
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

        <div className="mt-24">
          <h3 className="font-medium text-[30px] uppercase text-white/60 font-inter-display">
            Panelists
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[0, 1, 2].map((i) => (
              <SpeakerCard
                key={`panelists-${i}`}
                name="Amarachi Johnson-Ubah"
                role="Community Manager"
                bio="Detailed bio coming soon..."
              />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="font-medium text-[30px] uppercase text-white/60 font-inter-display">
            Speakers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[0, 1, 2].map((i) => (
              <SpeakerCard
                key={`speakers-${i}`}
                name="Amarachi Johnson-Ubah"
                role="Community Manager"
                bio="Detailed bio coming soon..."
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
