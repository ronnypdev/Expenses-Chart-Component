import  chartLogo from "../assets/images/logo.svg"

type chartData = {
  chart: (string | number)[],
  style?: React.CSSProperties
}

export default function Chart({ chart }: chartData) {

  // const chartDimension = {
  //   height: `${chart.amount}px`
  // }

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
            {chart.map((chartData) => (
              <div className="flex flex-col justify-between items-center has-tooltip">
                <span className="tooltip rounded-[5px] shadow-lg p-1 bg-darkBrown font-DMsans text-lg text-paleOrange leading-normal font-bold -mt-10">
                  ${chartData.amount}
                </span>
                <div className={`w-[50.365px] hover:opacity-55 flex-shrink-0 rounded-[5px] cursor-pointer 
                ${chartData.day === "wed" ? "bg-cyan" : "bg-softRed"}`}
                  style={
                  { height: `${chartData.amount}px` }}></div>
                <p className="font-DMsans text-[15px] text-darkBrown leading-normal font-normal lowercase mt-2">{chartData.day}</p>
              </div>
            ))}

          </div>{/*End chart inner container*/}

          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="font-DMsans text-lg text-mediumBrown leading-normal font-normal">Total this month</p>
              <h2 className="font-DMsans text-[48px] text-darkBrown leading-normal font-bold">$227.94</h2>
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
