import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

export const revalidate = 60; // regenerate the home page at most once a minute

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
