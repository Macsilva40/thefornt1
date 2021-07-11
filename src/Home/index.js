import React from "react";
import SectionInfo from "./Sectioninfo";
import SectionIntro from "./Sectionintro";

const Home = () => {
  return (
    <div>
      <SectionIntro />
      <div style={{ backgroundColor: "#e8eaf6" }}>
        <SectionInfo />
      </div>
    </div>
  );
};

export default Home;
