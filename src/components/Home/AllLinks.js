import React from 'react';

import ContinentLinks from "./ContinentLinks";

import "./AllLinks.css";

import data from "../../data/gameData/gameSelect";

import { ReactComponent as Banner } from "../../assets/images/home/banner.svg";
import { ReactComponent as ReverseWave } from "../../assets/images/home/scroll/reverse-wave.svg";

function AllLinks() {

    return (
        <div className="all-links">
            {/* <Banner /> */}
            {/* <ReverseWave /> */}
            <div className="all-links-container">
                <ContinentLinks linkTitle="europe" title="Europe" data={{
                    quiz: data[0]?.europe?.quiz?.links,
                    learn: data[0]?.europe?.learn?.links
                }} />

                <ContinentLinks linkTitle="asia" title="Asia" data={{
                    quiz: data[0]?.asia?.quiz?.links,
                    learn: data[0]?.asia?.learn?.links
                }} />
                
                <ContinentLinks linkTitle="south-america" title="South America" data={{
                    quiz: data[0]["south-america"]?.quiz?.links,
                    learn: data[0]["south-america"]?.learn?.links
                }} />

                <ContinentLinks linkTitle="africa" title="Africa" data={{
                    quiz: data[0]?.africa?.quiz?.links,
                    learn: data[0]?.africa?.learn?.links
                }} />

                <ContinentLinks linkTitle="north-america" title="North America" data={{
                    quiz: data[0]["north-america"]?.quiz?.links,
                    learn: data[0]["north-america"]?.learn?.links
                }} />
                
                <ContinentLinks linkTitle="oceania" title="Oceania" data={{
                    quiz: data[0]?.oceania?.quiz?.links,
                    learn: data[0]?.oceania?.learn?.links
                }} />
            </div>
        </div>
    )
}

export default AllLinks;