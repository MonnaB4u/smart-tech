import React from 'react'

function WhyAutomate() {
    return (
        <div className="mx-auto py-14 px-4 sm:px-6 md:px-20 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative bg-gray-50">
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center my-6 text-center">
                <p className="text-lg text-gray-600 tracking-wide">Open the door to the future</p>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    Why Automate Your Home?
                </h1>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row md:justify-center md:gap-8 xl:gap-12 items-center gap-8 lg:gap-10">
                {/* Card 1 */}
                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img
                        src="./Dashboard-Floor-Plan1.jpg"
                        alt="Smart Home Feature"
                        className="w-full max-w-xs h-auto shadow-md"
                    />
                    <div className="flex flex-col text-center gap-4">
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            A smart, convenient home makes life simple
                        </h1>
                        <p className="text-gray-600">
                            An automated smart home makes your life more comfortable knowing that you have
                            complete control at your fingertips with just a soft touch.
                        </p>
                        <p className="text-gray-600">
                            With our user-friendly interface and ease of use, even the elderly do not have to
                            struggle.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img
                        src="./Automation-Home-Safety2.jpg"
                        alt="Smart Home Feature"
                        className="w-full max-w-xs h-auto shadow-md"
                    />
                    <div className="flex flex-col text-center gap-4">
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            A smart, convenient home makes life simple
                        </h1>
                        <p className="text-gray-600">
                            An automated smart home makes your life more comfortable knowing that you have
                            complete control at your fingertips with just a soft touch.
                        </p>
                        <p className="text-gray-600">
                            With our user-friendly interface and ease of use, even the elderly do not have to
                            struggle.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img
                        src="./Automation-Home-Remote3.jpg"
                        alt="Smart Home Feature"
                        className="w-full max-w-xs h-auto shadow-md"
                    />
                    <div className="flex flex-col text-center gap-4">
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            A smart, convenient home makes life simple
                        </h1>
                        <p className="text-gray-600">
                            An automated smart home makes your life more comfortable knowing that you have
                            complete control at your fingertips with just a soft touch.
                        </p>
                        <p className="text-gray-600">
                            With our user-friendly interface and ease of use, even the elderly do not have to
                            struggle.
                        </p>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default WhyAutomate
