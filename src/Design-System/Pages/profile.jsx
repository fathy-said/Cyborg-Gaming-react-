import React from "react";
import { ProfileHeroContainer, Gaming } from "../components/index";
const Profile = () => {
    return (
        <>
            <ProfileHeroContainer />
            <Gaming TitleDecoration="Your Gaming" TitleSpan="Library" />
        </>
    );
};

export default Profile;
