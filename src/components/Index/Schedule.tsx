import Container from "../container";

export default function Schedule() {
  const scheduleItems = [
    {
      time: "20th to 30th Aug, 2026 • 09:00 - 17:00",
      title: "Hybrid Hackathon",
      description:
        "This is a week-long collaborative event where developers and people in tech across Africa and beyond come together to build innovative solutions to local & global problems.",
    },
    {
      time: "31st August, 2026 • 09:00 - 17:00",
      title: "Panel Session",
      description:
        "This session brings together industry experts, thought leaders, and professionals to discuss relevant topics, trends, and challenges in the tech industry.",
    },
    {
      time: "31st August, 2026 • 09:00 - 17:00",
      title: "Keynote Session",
      description:
        "These sessions feature keynote presentations from industry experts and general talks by thought leaders in their respective industries.",
    },
    {
      time: "31st August, 2026 • 09:00 - 17:00",
      title: "Product Showcase",
      description:
        "This showcase is a session where participants can present their ideas, prototypes or demos of disruptive solutions addressing a wide range of domain problems in their communities.",
    },
  ];

  return (
    <div className="w-full bg-[#16181E] py-10 lg:py-24 text-white">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 lg:mb-24 gap-10">
          <div className="text-[30px] leading-tight font-normal font-inter-display">
            <h3>Spacer’s Hack Conf</h3>
            <h3>2025 Event Schedule</h3>
          </div>

          <div className="grid grid-cols-2 lg:flex lg:items-center gap-y-8 gap-x-2 lg:gap-[50px] w-full lg:w-auto">
            <div className="flex flex-col gap-1 items-start">
              <div className="flex items-center gap-3">
                <div className="h-[25px] w-[3px] bg-white/60"></div>
                <span className="text-white/60 text-[16px] sm:text-[18px] lg:text-[22px] font-medium font-inter-display leading-none whitespace-nowrap">
                  20th August, 2025
                </span>
              </div>
              <span className="uppercase text-[16px] sm:text-[18px] lg:text-[25px] font-medium text-white font-inter-display leading-tight mt-1">
                Hackathon Starts
              </span>
            </div>

            <div className="flex flex-col gap-1 items-start">
              <div className="flex items-center gap-3">
                <div className="h-[25px] w-[3px] bg-white/60"></div>
                <span className="text-white/60 text-[16px] sm:text-[18px] lg:text-[22px] font-medium font-inter-display leading-none whitespace-nowrap">
                  30th August, 2025
                </span>
              </div>
              <span className="uppercase text-[16px] sm:text-[18px] lg:text-[25px] font-medium text-white font-inter-display leading-tight mt-1">
                Hackathon Ends
              </span>
            </div>

            <div className="flex flex-col gap-1 items-start col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="h-[25px] w-[3px] bg-white/60"></div>
                <span className="text-white/60 text-[16px] sm:text-[18px] lg:text-[22px] font-medium font-inter-display leading-none whitespace-nowrap">
                  31st August, 2025
                </span>
              </div>
              <span className="uppercase text-[16px] sm:text-[18px] lg:text-[25px] font-medium text-white font-inter-display leading-tight mt-1">
                Conference Day
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          {scheduleItems.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-4 flex items-center gap-4">
                <div className="w-[3px] h-[25px] bg-white"></div>
                <span className="text-[20px] font-normal font-inter-display text-white">
                  {item.time}
                </span>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-center">
                <h3 className="text-[24px] uppercase font-medium text-white font-inter-display leading-[140%]">
                  {item.title}
                </h3>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <p className="text-left w-full max-w-[422px] text-white text-[16px] font-normal leading-[140%] font-inter-display">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
