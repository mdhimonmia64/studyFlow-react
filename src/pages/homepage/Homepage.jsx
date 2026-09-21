import AIDayPlanning from "../../components/AIDayPlanning";
import Banner from "../../components/Banner";
import FAQ from "../../components/FAQ";
import Featured from "../../components/Featured";
import HowItWorks from "../../components/HowItWorks";
import NextStudySession from "../../components/NextStudySession";
import Pricing from "../../components/Pricing";
import Review from "../../components/Review";
import Stats from "../../components/Stats";
import Studying from "../../components/Studying";

function Homepage() {
  return (
    <>
      <Banner />
      <Stats />
      <Studying />
      <Featured />
      <HowItWorks />
      <AIDayPlanning />
      <Review />
      <Pricing />
      <FAQ />
      <NextStudySession />
    </>
  );
}

export default Homepage;
