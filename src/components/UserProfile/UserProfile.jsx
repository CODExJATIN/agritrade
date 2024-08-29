import React from "react";
import MyProfile from "../widgets/MyProfileCard";
import UserProfileCard from "../widgets/UserProfileCard";
import Navbar from "../widgets/Navbar";
import ContractCard from "../widgets/ContractCard";
import Footer from "../widgets/Footer";

const ProfilePage = ()=>{
    return(
        <>
            <Navbar/>
            
           
            <div className="content-div">
                <div className="my-profile-div">
                <MyProfile/>
                </div>
                <div className="side-contra-container">
                    <div className="nearby-contra">
                    <h1>Contractors in Ahmedabad:</h1>
                     <UserProfileCard/>
                    </div>
                    <div className="available-contra">
                    <h1>Available Contracts:</h1>
                     <ContractCard/>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default ProfilePage;