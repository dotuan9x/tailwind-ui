// Libraries
import React from 'react';

function Button() {
    return (
        <div className="bg-white p-10">
            <div className="flex flex-row">
                <button type="button" className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Button text
                </button>
            </div>

            <div className="flex flex-row mt-4">
                <button type="button" className="py-2 px-4 bg-indigo-100 hover:bg-blue-400 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-400 transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Button text
                </button>
            </div>

            <div className="flex flex-row mt-4">
                <button type="button" className="py-2 px-4 bg-white hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Button text
                </button>
            </div>
        </div>
    );
}

export default Button;
