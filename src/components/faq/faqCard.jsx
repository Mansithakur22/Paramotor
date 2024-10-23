"use client"
import { useState } from "react";

export function FaqCard({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of the answer

    const toggleAnswer = () => {
        setIsOpen(!isOpen); // Toggle the visibility state
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-lg w-4/5 mx-auto h-auto min-h-[150px]"> {/* Slightly increase padding, decrease width */}
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-xl">{question}</h3>
                <button
                    onClick={toggleAnswer}
                    className="text-xl focus:outline-none"
                >
                    {isOpen ? '-' : '+'} {/* Change the symbol based on the state */}
                </button>
            </div>
            {isOpen && ( // Conditionally render the answer based on the state
                <div className="mt-2"> {/* Add margin-top for spacing */}
                    <p className="text-gray-700">{answer}</p>
                </div>
            )}
        </div>
    );
}
