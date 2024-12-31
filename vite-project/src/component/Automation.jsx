import React from 'react'

function Automation() {



    return (
<div className="mx-auto py-14 md:px-20 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative">
  <div className="flex flex-col md:flex-col lg:flex-row items-center gap-8">
    {/* Image Section */}
    <div className="rounded-lg flex-1 overflow-hidden w-full lg:w-2/3">
      <img
        src="./homeautomation-banner.jpg"
        alt="Home Automation"
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>

    {/* Text Section */}
    <div className="p-6 w-full lg:w-3/5 space-y-4 flex-1 lg:text-left">
      <h1 className="text-2xl sm:text-5xl font-bold mb-4">
        Do you have too many smart apps to control?
      </h1>
      <p className="text-sm sm:text-base text-gray-700">
        Too many remotes, too many apps. Smart devices do not talk to each other.
        Experience a different way with your All-in-One home control.
      </p>
    </div>
  </div>
</div>


      
      

      
    )
}

export default Automation
