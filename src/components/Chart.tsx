import  chartLogo from "../assets/images/logo.svg"

export default function Chart() {
  return (
    <>
      <div className="w-[540px] h-[660px] max-w-full">
        <header className="p-5 mb-3 chart-container flex justify-between items-center bg-softRed rounded-l-2xl rounded-r-2xl">
          <div>
            <p className="font-DMsans text-lg text-white leading-normal font-normal">My balance</p>
            <h4 className="font-DMsans text-[32px] text-white leading-normal font-bold">$921.48</h4>
          </div>
          <img
            src={chartLogo}
            width={72}
            height={48}
          />
        </header>
        <div className="bg-paleOrange p-5 chart-container rounded-l-2xl rounded-r-2xl">
          <h4 className="font-DMsans text-[32px] text-darkBrown leading-normal font-bold mb-10">Spending - Last 7 days</h4>

          <div className="chart flex justify-between items-baseline flex-shrink-0 border-b-2 border-cream pb-5">
            <div className="flex flex-col justify-between items-center">
              <div className="w-[50.365px] h-[50px] bg-softRed hover:opacity-55 flex-shrink-0 rounded-[5px] cursor-pointer"></div>
              <p className="font-DMsans text-[15px] text-darkBrown leading-normal font-normal lowercase mt-2">mon</p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="w-[50.365px] h-[100px] bg-softRed hover:opacity-55 flex-shrink-0 rounded-[5px] cursor-pointer"></div>
              <p className="font-DMsans text-[15px] text-darkBrown leading-normal font-normal lowercase mt-2">tue</p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="w-[50.365px] h-[150px] bg-cyan hover:opacity-55 flex-shrink-0 rounded-[5px] cursor-pointer"></div>
              <p className="font-DMsans text-[15px] text-darkBrown leading-normal font-normal lowercase mt-2">wed</p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="w-[50.365px] h-[89px] bg-softRed hover:opacity-55 flex-shrink-0 rounded-[5px] cursor-pointer"></div>
              <p className="font-DMsans text-[15px] text-darkBrown leading-normal font-normal lowercase mt-2">thu</p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="w-[50.365px] h-[67px] bg-softRed hover:opacity-55 flex-shrink-0 rounded-[5px] cursor-pointer"></div>
              <p className="font-DMsans text-[15px] text-darkBrown leading-normal font-normal lowercase mt-2">fri</p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="w-[50.365px] h-[124px] bg-softRed hover:opacity-55 flex-shrink-0 rounded-[5px] cursor-pointer"></div>
              <p className="font-DMsans text-[15px] text-darkBrown leading-normal font-normal lowercase mt-2">sat</p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="w-[50.365px] h-[73px] bg-softRed hover:opacity-55 flex-shrink-0 rounded-[5px] cursor-pointer"></div>
              <p className="font-DMsans text-[15px] text-darkBrown leading-normal font-normal lowercase mt-2">sun</p>
            </div>
          </div>{/*End chart inner container*/}

          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="font-DMsans text-lg text-mediumBrown leading-normal font-normal">Total this month</p>
              <h2 className="font-DMsans text-[48px] text-darkBrown leading-normal font-bold">$478.33</h2>
            </div>
            <div>
              <p className="font-DMsans text-lg text-darkBrown leading-normal font-bold">+2.4%</p>
              <h2 className="font-DMsans text-lg text-mediumBrown leading-normal font-normal">from last month</h2>
            </div>
          </div>
        </div> {/*End chart container*/}
      </div>
    </>
  )
}
