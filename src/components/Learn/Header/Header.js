import React from 'react';
import { Link } from "react-router-dom";

import "./Header.css";

export default ({ links, currentPage }) => (
    <div className="learn-header">
        <div className="learn-header-links">
        {links.map(l => <Link className={`learn-link${currentPage === l.link ? ' l-selected' : ''}`} to={l.link}>{l.title}</Link>)}
        </div>
    </div>
)