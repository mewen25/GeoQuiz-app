import React from 'react';

import InfoSection from "../../../components/Home/InfoSection/InfoSection";
import ShowCards from "../../../components/Home/Cards/ShowCards";
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
                src: require('../../../assets/images/home/scroll/map.png'),
                direction: "right",
            }} />
            <div className="scroll-cards-modes">
                <ShowCards cards={[
                    {title: "Point & Click", description: "What we consider the traditional quiz method, Point & Click will test precision ", subTextHandled: true, subText: <h5 className="card-top-subText difficulty-hard">Hardest</h5>, image: { src: require("../../../assets/images/home/scroll/card-hard.png"), name: "card-hard" }},
                    {title: "Multiple Choice", description: "What we consider the traditional quiz method, Point & Click will test precision ", subTextHandled: true, subText: <h5 className="card-top-subText difficulty-medium">Medium</h5>, image: { src: require("../../../assets/images/home/scroll/card-medium.png"), name: "card-medium" }},
                    {title: "Hinted", description: "What we consider the traditional quiz method, Point & Click will test precision ", subTextHandled: true, subText: <h5 className="card-top-subText difficulty-easy">Easiest</h5>, image: { src: require("../../../assets/images/home/scroll/card-easy.png"), name: "card-easy" }}
                ]} />
                <div className="scroll-bar-blue" />
            </div>
        </div>
    )
}