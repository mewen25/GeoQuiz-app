import React from 'react';

import InfoSection from "../../../components/Home/InfoSection/InfoSection";
import InfoBlock from "../../../components/Home/InfoBlock/InfoBlock";
import ShowCards from "../../../components/Home/Cards/ShowCards";
import LinkButton from "../../../components/Utils/Button/LinkButton";
import Spacer from "../../../components/Utils/Spacer";
// import { ReactComponent as Mapimg } from "../../../assets/images/home/scroll/map.png";

import "./Scrollpage.css";

export default function Scrollpage() {
    return (
        <div className="scrollpage-container">
            <InfoSection text={{
                title: "Find the perfect Quiz",
                underline: "false",
                handled: true,
                description: <p>Quizzing needs to not only be enjoyable, but effective at guiding you to your next challenge. Explore the world in the way that best suits <strong style={{fontWeight: "900"}}>you.</strong></p>
            }} image={{
                name: "map",
                // src: require('../../../assets/images/home/scroll/map.png'),
                direction: "right",
            }} />
            <Spacer img={{src: require("../../../assets/images/home/scroll/spacer1.png"), name: "spacer1"}} />
            {/* <div className="block-space" /> */}
            {/* <InfoSection text={{
                title: "Offering Variety",
                underline: "false",
                handled: true,
                description: <p>It’s important to us that we give you the power to choose how you tackle a quiz, this can be a factor of what you find most comfortable, or </p>
            }} image={{
                name: "map",
                // src: require('../../../assets/images/home/scroll/saturn.png'),
                direction: "left",
            }} /> */}
            {/* <div className="block-space" /> */}
            <div className="scroll-cards-modes">
                <ShowCards cards={[
                    {title: "Point & Click", description: "What we consider the traditional quiz method, Point & Click will test precision ", subTextHandled: true, subText: <h5 className="card-top-subText difficulty-hard">Hardest</h5>, image: { src: require("../../../assets/images/home/scroll/card-hard.png"), name: "card-hard" }},
                    {title: "Multiple Choice", description: "What we consider the traditional quiz method, Point & Click will test precision ", subTextHandled: true, subText: <h5 className="card-top-subText difficulty-medium">Medium</h5>, image: { src: require("../../../assets/images/home/scroll/card-medium.png"), name: "card-medium" }},
                    {title: "Hinted", description: "What we consider the traditional quiz method, Point & Click will test precision ", subTextHandled: true, subText: <h5 className="card-top-subText difficulty-easy">Easiest</h5>, image: { src: require("../../../assets/images/home/scroll/card-easy.png"), name: "card-easy" }}
                ]} />
                <div className="scroll-bar-blue" />
            </div>
            <div className="block-space" />
            <InfoSection text={{
                title: "Learning Mode",
                underline: "false",
                handled: true,
                description: <p>Whether you’re looking for something new, or a <strong style={{fontWeight: "900"}}>quick refresh</strong>, our learning mode activities ensure success with <strong style={{fontWeight: "900"}}>effective learning techniques.</strong></p>
            }} image={{
                name: "map",
                // src: require('../../../assets/images/home/scroll/saturn.png'),
                direction: "left",
            }} />
            <div className="block-space" />
            <InfoBlock img={{src: require("../../../assets/images/home/scroll/learningMode1.png"), name: "learnSample1"}} content={<LinkButton colour="blue" text="Try it" />} />
            {/* <div className="block-space" /> */}
            {/* <InfoBlock img={{src: require("../../../assets/images/home/scroll/learningMode2.png"), name: "learnSample2"}} content={<h3>Drag the tag things into the correct place, kind of like a puzzle. also do it for flags and capitals too.</h3>} imgDirection="row-reverse" /> */}
        </div>
    )
}