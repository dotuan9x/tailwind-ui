// Libraries
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import PrimaryButton from "Components/button/primary";
import Breadcrumb from "Components/breadcrumb/default";
import Preview from "Modules/components/preview"

// Utils
import {formatHtml} from "Src/utils";

function Components() {
    // console.log('a', formatHtml(ReactDOMServer.renderToStaticMarkup(<PrimaryButton />)))

    return (
        <div className="relative bg-white">
            <div className="ring-0 w-full bg-white mx-auto px-4 sm:px-6 border-b-2 border-gray-100 z-50">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1 divide-x divide-gray-200">
                        <a className="pr-2" href="#">
                            <img className="h-8 w-auto sm:h-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                        </a>
                        <span className="px-2 text-gray-400 text-sm">Beautiful UI components by the creators of Tailwind CSS</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-1">
                <div className="w-full lg:w-60 border-r border-gray-100">
                    <div className="relative bg-white">
                        <div className="flex flex-col sm:flex-row sm:justify-around">
                            <div className="w-72 h-screen">
                                <nav className="mt-6">
                                    <a className="px-2 mx-4 hover:text-gray-800 hover:bg-gray-100 flex items-center my-2 transition-colors duration-200 text-gray-600 rounded-lg " href="#">
                                        <span className="py-2 text font-normal text-sm antialiased">
                                            Overview
                                        </span>
                                    </a>

                                    <a className="mx-6 my-2 opacity-70 flex items-center text-gray-600 border-b border-gray-200">
                                         <span className="py-2 text font-normal text-sm antialiased">
                                            General
                                         </span>
                                    </a>
                                    <a className="px-2 mx-4 hover:text-gray-800 hover:bg-gray-100 flex items-center my-2 transition-colors duration-200 text-gray-600 rounded-lg " href="#">
                                        <span className="py-2 text font-normal text-sm antialiased">
                                            Button
                                        </span>
                                    </a>
                                    <a className="px-2 mx-4 hover:text-gray-800 hover:bg-gray-100 flex items-center my-2 transition-colors duration-200 text-gray-600 rounded-lg " href="#">
                                        <span className="py-2 text font-normal text-sm antialiased">
                                            Icon
                                        </span>
                                    </a>
                                    <a className="px-2 mx-4 hover:text-gray-800 hover:bg-gray-100 flex items-center my-2 transition-colors duration-200 text-gray-600 rounded-lg " href="#">
                                        <span className="py-2 text font-normal text-sm antialiased">
                                            Typography
                                        </span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-10 container">
                    <Breadcrumb />

                    <section className="mt-10">
                        <Preview>
                            <PrimaryButton/>
                        </Preview>
                    </section>

                    <section className="mt-10">
                        {/*<Preview>
                            <PrimaryButton/>
                        </Preview>*/}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Components;
