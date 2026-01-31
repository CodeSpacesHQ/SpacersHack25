import Container from "../container";

export default function Speakers() {
  return (
    <div className="w-full py-20">
      <Container>
        <h3 className="font-medium text-xl text-[#55B76F] uppercase">
          MEET OUR SPEAKERS FOR SPACERS HACK 2025
        </h3>

        <div className="">
          <h3 className="font-medium text-2xl uppercase mt-2">
            Prestigious Hosts
          </h3>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {[0, 1, 2].map((i) => (
              <div key={`speakers-${i}`} className="bg-primary p-2">
                <div className="h-80 bg-white w-full"></div>

                <div className="text-center text-white my-5">
                  <h3 className="font-medium text-lg mb-1">Mercy Benn-Itua</h3>
                  <p className="">Product Designer</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-medium text-2xl uppercase mt-2">
            Keynote Speakers
          </h3>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {[0, 1, 2].map((i) => (
              <div key={`speakers-${i}`} className="bg-primary p-2">
                <div className="h-80 bg-white w-full"></div>

                <div className="text-center text-white my-5">
                  <h3 className="font-medium text-lg mb-1">Mercy Benn-Itua</h3>
                  <p className="">Product Designer</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-medium text-2xl uppercase mt-2">Panelists</h3>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {[0, 1, 2].map((i) => (
              <div key={`speakers-${i}`} className="bg-primary p-2">
                <div className="h-80 bg-white w-full"></div>

                <div className="text-center text-white my-5">
                  <h3 className="font-medium text-lg mb-1">Mercy Benn-Itua</h3>
                  <p className="">Product Designer</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-medium text-2xl uppercase mt-2">Speakers</h3>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {[0, 1, 2].map((i) => (
              <div key={`speakers-${i}`} className="bg-primary p-2">
                <div className="h-80 bg-white w-full"></div>

                <div className="text-center text-white my-5">
                  <h3 className="font-medium text-lg mb-1">Mercy Benn-Itua</h3>
                  <p className="">Product Designer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
