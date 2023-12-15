"use client"

import Navbar from "../navbar"
import React from "react"

export default function Destination () {
    
    const [selection, setSelection] = React.useState(2)

    const planets = {
        1: {
            title: "MOON",
            details:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 KM",
            time: "3 DAYS"
        },

        2: {
            title: "MARS",
            details: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. KM",
            time: "9 MONTHS",
        },

        3: {
            title: "EUROPA",
            details: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. KM",
            time: "3 YEARS",
        },

        4: {
            title: "TITAN",
            details: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. KM",
            time: "7 YEARS",
        } 
    }

    const selectedPlanet = planets[selection];

    const bgMobile = "/assets/destination/background-destination-mobile.jpg"
    const bgTablet =  "/assets/destination/background-destination-tablet.jpg"
    const bgDesktop = "/assets/destination/background-destination-desktop.jpg"

    return<div>
        <div className="fixed top-0 left-0 -z-10 w-full h-full">
            <img src={bgMobile} alt="background space" className="sm:hidden w-full h-full" />
            <img src={bgTablet} alt="background space"  className="hidden sm:block xl:hidden w-full h-full"/>
            <img src={bgDesktop} alt="background space"  className="hidden xl:block w-full h-full"/>
        </div>

        <nav>
            <Navbar/>
        </nav>

        <section>
            <div>
                <span>01</span>
                <span>PICK YOUR DESTINATION</span>
            </div>
            
            <div>
                <img src={`/assets/destination/image-${selectedPlanet.title.toLowerCase()}.png`} />
            </div>

            <div>
                <div>
                    <sapn>MOON</sapn>
                    <span>MARS</span>
                    <span>EUROPA</span>
                    <span>TITAN</span>
                </div>

                <h1>{selectedPlanet.title}</h1>

                <p>{selectedPlanet.details}</p>

                <div>
                    <p>
                        <span>AVG. DISTANCE</span>
                        <span>{selectedPlanet.distance}</span>
                    </p>

                    <p>
                        <span>EST. TRAVEL TIME</span>
                        <span>{selectedPlanet.time}</span>
                    </p>
                </div>
            </div>
        </section>
    </div>
}