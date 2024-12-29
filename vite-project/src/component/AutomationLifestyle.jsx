import React, { useState } from 'react';

function AutomationLifestyle() {

  const data = [
    {
      "img": "/automationLifeImages/img1.jpg", 
      "name": "Free to choose the best",
      "disc": "Unlimit your selection of devices. Choose your favourites: Dyson, Tesla car, Samsung washer, Aqara, Yale lock, Google assistant"
    },
    {
      "img": "/automationLifeImages/img2.jpg", 
      "name": "Enhance Home Security",
      "disc": "We have well secured over 4600+ homes and offices to date. Turn your home into a safe sanctuary to cherish precious time together with your family."
    },
    {
      "img": "/automationLifeImages/img3.png", 
      "name": "Maintain Healthy Homes",
      "disc": "We ensure safe air quality, integrate smoke detection, automate robot vacuum cleaners, install leak detection to prevent mold and automate your toilet ventilation. "
    },
    {
      "img": "/automationLifeImages/img4.jpg", 
      "name": "Operate Without Internet, Reliability",
      "disc": "Increase reliability, increase up time Have the ability to run your house without broken data transmitted through different countries. Your data is within your home."
    },
    {
      "img": "/automationLifeImages/img5.jpg", 
      "name": "Experience Remote Access",
      "disc": "Have complete control of your home even when you are on holiday. Know everything about your home status with just a glance on your phone."
    },
    {
      "img": "/automationLifeImages/img6.gif", 
      "name": "Secured Cloud Back Up",
      "disc": "Increase reliability, increase up time.Have a routine backup for your home data and custom configurations. Fret not, as our customer support will be there for you when you need it the most."
    }
  ];

  const [datas, setDatas] = useState(data);

  return (
    <div className="mx-auto py-14 px-4 sm:px-6 md:px-20 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative">

      <div className="text-center mb-12">
        <p className="text-gray-600 text-lg font-bold sm:text-3xl md:text-4xl mb-4 md:w-3/4 w-full mx-auto">
          A truly thoughtful home automation considers the lifestyle you want
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          data.map((e, i) => (
            <div className="relative flex-shrink-0 w-full" key={i}>

              <img src={e.img} alt={`Automation Life ${i + 1}`} className="w-full h-64 object-cover mb-14  rounded-lg shadow-lg" />

              <div className="absolute bottom-1 left-0 right-0 flex justify-center ">

                <div className="inline-block bg-white p-6 sm:p-3  shadow-lg">
                  <h1 className="text-lg sm:text-xl font-semibold text-center">{e.name}</h1>
                  <p className="text-sm sm:text-base text-gray-700 text-center mt-2">
                    {e.disc}
                  </p>
                </div>

              </div>

            </div>
          ))
        }

      </div>

    </div>


  );
}

export default AutomationLifestyle;
