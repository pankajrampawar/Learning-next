"use client"

import Navbar from "../navbar"
import React from "react"

export default function Destination () {
    
    const [selection, setSelection] = React.useState(1)

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
                <img src={`/assets/destination/image-moon.png`} />
            </div>

            <div>
                <div>
                    <sapn>MOON</sapn>
                </div>

                <h1>moon title</h1>

                <p>moon information</p>

                <div>
                    <p>
                        <span>AVG. DISTANCE</span>
                        <span>DISTANCE</span>
                    </p>

                    <p>
                        <span>EST. TRAVEL TIME</span>
                        <span>timeToTravel</span>
                    </p>
                </div>
            </div>
        </section>
    </div>
}