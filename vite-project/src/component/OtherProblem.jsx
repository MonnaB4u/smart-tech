import React, { useState } from 'react'

const OtherProblem = () => {

    const [isOpen, setisOpen] = useState({});
    const dataArr = [

        { title: "Read Issue", description: 'I find it so difficult to study”, This year is my PSLE. Help', },
        { title: "Our Solution", description: "Hey google STUDY MODE Scene was created. After discussing with Tommy, he shared with favourite study music playlist.Music plays, Curtains open, smart anti-flickering lights on brightly. Lastly, a smart automation timer was installed for him to do focused work using Pomodoro study technique with break times allocated. ", },
        { title: "Final Results", description: "Number of study hours we approximated base on occupancy sensor. Tommy is proud that he is able to better maintain the study habit and his improved Will Power/ Discipline", },
    ];


    const dataArrSec = [

        { title: "Read Issue", description: 'I find it so difficult to study”, This year is my PSLE. Help', },
        { title: "Our Solution", description: "Hey google STUDY MODE Scene was created. After discussing with Tommy, he shared with favourite study music playlist.Music plays, Curtains open, smart anti-flickering lights on brightly. Lastly, a smart automation timer was installed for him to do focused work using Pomodoro study technique with break times allocated. ", },
        { title: "Final Results", description: "Number of study hours we approximated base on occupancy sensor. Tommy is proud that he is able to better maintain the study habit and his improved Will Power/ Discipline", },
    ];


    const dataArrTh = [

        { title: "Read Issue", description: 'I find it so difficult to study”, This year is my PSLE. Help', },
        { title: "Our Solution", description: "Hey google STUDY MODE Scene was created. After discussing with Tommy, he shared with favourite study music playlist.Music plays, Curtains open, smart anti-flickering lights on brightly. Lastly, a smart automation timer was installed for him to do focused work using Pomodoro study technique with break times allocated. ", },
        { title: "Final Results", description: "Number of study hours we approximated base on occupancy sensor. Tommy is proud that he is able to better maintain the study habit and his improved Will Power/ Discipline", },
    ];

    const toggle = (cardIdx, idx) => {
        setisOpen(prevState => ({
            ...prevState,
            [cardIdx]: prevState[cardIdx] === idx ? null : idx, // Toggling only for the specific card
        }));

    };



    return (
        <div className="mx-auto py-14 flex flex-col justify-center items-center px-4 sm:px-6 md:px-20 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative" style={{ backgroundColor: '#D4D0D6' }}>
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center my-6 text-center">
                <p className="text-lg text-gray-600 tracking-wide">User experience and design</p>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    Other Problems You Might Face
                </h1>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center" >
                {/* Card 1 */}
                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./User experience/HotFLusha-woman-sat-in-bed-and-experience-a-head-as-part-of-her-high-blood-pressure-symptoms.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-3xl font-bold text-gray-800 text-center'>Children can’t Focus and Study</h1>
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArr.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(1, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[1] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[1] === idx && '!rotate-180'}`} />
                                            </svg>
                                        </span>
                                    </button>


                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[1] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm ">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Card 2 */}
                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./User experience/pexels-rodnae-productions-5591833.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-3xl font-bold text-gray-800 text-center w-1/2'>Addicted to TV Games</h1>
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrSec.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(2, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[2] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[2] === idx && '!rotate-180'}`} />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[2] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm ">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./User experience/pexels-andrea-piacquadio-3767426.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-3xl font-bold text-gray-800 text-center'>Dementia – Loved and Not Forgotten</h1>
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrSec.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(3, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[3] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[3] === idx && '!rotate-180'}`} />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[3] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm ">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Card 4 */}


                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./User experience/pexels-andres-ayrton-6551070-800x1200.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-3xl font-bold text-gray-800 text-center w-1/2'>Addicted to TV Games</h1>
                    <div className="flex flex-col text-center gap-4">
                        
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrSec.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(4, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">

                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[4] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[4] === idx && '!rotate-180'}`} />
                                          
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[4] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm ">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


                {/* Card 5 */}
                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./User experience/mining-machines.png" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-3xl font-bold text-gray-800 text-center'>Dementia – Loved and Not Forgotten</h1>
                    <div className="flex flex-col text-center gap-4">
                       
                    <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrSec.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(5, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">

                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[5] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[5] === idx && '!rotate-180'}`} />
                                          
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[5] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm ">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default OtherProblem