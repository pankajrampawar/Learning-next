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

    const selectedTechnology = technologies[selection];

    return <main>

        <div className="fixed top-0 left-0 h-full w-full -z-10">
            <img src="/assets/technology/background-technology-mobile.jpg" alt="empty space background" className="sm:hidden w-full h-full"/>
            <img src="/assets/technology/background-technology-tablet.jpg" alt="empty space background" className="hidden sm:block xl:hidden w-full h-full"/>
            <img src="/assets/technology/background-technology-desktop.jpg" alt="empty space background" className="hidden xl:block w-full h-full"/>
        </div>
        <nav>
            <Navbar/>
        </nav>

        <section className="flex flex-col items-center text-center mt-8 md:mt-10">
            <div className="flex text-base md:text-xl md:self-start ml-[40px]">
                <span className="font-bold mr-2">03</span>
                <h2>SPACE LAUNCH 101</h2>
            </div>
            
            <div className="flex flex-col items-center">
                
                <div className="order-3 px-5 mt-7 md:mt-11 md:max-w-[458px]">
                    <h3 className="text-sm md:tex-base">THE TERMINOLOGY..</h3>
                    <h1 className="text-2xl md:text-[40px] md:mt-4">{selectedTechnology.title}</h1>
                    <p className="text-base font-thin md:mt-4">{selectedTechnology.detail}</p>
                </div>

                <div className="flex gap-4 order-2 justify-center mt-9 md:mt-[56px]">
                    <div className={`flex items-center justify-center w-10 h-10 md:w-[60px] md:h-[60px] border border-gray-600 rounded-full ${selection === 1 ? 'bg-white text-black' : 'bg-transparent text-white'}`} onClick={()=>{setSelection(1)}}>1</div>
                    <div className={`flex items-center justify-center w-10 h-10 md:w-[60px] md:h-[60px] border border-gray-600 rounded-full ${selection === 2 ? 'bg-white text-black' : 'bg-transparent text-white'}`} onClick={()=>{setSelection(2)}}>2</div>
                    <div className={`flex items-center justify-center w-10 h-10 md:w-[60px] md:h-[60px] border border-gray-600 rounded-full ${selection === 3 ? 'bg-white text-black' : 'bg-transparent text-white'}`} onClick={()=>{setSelection(3)}}>3</div>
                </div>

                <div className='order-1 mt-8 md:mt-[60px] md:h-[310px]'>
                    <img src={selectedTechnology.imageLandscape} alt={selectedTechnology.title}  className="xl:hidden h-full"/>
                    <img src={selectedTechnology.imagePortrait} alt={selectedTechnology.title}  className="hidden xl:block"/>
                </div>

            </div>  
        </section>
    </main>
}