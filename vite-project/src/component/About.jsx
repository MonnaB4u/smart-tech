import React from 'react'

function About() {
  return (
    <div
  className="mx-auto py-14 px-6 sm:px-8 md:px-16 lg:px-24 min-h-96 mb-4 flex flex-col md:flex-row lg:flex-row items-center w-full overflow-hidden relative"
  id="About"
>
  <div className="flex flex-col gap-10 w-full md:flex-col lg:flex-row items-center">
    {/* Image Section */}
    <div className="w-full lg:w-5/12 flex justify-center">
      <img
        src="/home2a.png"
        alt="Home Automation"
        className="w-full max-w-lg md:max-w-full shadow-lg"
      />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-7/12 space-y-6  lg:text-left">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
        Singapore’s first and only problem-based home automation solution system
      </h1>

      <div className="border-b-2 border-gray-300 w-full"></div>

      <p className="text-lg text-gray-700 leading-relaxed">
        Sometimes life gets hectic – but having all your devices connected in one
        dashboard helps eliminate some of those little stressors.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Unlock your smart devices' true power with our easy-to-use software. Our
        team of Software Engineers and Designers improves your home’s
        performance and quality of life.
      </p>
    </div>
  </div>
</div>

  

  )
}

export default About
