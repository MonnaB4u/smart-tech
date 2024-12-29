import React from 'react'

function Brands() {

    const data = [
        { "img": "/brands/1.png" },
        { "img": "/brands/2.png" },
        { "img": "/brands/3.png" },
        { "img": "/brands/4.png" },
        { "img": "/brands/5.png" },
        { "img": "/brands/6.png" },
        { "img": "/brands/7.png" },
        { "img": "/brands/8.png" },
        { "img": "/brands/9.png" },
        { "img": "/brands/10.png" },
        { "img": "/brands/11.png" },
        { "img": "/brands/12.png" },
        { "img": "/brands/13.png" },
        { "img": "/brands/14.png" },
        { "img": "/brands/15.png" },
        { "img": "/brands/16.png" },
        { "img": "/brands/17.png" },
        { "img": "/brands/18.png" },
        { "img": "/brands/19.png" },
        { "img": "/brands/20.png" },
        { "img": "/brands/21.png" },
        { "img": "/brands/22.png" },
        { "img": "/brands/23.png" },
        { "img": "/brands/24.png" },
        { "img": "/brands/25.png" },
        { "img": "/brands/26.png" },
        { "img": "/brands/27.png" },
        { "img": "/brands/28.png" },
        { "img": "/brands/29.png" },
        { "img": "/brands/30.png" },
        { "img": "/brands/31.png" },
        { "img": "/brands/32.png" },
        { "img": "/brands/33.png" },
        { "img": "/brands/34.png" },
        { "img": "/brands/35.png" },
        { "img": "/brands/36.png" }
    ]




    return (
        <div className="mx-auto py-14 md:px-20 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative">

            {/* Section Heading */}
            <div className="text-center mb-12 flex flex-col gap-3 items-center">
                <p className="font-bold">Known for technology and design</p>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800">
                    1000+ Intelligent Integrations
                </h1>
                <p>Most number of brands compared to any other system</p>
                <div className="border-b-2 border-gray-400 w-56"></div>
            </div>

            {/* Brand Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 ">
                {
                    data.map((e, i) => (
                        <div key={i} className="flex justify-center items-center">
                            <img
                                src={e.img}
                                alt={`Brand Logo ${i}`}
                                className="h-10 sm:h-14 lg:h-16 w-2/3 object-contain"
                            />
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Brands
