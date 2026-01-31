import Container from "../container";

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
            {[0, 1, 2].map((i) => (
              <div key={`hosts-${i}`} className="bg-[#16181E] p-2">
                <div className="h-80 bg-[#111319] w-full"></div>

                <div className="text-center text-white my-6">
                  <h3 className="font-medium text-[24px] mb-2 font-inter-display">
                    Amarachi Johnson-Ubah
                  </h3>
                  <p className="text-[22px] font-normal text-white font-inter-display leading-[130%]">
                    Community Manager
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="font-medium text-[30px] uppercase text-white/60 font-inter-display">
            Keynote Speakers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[0, 1, 2].map((i) => (
              <div key={`keynote-${i}`} className="bg-[#16181E] p-2">
                <div className="h-80 bg-[#111319] w-full"></div>

                <div className="text-center text-white my-6">
                  <h3 className="font-medium text-[24px] mb-2 font-inter-display">
                    Amarachi Johnson-Ubah
                  </h3>
                  <p className="text-[22px] font-normal text-white font-inter-display leading-[130%]">
                    Community Manager
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="font-medium text-[30px] uppercase text-white/60 font-inter-display">
            Panelists
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[0, 1, 2].map((i) => (
              <div key={`panelists-${i}`} className="bg-[#16181E] p-2">
                <div className="h-80 bg-[#111319] w-full"></div>

                <div className="text-center text-white my-6">
                  <h3 className="font-medium text-[24px] mb-2 font-inter-display">
                    Amarachi Johnson-Ubah
                  </h3>
                  <p className="text-[22px] font-normal text-white font-inter-display leading-[130%]">
                    Community Manager
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="font-medium text-[30px] uppercase text-white/60 font-inter-display">
            Speakers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[0, 1, 2].map((i) => (
              <div key={`speakers-${i}`} className="bg-[#16181E] p-2">
                <div className="h-80 bg-[#111319] w-full"></div>

                <div className="text-center text-white my-6">
                  <h3 className="font-medium text-[24px] mb-2 font-inter-display">
                    Amarachi Johnson-Ubah
                  </h3>
                  <p className="text-[22px] font-normal text-white font-inter-display leading-[130%]">
                    Community Manager
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
