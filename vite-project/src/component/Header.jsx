import React from 'react'
import Navbar from './Navbar'
function Header() {
    return (
        <div className=" min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative">
            <video
                src="/Home.mp4"
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            ></video>
            <Navbar />

            <div className="z-10 text-white absolute flex flex-col items-start bottom-[30%] left-[8vw]">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Make your home smart,
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        and life simpler
                    </h1>
                    <p className="text-lg md:text-xl mt-4 max-w-xl">
                        Be blown away by the endless possibilities of customizable home automation with AutoLifeTech Singapore
                    </p>
                    <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
                        BOOK A DEMO
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Header
