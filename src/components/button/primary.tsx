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

            {/*<div className="flex flex-row mt-4">
                <button type="button" className="py-2 px-4 bg-indigo-100 hover:bg-blue-400 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-400 transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Button text
                </button>
            </div>

            <div className="flex flex-row mt-4">
                <button type="button" className="py-2 px-4 bg-white hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Button text
                </button>

                <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Sign in
                </a>
                <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Sign up
                </a>
            </div>*/}
        </>
    );
}

export default Button;
