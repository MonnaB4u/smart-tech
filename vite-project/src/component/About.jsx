import React from 'react'

function About() {
  return (
    <div className="mx-auto py-14 md:px-20 lg:px-32 min-h-96 mb-4 flex items-center w-full overflow-hidden relative" id="About">
      <div className="flex flex-col md:flex-row md:items-center gap-10 px-6 sm:px-8">


        <div className="flex-1/2">
          <img
            src="/home2a.png"
            alt="Home Automation"
            className="w-full max-w-lg md:max-w-full shadow-lg"
          />
        </div>
        <div className="flex-1/4 items-center space-y-6 lg:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold">
            Singapore’s first and only problem-based home automation solution system
          </h1>


          <div className="border-b-2 border-gray-300 w-full"></div>

          <p className="text-lg text-gray-700">
            Sometimes life gets hectic – but having all your devices connected in one dashboard helps eliminate some of those little stressors.
          </p>
          <p className="text-lg text-gray-700">
            Unlock your smart devices' true power with our easy-to-use software. Our team of Software Engineers and Designers improves your home’s performance and quality of life.
          </p>
        </div>


      </div>
    </div>




  )
}

export default About
