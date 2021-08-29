// Libraries
import React, {useState} from 'react';

const components = () => {
    return (
        <div className="w-full p-5">
            <h2 className="font-bold text-sm">Layout</h2>
            <div className="grid grid-cols-3 mt-3 w-full">
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    <span className="text-center text-sm">section</span>
                </div>
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-center text-sm">container</span>
                </div>
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                    <span className="text-center text-sm">columns</span>
                </div>
            </div>
            <h2 className="font-bold text-sm">Basic</h2>
            <div className="grid grid-cols-3 mt-3 w-full">
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    <span className="text-center text-sm">div</span>
                </div>
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-center text-sm">list</span>
                </div>
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                    <span className="text-center text-sm">list item</span>
                </div>
            </div>
            <h2 className="font-bold text-sm">Typography</h2>
            <div className="grid grid-cols-3 mt-3 w-full">
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    <span className="text-center text-sm">heading</span>
                </div>
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-center text-sm">paragraph</span>
                </div>
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                    <span className="text-center text-sm">text</span>
                </div>
            </div>
            <h2 className="font-bold text-sm">Media</h2>
            <div className="grid grid-cols-3 mt-3 w-full">
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    <span className="text-center text-sm">image</span>
                </div>
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-center text-sm">icon</span>
                </div>
            </div>
            <h2 className="font-bold text-sm">Forms</h2>
            <div className="grid grid-cols-3 mt-3 w-full">
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    <span className="text-center text-sm">form</span>
                </div>
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-center text-sm">label</span>
                </div>
                <div className="flex flex-col mb-5 p-3 hover:bg-gray-700 cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-center text-sm">input</span>
                </div>
            </div>
        </div>
    );
};

const selectInput = () => {
    return (
        <div className="relative w-full inline-block text-left">
            <div className="mt-1 relative">
                <button type="button" className="relative w-16 bg-transparent rounded-sm text-left cursor-default border border-gray-800 hover:border-gray-700 focus:outline-none focus:ring-0 sm:text-sm">
                    <span className="flex items-center">
                        <input type="text"
                            className="p-1 px-2 text-white bg-transparent cursor-pointer rounded-sm block w-full focus:bg-gray-100 sm:text-sm border-0 focus:ring-0"
                            placeholder="max" />
                    </span>
                </button>
            </div>
            <div className="origin-top-right hidden absolute right-0 mt-1 min-w-full rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="none">
                    <a className="text-gray-700 block px-4 py-2 text-sm">
                          1
                    </a>
                    <a className="text-gray-700 block px-4 py-2 text-sm">
                          2
                    </a>
                </div>
            </div>
        </div>
    );
};

