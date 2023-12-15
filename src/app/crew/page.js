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
            role: "",
            name: "",
            details: "",
            imagePath: "/assets/crew/image-mark-shuttleworth.png"
        },
        3: {
            role: "",
            name: "",
            details: "",
            imagePath: "/assets/crew/image-victor-glover.png"
        },
        4: {
            role: "",
            name: "",
            details: "",
            imagePath: "/assets/crew/image-anousheh-ansari.png"
        }
    }

    const selectedCrewMember = crewMembers[selection];

    return <main className="overflow-hidden">

        <div>

        </div>

        <nav>
            <Navbar/>
        </nav>
        
        <div>
            <section>
                <h2>
                    <span>02</span> <span>MEET YOUR CREW</span>
                </h2>
            </section>

            <section>
                <div>
                    <h2>{selectedCrewMember.role}</h2>
                    <h1>{selectedCrewMember.name}</h1>
                    <p>{selectedCrewMember.details}</p>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div>
                    <img src={selectedCrewMember.imagePath} alt={`${selectedCrewMember.name}`} />
                </div>
            </section>
        </div>
    </main>
}