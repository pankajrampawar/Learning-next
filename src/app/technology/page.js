'use client'

import Navbar from "../navbar";
import React from 'react';

export default function Technology() {

    const [ selection, setSelection] = React.useState(1);
    
    const technologies = {
        1: {
            title: "LAUNCH VEHICLE",
            detail: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            imageLandscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
            imagePortrait: "/assets/technology/image-launch-vehicle-portrait.jpg"
        },
        2: {
            title: "SPACEPORT",
            detail: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            imageLandscape: "/assets/technology/image-spaceport-landscape.jpg",
            imagePortrait: "/assets/technology/image-spaceport-portrait.jpg"
        },
        3: {
            title: "SPACE CAPSULE",
            detail: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            imageLandscape: "/assets/technology/image-space-capsule-landscape.jpg",
            imagePortrait: "/assets/technology/image-space-capsule-portrait.jpg"
        }
        
    }

    return <main>
        <nav>
            <Navbar/>
        </nav>

        <section>
            <div>
                <h2>SPACE LAUNCH 101</h2>
            </div>
            
            <div>
                <div>
                    <h3>THE TERMINOLOGY..</h3>
                    <h1>technology title</h1>
                    <p>details</p>
                </div>

                <div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>

                <div>
                    <img src="image" alt="technology image" />
                </div>
            </div>  
        </section>
    </main>
}