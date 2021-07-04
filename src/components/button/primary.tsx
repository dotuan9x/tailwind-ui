// Libraries
import React from 'react';

const Button = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-items-center">
                <button type="button" className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Button text
                </button>

                <button type="button" className="py-2 px-4 bg-indigo-100 hover:bg-blue-400 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-400 transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Button text
                </button>

                <button type="button" className="py-2 px-4 bg-indigo-100 hover:bg-blue-400 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-400 transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Button text
                </button>

                <button type="button" className="py-2 px-4 bg-indigo-100 hover:bg-blue-400 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-400 transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Button text
                </button>
            </div>
        </>
    );
};

export default Button;
