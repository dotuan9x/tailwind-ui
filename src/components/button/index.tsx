import React from 'react';

import Preview from 'Modules/components/preview';

const Button = () => {
    return (
        <>
            <section className="mt-10">
                <Preview title="Default button">
                    <DefaultButton />
                </Preview>
            </section>
            <section className="mt-10">
                <Preview title="Button with leading icon">
                    <ButtonWithIcon />
                </Preview>
            </section>
        </>
    );
};

const DefaultButton = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-items-center">
                <button type="button" className="py-2 px-4 bg-blue-500 hover:bg-blue-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded">
                    Primary button
                </button>

                <button type="button" className="py-2 px-4 bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition ease-in duration-200 text-black text-center rounded">
                    Default button
                </button>

                <button type="button" className="py-2 px-4 bg-white border border-dashed border-gray-300 hover:border-blue-500 hover:text-blue-500 text-black transition ease-in duration-200 text-center rounded">
                    Dashed button
                </button>

                <button type="button" className="py-2 px-4 bg-white hover:border-blue-500 hover:text-blue-500 text-black transition ease-in duration-200 text-center rounded">
                    Text button
                </button>
            </div>
        </>
    );
};

const ButtonWithIcon = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-items-center">
                <button type="button" className="flex flex-row py-2 px-4 bg-blue-500 hover:bg-blue-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded">
                    <span className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    Send mail
                </button>

                <button type="button" className="flex flex-row py-2 px-4 bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition ease-in duration-200 text-black text-center rounded">
                    <span className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    Send mail
                </button>

                <button type="button" className="flex flex-row py-2 px-4 bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition ease-in duration-200 text-black text-center rounded">
                    Learn more
                    <span className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </button>

                <button type="button" className="flex flex-row p-2 bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition ease-in duration-200 text-black text-center rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default Button;
