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
          <h4>Spending - Last 7 days</h4>

          <div className="chart">
            <div>
              <div></div>
              <p>mon</p>
            </div>
            <div>
              <div></div>
              <p>tue</p>
            </div>
            <div>
              <div></div>
              <p>wed</p>
            </div>
            <div>
              <div></div>
              <p>thu</p>
            </div>
            <div>
              <div></div>
              <p>fri</p>
            </div>
            <div>
              <div></div>
              <p>sat</p>
            </div>
            <div>
              <div></div>
              <p>sun</p>
            </div>
          </div>{/*End chart inner container*/}

          <div>
            <div>
              <p>Total this month</p>
              <h2>$478.33</h2>
            </div>
            <div>
              <p>+2.4%</p>
              <h2>from last month</h2>
            </div>
          </div>
        </div> {/*End chart container*/}
      </div>
    </>
  )
}
