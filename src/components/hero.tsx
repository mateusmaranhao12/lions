'use client'
import React from "react"
import NossaHistoria from "./NossaHistoria";
import NossosProjetos from "./NossosProjetos";

const Hero: React.FC = () => {

    return (
        <div className="p-4 text-2xl">
            <NossaHistoria />
            <NossosProjetos />
        </div>
    );
};

export default Hero