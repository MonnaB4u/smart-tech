import React from 'react'


function WhatsAppButton() {
    return (
        <div>
            <a
                href="https://wa.me/+6592212224"
                className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M16.72 15.267c-.254-.127-1.507-.74-1.74-.82-.234-.08-.405-.127-.575.127-.17.254-.664.82-.815.99-.15.17-.3.19-.554.063-.254-.127-1.073-.395-2.043-1.255-.754-.635-1.26-1.422-1.408-1.676-.149-.254-.016-.391.11-.518.112-.112.254-.287.381-.43.127-.15.17-.254.255-.42.084-.17.042-.318-.021-.445-.063-.127-.575-1.38-.788-1.896-.207-.495-.42-.427-.575-.435-.15-.007-.318-.007-.49-.007-.17 0-.445.064-.678.318-.234.255-.89.867-.89 2.114 0 1.248.91 2.454 1.035 2.62.127.169 1.79 2.733 4.358 3.85.611.254 1.088.405 1.46.545.613.194 1.17.165 1.614.1.492-.073 1.506-.616 1.718-1.214.213-.596.213-1.107.149-1.213-.064-.106-.23-.17-.484-.297zM12.007 2C6.49 2 2 6.48 2 12c0 2.11.634 4.068 1.715 5.692L2 22l4.414-1.637C8.026 21.365 9.967 22 12.007 22c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                </svg>
            </a>
        </div>

    //     <div>
    //     <a
    //         href="https://wa.me/+8689256184"
    //         className="fixed bottom-5 right-10  hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         aria-label="Chat on WhatsApp"
    //     >
    //         <img
    //             src="/whatsApp.png" // WhatsApp logo URL
    //             alt="WhatsApp"
    //             className="w-[70px] h-full" // Adjust the size as needed
    //         />
    //     </a>
    // </div>
    // )
)}

export default WhatsAppButton
