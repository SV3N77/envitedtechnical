function index() {
  return (
    <div className="flex flex-col md:max-w-[590px] md:mx-auto md:pt-28 lg:flex-row-reverse lg:max-w-screen-lg lg:gap-20">
      <img
        src="/Birthdaycake.png"
        alt="Birthday Cake"
        className="max-w-[500px]"
      />

      <div className="flex flex-col pt-4 px-3 md:px-0 gap-2 lg:grow">
        <div className="text-2xl text-primary-1 font-bold md:text-4xl">
          Birthday Bash
        </div>
        <div className="text-neutrals-1 text-sm">
          Hosted by <span className="font-semibold ">Elysia</span>
        </div>
        <div className="flex flex-col">
          <div className="pt-4 flex justify-between">
            <div className="flex gap-4 items-center">
              <img src="/calendar.svg" alt="calendar" />
              <div className="text-neutrals-1 tracking-tight text-sm">
                <span className="text-primary-1 text-lg font-bold">
                  18 August 6:00PM{" "}
                </span>
                <br />
                to{" "}
                <span className="text-neutrals-0 font-bold text-sm">
                  19 August 1:00PM{" "}
                </span>{" "}
                UTC +10
              </div>
            </div>
            <img className="" src="/Arrow.svg" alt="arrow" />
          </div>
          <div className="pt-4 flex justify-between">
            <div className="flex gap-4 items-center">
              <img src="/location.svg" alt="calendar" />
              <div className="text-neutrals-1 tracking-tight text-sm">
                <span className="text-primary-1 text-lg font-bold">
                  Street name{" "}
                </span>
                <br />
                Suburb, State, Postcode
              </div>
            </div>
            <img className="" src="/Arrow.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

// internal components