const properties = () => {
    return (
        <div className="w-full p-5">
            <h2 className="font-bold text-sm">Dimensions</h2>
            <div className="grid grid-cols-2 mt-3 w-full">
                <div className="flex flex-row mb-5">
                    <div className="flex flex-none w-1/4 items-center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.81812 4.68161C4.99386 4.85734 4.99386 5.14227 4.81812 5.318L3.08632 7.0498H11.9135L10.1817 5.318C10.006 5.14227 10.006 4.85734 10.1817 4.68161C10.3575 4.50587 10.6424 4.50587 10.8181 4.68161L13.3181 7.18161C13.4939 7.35734 13.4939 7.64227 13.3181 7.818L10.8181 10.318C10.6424 10.4937 10.3575 10.4937 10.1817 10.318C10.006 10.1423 10.006 9.85734 10.1817 9.68161L11.9135 7.9498H3.08632L4.81812 9.68161C4.99386 9.85734 4.99386 10.1423 4.81812 10.318C4.64239 10.4937 4.35746 10.4937 4.18173 10.318L1.68173 7.818C1.50599 7.64227 1.50599 7.35734 1.68173 7.18161L4.18173 4.68161C4.35746 4.50587 4.64239 4.50587 4.81812 4.68161Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex flex-grow items-center">
                        {selectInput()}
                    </div>
                </div>
                <div className="flex flex-row mb-5">
                    <div className="flex flex-none w-1/4 items-center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1813 1.68179C7.35704 1.50605 7.64196 1.50605 7.8177 1.68179L10.3177 4.18179C10.4934 4.35753 10.4934 4.64245 10.3177 4.81819C10.142 4.99392 9.85704 4.99392 9.6813 4.81819L7.9495 3.08638L7.9495 11.9136L9.6813 10.1818C9.85704 10.0061 10.142 10.0061 10.3177 10.1818C10.4934 10.3575 10.4934 10.6424 10.3177 10.8182L7.8177 13.3182C7.73331 13.4026 7.61885 13.45 7.4995 13.45C7.38015 13.45 7.26569 13.4026 7.1813 13.3182L4.6813 10.8182C4.50557 10.6424 4.50557 10.3575 4.6813 10.1818C4.85704 10.0061 5.14196 10.0061 5.3177 10.1818L7.0495 11.9136L7.0495 3.08638L5.3177 4.81819C5.14196 4.99392 4.85704 4.99392 4.6813 4.81819C4.50557 4.64245 4.50557 4.35753 4.6813 4.18179L7.1813 1.68179Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex flex-grow items-center">
                        {selectInput()}
                    </div>
                </div>
                <div className="flex flex-row mb-5">
                    <div className="flex flex-none w-1/4 items-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M0 0H2V10.1418C8.13138 11.0188 12.9812 15.8686 13.8582 22H24V24H0V0ZM2 12.1659V22H11.8341C10.991 16.975 7.02501 13.009 2 12.1659Z" />
                        </svg>
                    </div>
                    <div className="flex flex-grow items-center">
                        {selectInput()}
                    </div>
                </div>
                <div className="flex flex-row mb-5">
                    <div className="flex flex-none w-1/4 items-center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1 3C10.5283 3 10.8194 3.00039 11.0445 3.01878C11.2637 3.03669 11.3758 3.06915 11.454 3.10899C11.6422 3.20487 11.7951 3.35785 11.891 3.54601C11.9309 3.62421 11.9633 3.73631 11.9812 3.95552C11.9996 4.18056 12 4.47171 12 4.9V5.5C12 5.77614 12.2239 6 12.5 6C12.7761 6 13 5.77614 13 5.5V4.87935C13 4.47687 13 4.14469 12.9779 3.87409C12.9549 3.59304 12.9057 3.33469 12.782 3.09202C12.5903 2.7157 12.2843 2.40973 11.908 2.21799C11.6653 2.09434 11.407 2.04506 11.1259 2.0221C10.8553 1.99999 10.5231 1.99999 10.1207 2H10.1206H10.1H9.5C9.22386 2 9 2.22386 9 2.5C9 2.77614 9.22386 3 9.5 3H10.1ZM5.5 2H4.87935H4.87934C4.47686 1.99999 4.14468 1.99999 3.87409 2.0221C3.59304 2.04506 3.33469 2.09434 3.09202 2.21799C2.7157 2.40973 2.40973 2.7157 2.21799 3.09202C2.09434 3.33469 2.04506 3.59304 2.0221 3.87409C1.99999 4.14468 1.99999 4.47686 2 4.87934V4.87935V5.5C2 5.77614 2.22386 6 2.5 6C2.77614 6 3 5.77614 3 5.5V4.9C3 4.47171 3.00039 4.18056 3.01878 3.95552C3.03669 3.73631 3.06915 3.62421 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.62421 3.06915 3.73631 3.03669 3.95552 3.01878C4.18056 3.00039 4.47171 3 4.9 3H5.5C5.77614 3 6 2.77614 6 2.5C6 2.22386 5.77614 2 5.5 2ZM13 9.5C13 9.22386 12.7761 9 12.5 9C12.2239 9 12 9.22386 12 9.5V10.1C12 10.5283 11.9996 10.8194 11.9812 11.0445C11.9633 11.2637 11.9309 11.3758 11.891 11.454C11.7951 11.6422 11.6422 11.7951 11.454 11.891C11.3758 11.9309 11.2637 11.9633 11.0445 11.9812C10.8194 11.9996 10.5283 12 10.1 12H9.5C9.22386 12 9 12.2239 9 12.5C9 12.7761 9.22386 13 9.5 13H10.1206C10.5231 13 10.8553 13 11.1259 12.9779C11.407 12.9549 11.6653 12.9057 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C12.9057 11.6653 12.9549 11.407 12.9779 11.1259C13 10.8553 13 10.5231 13 10.1206V9.5ZM2.5 9C2.77614 9 3 9.22386 3 9.5V10.1C3 10.5283 3.00039 10.8194 3.01878 11.0445C3.03669 11.2637 3.06915 11.3758 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.62421 11.9309 3.73631 11.9633 3.95552 11.9812C4.18056 11.9996 4.47171 12 4.9 12H5.5C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H4.87935C4.47687 13 4.14469 13 3.87409 12.9779C3.59304 12.9549 3.33469 12.9057 3.09202 12.782C2.7157 12.5903 2.40973 12.2843 2.21799 11.908C2.09434 11.6653 2.04506 11.407 2.0221 11.1259C1.99999 10.8553 1.99999 10.5231 2 10.1207V10.1206V10.1V9.5C2 9.22386 2.22386 9 2.5 9Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex flex-grow items-center">
                        {selectInput()}
                    </div>
                </div>
                <div className="flex flex-row mb-5">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <h2 className="font-bold text-sm">Layout</h2>
            <div className="grid grid-cols-2 mt-3 w-full" />
            <h2 className="font-bold text-sm">Text</h2>
            <div className="grid grid-cols-2 mt-3 w-full" />
            <h2 className="font-bold text-sm">Background</h2>
            <div className="grid grid-cols-2 mt-3 w-full" />
            <h2 className="font-bold text-sm">Stroke</h2>
            <div className="grid grid-cols-2 mt-3 w-full" />
            <h2 className="font-bold text-sm">Effects</h2>
            <div className="grid grid-cols-2 mt-3 w-full" />
            <h2 className="font-bold text-sm">Advanced</h2>
            <div className="grid grid-cols-2 mt-3 w-full" />
        </div>
    );
};

