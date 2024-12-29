import React from 'react'

function YourHome() {
    return (
        <div className="mx-auto py-14 px-6 md:px-20 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative">
            {/* Section Title */}
            <div className="text-center mb-12 flex flex-col gap-4 items-center">
                <p className="font-bold text-lg sm:text-xl">Your home, your data</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
                    Understand Your Home Patterns
                </h1>
                <div className="border-b-2 border-gray-400 w-32 sm:w-56 mb-6"></div>
                <p className="text-sm sm:text-base px-4 sm:px-8 w-full md:w-3/4 lg:w-2/3 text-center">
                    With the rising cost of utility bills, you can find out which areas of your home require heavy usage. Make more efficient decisions when you understand your home better. Fret not, as all personal data collected will be yours.
                </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center">
                <img
                    src="/homeBanner.jpeg"
                    alt="Home Banner"
                    className="w-3/2 sm:w-2/3 lg:w-1/2 h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

        </div>

    )
}

export default YourHome
