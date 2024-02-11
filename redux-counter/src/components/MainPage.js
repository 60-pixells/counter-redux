import React from "react";
import { useParams } from "react-router-dom";

export default function MainPage() {
    const { id } = useParams();
    return (
        <h1>Main Page {id}</h1>
    )
}