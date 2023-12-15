"use client"

import Navbar from "../navbar"
import React from "react"

export default function Destination () {
    
    const [selection, setSelection] = React.useState(1)

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

        <section className="flex flex-col xl:flex-row items-center text-center gap-6 md:gap-12 mt-10 px-5 xl:justify-center xl:mx-36 xl:text-start">

            <div className="flex flex-col items-center xl:items-start gap-6 xl:gap-20 md:gap-12 text-center w-full xl:max-w-[620px]">
                <div className="flex gap-2 text-sm md:self-start md:text-base xl:text-xl justify-center">
                    <span className="font-bold">01</span>
                    <span>PICK YOUR DESTINATION</span>
                </div>

                <div className="max-w-[175px] aspect-square md:max-w-[300px] xl:max-w-[445px] ml-6">
                    <img src={`/assets/destination/image-${selectedPlanet.title.toLowerCase()}.png`} />
                </div>
            </div>
            

            <div className="flex flex-col gap-6 md:gap-8 md:max-w-[575px] xl:max-w-[445px]">
                <div className="flex justify-center xl:justify-start gap-2 md:gap-6 text-lg mb-4">
                    <sapn>MOON</sapn>
                    <span>MARS</span>
                    <span>EUROPA</span>
                    <span>TITAN</span>
                </div>

                <h1 className="text-5xl md:text-7xl xl:text-8xl">{selectedPlanet.title}</h1>

                <p className="text-sm md:text-base border-b-gray-500 border-b -mt-2 pb-8 md:pb-10 md:tracking-wider">{selectedPlanet.details}</p>

                <div className="flex flex-col md:flex-row md:justify-center xl:justify-start gap-6 md:gap-16">
                    <p className="flex flex-col gap-2">
                        <span>AVG. DISTANCE</span>
                        <span className="text-2xl md:text-3xl">{selectedPlanet.distance}</span>
                    </p>

                    <p className="flex flex-col gap-2">
                        <span>EST. TRAVEL TIME</span>
                        <span className="text-2xl md:text-3xl">{selectedPlanet.time}</span>
                    </p>
                </div>
            </div>
        </section>
    </div>
}