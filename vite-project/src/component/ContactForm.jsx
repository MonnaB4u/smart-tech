import React, { useState } from 'react'

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted');
    };
    console.log(formData);


    return (
        <div className="mx-auto py-14 md:px-20 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                {/* Left Section: Text Content */}
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
                        Contact us for a free demo!
                    </h1>
                    <p className="text-lg text-gray-600">
                        It’s time to take your smart living to the next level. Try out and experience our home automation solution for yourself today!
                    </p>
                </div>

                {/* Right Section: Form */}
                <div className="flex-1 max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        Creating a Home You Love
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-gray-700 text-lg">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Phone Number Input */}
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 text-lg">Phone Number</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-lg">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-gray-700 text-lg">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                                rows="4"
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default ContactForm