const workspace = () => {
    return (
        <div />
    );
};

const container = (className?: string) => {
    const defaultClassName = 'flex ';

    return (
        <div className={defaultClassName} />
    );
};

const Playground = () => {
    return (
        <div className="relative bg-white flex flex-col h-screen">
            <div className="flex flex-none toolbar h-12 w-full bg-blue-500">
                <div className="h-full w-full flex items-center px-5">
                    <div className="flex flex-none">
                        <span className="text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </span>
                        <span className="text-white ml-3">Trang chủ</span>
                    </div>
                    <div className="flex flex-grow h-full p-2" />
                    <div className="flex flex-none">
                        <span className="text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-grow w-full">
                <div className="flex flex-row bg-black">
                    <div className="flex flex-col flex-none text-white">
                        <div className="bg-gray-800 mx-auto cursor-pointer p-2">
                            <svg className="mx-auto" width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                            <span className="text-xs">Thành phần</span>
                        </div>
                        <div className="mx-auto p-2 cursor-pointer">
                            <svg className="mx-auto" width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <span className="text-xs">Mẫu</span>
                        </div>
                        <div className="mx-auto cursor-pointer p-2">
                            <svg className="mx-auto" width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                            <span className="text-xs">Thêm</span>
                        </div>
                    </div>
                    <div className="w-72 flex flex-grow bg-gray-800 text-white">
                        {components()}
                        {/* {properties()} */}
                    </div>
                </div>
                <div>
                    {container()}
                </div>
            </div>
        </div>
    );
};

export default Playground;
