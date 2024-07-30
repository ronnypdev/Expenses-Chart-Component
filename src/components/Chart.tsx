import  chartLogo from "../assets/images/logo.svg"

export default function Chart() {
  return (
    <>
      <div className="w-[540px] h-[660px] max-w-full">
        <header className="p-4">
          <div>
            <p>My Balance</p>
            <h5>$921.48</h5>
          </div>
          <img
            src={chartLogo}
            width={72}
            height={48}
          />
        </header>
      </div>
    </>
  )
}
