'use client'

import Navbar from "../navbar";
import React from 'react';

export default function Crew() {

    const [selection, setSelection] = React.useState(1);

    const crewMembers = {
        1: {
            role: "COMMANDER",
            name: "Douglas Hurley",
            details: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            imagePath: "/assets/crew/image-douglas-hurley.png"
        },
        2: {
            role: "Mission Specialist ",
            name: "MARK SHUTTLEWORTH",
            details: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            imagePath: "/assets/crew/image-mark-shuttleworth.png"
        },
        3: {
            role: "PILOT",
            name: "Victor Glover",
            details: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
            imagePath: "/assets/crew/image-victor-glover.png"
        },
        4: {
            role: "Flight Engineer",
            name: "Anousheh Ansari",
            details: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
            imagePath: "/assets/crew/image-anousheh-ansari.png"
        }
    }

    const selectedCrewMember = crewMembers[selection];

    return <main className="overflow-hidden">

        <div className="fixed top-0 left-0 -z-10 w-full h-full">
            <img src="/assets/crew/background-crew-mobile.jpg" alt="space background" className="h-full w-full sm:hidden"/>
            <img src="/assets/crew/background-crew-tablet.jpg" alt="space background" className="h-full w-full hidden sm:block xl:hidden"/>
            <img src="/assets/crew/background-crew-desktop.jpg" alt="space background" className="h-full w-full hidden xl:block"/>
        </div>

        <nav>
            <Navbar/>
        </nav>
        
        <div className="flex flex-col items-center text-center gap-8 mt-12 md:mx-[40px]">
            <section className="self-start">
                <h2 className="text-lg flex gap-2 justify-center ">
                    <span className="font-bold">02</span> <span>MEET YOUR CREW</span>
                </h2>
            </section>

            <section className="flex flex-col gap-6 items-center px-5">
                <div className="order-2 sm:order-1 flex flex-col">
                    <h2 className="order-2 sm:order-1 mt-8 text-xl">{selectedCrewMember.role}</h2>
                    <h1 className="order-3 sm:order-2 sm:mt-2 text-4xl sm:text-5xl">{selectedCrewMember.name}</h1>
                    <p className="order-4 sm:order-3 mt-6 text-sm leading-relaxed sm:leading-loose md:h-[84px]">{selectedCrewMember.details}</p>
                    <div className="flex gap-4 justify-center order-1 sm:order-4 sm:mt-10">
                        <div className={`w-2.5 h-2.5 block ${selection === 1 ? 'bg-white' : 'bg-slate-600'} rounded-full cursor-pointer`} onClick={()=>{setSelection(1)}}></div>
                        <div className={`w-2.5 h-2.5 block ${selection === 2 ? 'bg-white' : 'bg-slate-600'} rounded-full cursor-pointer`} onClick={()=>{setSelection(2)}}></div>
                        <div className={`w-2.5 h-2.5 block ${selection === 3 ? 'bg-white' : 'bg-slate-600'} rounded-full cursor-pointer`} onClick={()=>{setSelection(3)}}></div>
                        <div className={`w-2.5 h-2.5 block ${selection === 4 ? 'bg-white' : 'bg-slate-600'} rounded-full cursor-pointer`} onClick={()=>{setSelection(4)}}></div>
                    </div>
                </div>

                <div className="order-1 sm:order-2 border-b sm:border-b-0 border-gray-500 w-full mx-10 flex justify-center">
                    <img src={selectedCrewMember.imagePath} alt={`${selectedCrewMember.name}`} className="max-h-[223px] md:max-h-[572px]"/>
                </div>
            </section>
        </div>
    </main>
}