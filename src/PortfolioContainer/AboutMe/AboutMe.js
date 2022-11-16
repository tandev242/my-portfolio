import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Hi all, I'm My Xuyen, you can call me Snowy, the reason I got this nickname is because I like snow. I'm 19 years old, my major is logistics and supply chain management, I'm currently studying in HCMUTE. ​Welcome all you guys come to my website, this is a place to share my thoughts, my experiences and other interesting things.",
    highlights: {
      bullets: [
        "Tam Quan gate",
        "SQL & No-SQL Database Development",
        "G&G Technical Applications",
        "GIS Web Development and Analysis",
        "Machine Learning Project in Drilling and Production",
        "Building REST-API with Python and Node.Js",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return (
      SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
        <div className="highlight " key={i}>
          <div className="highlight-blob "></div>
          <span>{value}</span>
        </div>
      ))
    )
  };

  return (
    <div
      className="about-me-container screen-container fade-in "
      id={props.id || ""}
    >
      <div className="about-me-parent ">
        <ScreenHeading title={"About Me"} subHeading={"My Portfolio Overview"} />
        <div className="about-me-card ">
          <div className="about-me-profile "></div>
          <div className="about-me-details ">
            <span className="about-me-description ">
              Hi all, I'm My Xuyen, you can call me Snowy, the reason I got this nickname is because I like snow. <br />I'm 19 years old, my major is logistics and supply chain management, I'm currently studying in HCMUTE. <br />​Welcome all you guys come to my website, this is a place to share my thoughts, my experiences and other interesting things.
            </span>
            <div className="about-me-highlights ">
              <div className="highlight-heading ">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options ">
              <button className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              > Let's contact! </button>
              <a href="My_CV_2_0.pdf" download="My Portfolio.pdf">
                <button className="btn highlighted-btn ">Get Portfolio</button>
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper-custom">
          <div className="about-me-card-custom">
            <div className="about-me-details ">
              <h5><a href="https://vi.wikipedia.org/wiki/C%E1%BB%95ng_tam_quan">Tam Quan gate</a></h5>
              <span className="about-me-description ">
                I am a western girl, born and raised in Kien Giang - a coastal province in the Mekong Delta. One of the typical images of Kien Giang is the Tam Quan gate
              </span>
            </div>
            <div className="about-me-profile custom-1"></div>
          </div>
          <div className="about-me-card">
            <div className="about-me-profile custom-2"></div>
            <div className="about-me-details ">
              <h5><a href="https://vi.wikipedia.org/wiki/Phú_Quốc">Phu Quoc Island</a></h5>
              <span className="about-me-description ">
                When referring to Kien Giang, almost everyone will know about Phu Quoc Island - a place that is fondly called a tourist paradise.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
