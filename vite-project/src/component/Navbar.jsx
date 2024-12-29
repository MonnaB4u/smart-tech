import React from 'react'



function Navbar() {
    return (
        <div className='absolute top-0 left-0 w-full z-0 '>
            <div className=" mx-auto  flex justify-items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img
                    src="/ALT-Log.png"
                    alt="AutoafeTec Logo"
                    className="h-12 w-auto"
                />
            </div>
        </div>
    )
}

export default Navbar
