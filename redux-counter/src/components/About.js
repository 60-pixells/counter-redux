import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <ul>
            <li><Link to="/main">Home</Link></li>
            <li
            ><Link to="/counter">Counter</Link></li>
        </ul>
    )
}