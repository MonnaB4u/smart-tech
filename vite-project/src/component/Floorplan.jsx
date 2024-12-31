import React from 'react'

function Floorplan() {
    return (
        <div className="mx-auto py-14 md:px-14 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative">
        <div
          className=" flex flex-col md:flex-row justify-around items-center gap-8"
          style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}
        >
          <div className="flex justify-center items-center md:flex-1" style={{ flex: ".7" }}>
            <img
              src="./mobile-floorplan.png"
              alt="Home Automation"
              className="w-full h-auto rounded-lg shadow-md"
              style={{ width: "15rem" }}
            />
          </div>
      
          <div className=" md:flex-1 text-center md:text-left" style={{ flex: "1" }}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
              Floorplan Controls, The most Visually Stunning Controls
            </h1>
            <p className="text-sm sm:text-base text-gray-700">
              Always a conversation maker, Guests have been saying “Impressive, this actually exist? WOW!”
              At a glance, be in-charge and control your whole home.
            </p>
          </div>
      
          <div className=" flex justify-center md:flex-1" style={{ flex: ".7" }}>
            <img
              src="./alt-tablet-mockup-min.png"
              alt="Home Automation"
              className="w-full h-auto rounded-lg shadow-md"
              style={{ width: "20rem" }}
            />
          </div>
        </div>
      </div>
      
    )
}

export default Floorplan
