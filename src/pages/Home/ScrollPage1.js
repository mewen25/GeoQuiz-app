import React from 'react';
import ActivitySection from "../../components/Home/ActivitySection";
import QuickLinks from "../../components/Home/QuickLinks";
import AllLinks from "../../components/Home/AllLinks";

import { ReactComponent as Clouds } from "../../assets/images/home/cloud_bunch.svg";
import { ReactComponent as Cloud } from "../../assets/images/home/cloud.svg";

import "./scrollpage1.css";

export default function ScrollPage1() {
    return (
        <div className="home-page-scroll">
        <Clouds style={{position: "absolute", zIndex: "1", left: "3%", top: "85%"}} />
        <Cloud style={{position: "absolute", zIndex: "1", left: "80%"}} />
        <section className="scroll-header">Quizzes & Learning activities built to enjoy learning</section>

        <ActivitySection type="quiz" link={{txt: "Try Europe Quiz >"}} text={{
            title: "GEOGRAPHY QUIZZES",
            subHeading: "Let’s put your geography knowledge to the test!",
            preDescription: "Quizzes are great!",
            description: "A quick test of the mind not only evaluates what you know already, but also shows you what’s left to discover."
        }} actions={[
            {txt: "Europe", img: "europe.png"},
            {txt: "USA", img: "usa.png"},
            {txt: "Africa", img: "africa.png"},
            {txt: "South Africa", img: "south-africa.png"},
        ]} />

        <div className="hr" style={{left: "13%"}} />

        {/* <section className="scroll-quiz-example">
            <img alt="quiz-example" src={require("../../assets/images/home/quiz-example.png")} />
        </section> */}

        <ActivitySection type="learn" reverse link={{txt: "Try Learning Europe >"}} text={{
            title: "LEARNING ACTIVITIES",
            subHeading: "Let’s put your geography knowledge to the test!",
            preDescription: "Fast, effective learning!",
            description: "Whether you’re looking for something new, or a quick refresh, our learning mode activities ensure success with effective learning techniques."
        }} actions={[
            {txt: "Europe", img: "europe.png"},
            {txt: "USA", img: "usa.png"},
            {txt: "Africa", img: "africa.png"},
            {txt: "South Africa", img: "south-africa.png"},
        ]} />

        <div className="divider">
            <div className="hr" style={{right: "2%", width: "50%"}} />
            Today's Selection
        </div>

        <QuickLinks />

        <div className="divider">
            What else?
            <div className="hr" style={{right: "-2%", width: "50%"}} />
        </div>

        <ActivitySection type="multi" link={{txt: "Try Europe Multiple Choice Quiz  >"}} text={{
            title: "Multiple choice Quiz",
            description: "Quizzes in a multiple choice formats are great for those tricker questions you're still getting to grips with."
        }} />

          <AllLinks />
        
        </div>
    )
}