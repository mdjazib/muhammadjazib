import React from "react";
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "@/components/ui/draggable-card";

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiJquery,
    SiSass,
    SiReact,
    SiNextdotjs,
    SiExpo,
    SiNodedotjs,
    SiExpress,
    SiEjs,
    SiPhp,
    SiMongodb,
    SiMysql,
    SiLaravel,
    SiFigma,
    SiAdobexd,
} from "react-icons/si";

export function DraggableCardDemo() {
    const items = [
        { title: "HTML5", icon: <SiHtml5 />, color: "text-[#e44d26]", className: "card-block absolute top-2 left-5 rotate-[3deg]" },
        { title: "CSS3", icon: <SiCss3 />, color: "text-[#264de4]", className: "card-block absolute top-6 right-4 rotate-[-5deg]" },
        { title: "JavaScript", icon: <SiJavascript />, color: "text-[#f0db4f]", className: "card-block absolute top-112 left-1/4 rotate-[6deg]" },
        { title: "jQuery", icon: <SiJquery />, color: "text-[#0769ad]", className: "card-block absolute top-20 right-10 rotate-[-4deg]" },
        { title: "SASS/SCSS", icon: <SiSass />, color: "text-[#cd6799]", className: "card-block absolute top-14 left-2 rotate-[8deg]" },
        { title: "React", icon: <SiReact />, color: "text-[#61dafb]", className: "card-block absolute top-10 right-1/2 rotate-[-6deg]" },
        { title: "Next.js", icon: <SiNextdotjs />, color: "text-white", className: "card-block absolute top-24 left-10 rotate-[2deg]" },
        { title: "Expo", icon: <SiExpo />, color: "text-black", className: "card-block absolute top-102 right-6 rotate-[7deg]" },
        { title: "Node.js", icon: <SiNodedotjs />, color: "text-[#68a063]", className: "card-block absolute top-116 left-1/3 rotate-[-7deg]" },
        { title: "Express", icon: <SiExpress />, color: "text-[#000000]", className: "card-block absolute top-28 right-2 rotate-[9deg]" },
        { title: "EJS", icon: <SiEjs />, color: "text-[#a91e50]", className: "card-block absolute top-8 left-2 rotate-[-4deg]" },
        { title: "PHP", icon: <SiPhp />, color: "text-[#8892be]", className: "card-block absolute top-36 left-1/2 rotate-[5deg]" },
        { title: "MongoDB", icon: <SiMongodb />, color: "text-[#4db33d]", className: "card-block absolute top-6 right-16 rotate-[-8deg]" },
        { title: "SQL / MySQL", icon: <SiMysql />, color: "text-[#00758f]", className: "card-block absolute top-88 left-1/8 rotate-[3deg]" },
        { title: "Laravel", icon: <SiLaravel />, color: "text-[#ff2d20]", className: "card-block absolute top-126 right-1/3 rotate-[6deg]" },
        { title: "Figma", icon: <SiFigma />, color: "text-[#f24e1e]", className: "card-block absolute top-120 left-5 rotate-[-5deg]" },
        { title: "Adobe XD", icon: <SiAdobexd />, color: "text-[#ff61f6]", className: "card-block absolute top-62 right-50 rotate-[4deg]" },
    ];
    return (
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip cards-parent">
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black md:text-4xl text-neutral-800">
                My Tech-Stack
            </p>
            {items.map((item, index) => (
                <DraggableCardBody key={index} className={item.className}>
                    <div className={`img text-5xl ${item.color}`}>
                        {item.icon}
                    </div>
                    <h3 className="mt-4 text-center text-2xl font-bold text-neutral-300">
                        {item.title}
                    </h3>
                </DraggableCardBody>
            ))}
        </DraggableCardContainer>
    );
}
