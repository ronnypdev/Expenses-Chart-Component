import Chart from "./components/Chart";
import { chartData } from "./constants";

function App() {

  return (
    <>
      <main className="h-full max-container flex justify-center items-center">
        <Chart chart={chartData} />
      </main>
    </>
  )
}

export default App
