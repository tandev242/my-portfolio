import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://medium.com/@rwsoeriawinata'>
                            <i className="fa fa-medium"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/raditiasoeriawinata-25434842/'>
                            <i className="fa fa-linkedin"></i>
                        </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className="highlighted-text">My Xuyen</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic",
                                    1000,
                                    "Logistics & Supply chain",
                                    1000,
                                    "Technology & Education",
                                    1000,
                                    "Chinese Language",
                                    1000,
                                    "SPKT"
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Deepening New Horizon with Data and Technology.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                    <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    > Let's Discuss! </button>
                        <a href='My_CV_2_0.pdf' download='My Portfolio.pdf'>
                            <button className="btn highlighted-btn">Get Portfolio</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>            
        </div>
    );
}
