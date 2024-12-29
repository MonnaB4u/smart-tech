import React from 'react'

function Footer() {
    return (
        <div className='bg-black mx-auto py-14 px-6 sm:px-12 lg:px-32 min-h-96 w-full overflow-hidden relative'>
            <div className="flex flex-col lg:flex-row justify-center  gap-10 text-white ">
                
                {/* About AutoLifeTech Section */}
                <div className="flex flex-col gap-6 " style={{ flex: 1 }}>
                    <h1 className="text-2xl sm:text-1xl font-semibold">About AutoLifeTech</h1>
                    <p className="">Inspired to make technology useful to families. We aim to cultivate good habits, achieve your new years’ resolution.</p>
                    <p className="">Best in Singapore for: 1. Harmonising most number of brands 2. Stunning floorplans and dashboards 3. Advance automations</p>
                </div>

                {/* Customer Support Section */}
                <div className="flex flex-col gap-4" style={{ flex: 0.8 }}>
                    <h1 className="text-2xl sm:text-1xl font-semibold">Customer Support</h1>
                    <p className="">Whatsapp Support:</p>
                    <p className="">+ 65 92212224</p>
                </div>

                {/* Smart Home Automation Section */}
                <div className="flex flex-col gap-6" style={{ flex: 1 }}>
                    <h1 className="text-sm  sm:text-base font-semibold text-center">Smart Home Automation</h1>
                    {/* You can add more content here */}
                </div>
            </div>
        </div>
    )
}

export default Footer
