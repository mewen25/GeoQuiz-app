import React from 'react';
import Header from "./Header/Header"
import { TopActivity, BottomActivity } from "./Activity";
import "./Learn.css";
import "./Activity/Activity.css";

export default function({ show, data }) {
    console.log(data);
    return (
        <div className="learning-page">
            <Header links={data.links} currentPage={data.current.link} />
            <TopActivity data={data} />
            <BottomActivity data={data} />
        </div>
    )
}