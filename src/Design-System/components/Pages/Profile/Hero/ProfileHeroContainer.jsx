import React from "react";
import ButHero from "./ButHero/ButHero";
import TopHero from "./TopHero/TopHero";
import "./ProfileHero.css";
const ProfileHeroContainer = () => {
    return (
        <div className="profile-container text-white ">
            <TopHero />
            <ButHero />
        </div>
    );
};

export default ProfileHeroContainer;
