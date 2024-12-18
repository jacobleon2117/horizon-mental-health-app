import React from "react";
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import FeaturesSection from "./components/sections/features-section";
import ResourcesSection from "./components/sections/resources-section";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ResourcesSection />
    </div>
  );
};

export default Home;
