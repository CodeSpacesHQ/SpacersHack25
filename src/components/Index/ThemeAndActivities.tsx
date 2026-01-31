import Container from "../container";

export default function ThemeAndActivities() {
  const items = [
    {
      title: (
        <>
          {"Exciting"} <br /> {"Technical Talks"}
        </>
      ),
      description:
        "Our conference covers a range of talks from the web to the cloud to compilers (and so on) –- we're proud of the speakers we've put together!",
      icon: (
        <svg
          width={50}
          height={50}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.4166 14.5833V22.9166C35.4166 28.6695 30.7528 33.3333 24.9999 33.3333C19.247 33.3333 14.5833 28.6695 14.5833 22.9166V14.5833C14.5833 8.83033 19.247 4.16663 24.9999 4.16663C30.7528 4.16663 35.4166 8.83033 35.4166 14.5833Z"
            stroke="white"
            strokeWidth="2.5"
          />
          <path
            d="M41.6666 22.9166C41.6666 32.1214 34.2047 39.5833 24.9999 39.5833M24.9999 39.5833C15.7952 39.5833 8.33325 32.1214 8.33325 22.9166M24.9999 39.5833V45.8333M24.9999 45.8333H31.2499M24.9999 45.8333H18.7499"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Networking",
      description:
        "From live Q&As to in-session chat, this conference will provide an awesome opportunity for our attendees and to connect beyond the talks.",
      icon: (
        <svg
          width={50}
          height={50}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.8334 14.0625H40.0232C38.7709 14.0625 38.1447 14.0625 37.5542 13.8837C36.9638 13.705 36.4428 13.3576 35.4007 12.663C33.8378 11.6209 32.0547 10.4322 31.1688 10.164C30.2832 9.89587 29.3438 9.89587 27.4653 9.89587C24.9107 9.89587 23.264 9.89587 22.1155 10.3716C20.967 10.8474 20.0637 11.7506 18.2573 13.557L16.6676 15.1468C16.2605 15.5539 16.0569 15.7575 15.9312 15.9584C15.4654 16.7034 15.517 17.6606 16.0603 18.3511C16.2068 18.5374 16.4311 18.7179 16.8796 19.0788C18.5375 20.413 20.9276 20.2799 22.4288 18.7697L25.0001 16.1831H27.0834L39.5834 28.7575C40.734 29.915 40.734 31.7914 39.5834 32.9489C38.4328 34.1064 36.5674 34.1064 35.4168 32.9489L34.3751 31.901M34.3751 31.901L28.1251 25.6139M34.3751 31.901C35.5257 33.0585 35.5257 34.9352 34.3751 36.0925C33.2245 37.25 31.359 37.25 30.2084 36.0925L28.1251 33.9969M28.1251 33.9969C29.2757 35.1541 29.2757 37.0308 28.1251 38.1883C26.9745 39.3456 25.109 39.3456 23.9584 38.1883L20.8334 35.0446M28.1251 33.9969L23.9584 29.8302M20.8334 35.0446L19.7917 33.9969M20.8334 35.0446C21.984 36.2021 21.984 38.0787 20.8334 39.2362C19.6828 40.3935 17.8174 40.3935 16.6667 39.2362L10.7842 33.231C9.57539 31.9971 8.971 31.3802 8.19664 31.0546C7.42229 30.7291 6.55858 30.7291 4.83121 30.7291H4.16675"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M45.8333 30.7292H40.625"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M17.7084 14.0626H4.16675"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Cool Prizes",
      description:
        "As you immerse yourself in the sessions, there will be opportunities to win some amazing prizes!",
      icon: (
        <svg
          width={50}
          height={50}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33325 22.9167V31.25C8.33325 38.1246 8.33325 41.5619 10.4689 43.6977C12.6046 45.8333 16.0419 45.8333 22.9166 45.8333H27.0833C33.9578 45.8333 37.3951 45.8333 39.531 43.6977C41.6666 41.5619 41.6666 38.1246 41.6666 31.25V22.9167"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25 18.75C6.25 17.1923 6.25 16.4135 6.66867 15.8333C6.94294 15.4533 7.33744 15.1377 7.8125 14.9183C8.53767 14.5833 9.51121 14.5833 11.4583 14.5833H38.5417C40.4887 14.5833 41.4623 14.5833 42.1875 14.9183C42.6625 15.1377 43.0571 15.4533 43.3312 15.8333C43.75 16.4135 43.75 17.1923 43.75 18.75C43.75 20.3077 43.75 21.0865 43.3312 21.6667C43.0571 22.0467 42.6625 22.3623 42.1875 22.5817C41.4623 22.9167 40.4887 22.9167 38.5417 22.9167H11.4583C9.51121 22.9167 8.53767 22.9167 7.8125 22.5817C7.33744 22.3623 6.94294 22.0467 6.66867 21.6667C6.25 21.0865 6.25 20.3077 6.25 18.75Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 7.88689C12.5 5.83226 14.1656 4.16666 16.2202 4.16666H16.9643C21.4023 4.16666 25 7.76437 25 12.2024V14.5833H19.1964C15.4981 14.5833 12.5 11.5852 12.5 7.88689Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M37.5 7.88689C37.5 5.83226 35.8344 4.16666 33.7798 4.16666H33.0356C28.5977 4.16666 25 7.76437 25 12.2024V14.5833H30.8035C34.5019 14.5833 37.5 11.5852 37.5 7.88689Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M25 22.9167V45.8333"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="py-24">
      <Container>
        <div className="flex flex-col justify-start items-start">
          <h3 className="justify-center text-white text-2xl font-medium uppercase leading-loose mb-2">
            Theme - Beyond boundaries; Building for tomorrow.
          </h3>
          <div className="justify-center text-white text-2xl font-normal">
            The aim of the conference is to provide an avenue for techies to
            learn, unlearn, and relearn. The business of technology is evolving,
            and it is important to always stay on top of the game. The theme for
            this year is focused on inspiring techies to keep pushing, to come
            out of their shells and network properly, and on the best ways to
            innovate a groundbreaking technology.
          </div>
        </div>

        <div className="mt-16">
          <h5 className="justify-center text-white text-xl font-semibold uppercase leading-loose mb-8">
            Look forward to...
          </h5>

          <div className="flex flex-col space-y-28">
            {items.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <div className="flex items-end w-full justify-between">
                  <div className="">
                    {item.icon}

                    <h1 className="text-5xl text-white font-light mt-6 leading-16">
                      {item.title}
                    </h1>
                  </div>

                  <p className="text-right max-w-96 w-full text-white">
                    {item.description}
                  </p>
                </div>
                <div className="w-full bg-white/20 mt-8 h-px" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
