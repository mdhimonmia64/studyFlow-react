import AIDayPlanning from "./components/AIDayPlanning";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Studying from "./components/Studying";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <Studying />
      <Featured />
      <HowItWorks />
      <AIDayPlanning />
    </>
  );
}

export default App;
