'use client'
import React from "react"
import NossaHistoria from "../components/NossaHistoria";
import NossosProjetos from "../components/NossosProjetos";
import NossosPatrocinadores from "@/components/NossosPatrocinadores";

const Hero: React.FC = () => {

    return (
        <div className="p-4 text-2xl">
            <NossaHistoria />
            <NossosProjetos />
            <NossosPatrocinadores />
        </div>
    );
};

export default Hero