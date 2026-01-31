import Container from "../container";
import Ticket from "../ui/ticket";

export default function Mandate() {
  return (
    <div className="w-full relative">
      <Container className="py-20">
        <div className="max-w-5xl flex flex-col">
          <h3 className="text-lg text-white uppercase mb-3">
            Code Space Hackathon 2026
          </h3>

          <h2 className="subtitle text-3xl leading-[150%]">
            Build bold ideas, collaborate with top talent, and ship real
            solutions at Code Space Hackathon 2026, a high-energy experience
            where innovation meets execution through hacking, mentorship, and
            live product demos.
          </h2>

          <p className="text-2xl text-white mt-6">
            For developers, designers, founders & builders.
          </p>
        </div>

        <Ticket />
      </Container>
    </div>
  );
}
