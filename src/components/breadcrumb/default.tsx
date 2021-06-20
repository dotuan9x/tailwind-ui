// Libraries
import React from 'react';

const Breadcrumb = () => {
    return (
        <div className="flex flex-col mb-8">
            <h1 className="order-1 text-gray-900 text-3xl font-extrabold tracking-tight mt-2">Breadcrumbs</h1>
            <nav className="flex items-center text-gray-500 text-sm font-medium space-x-2 whitespace-nowrap">
                <a href="" className="hover:text-gray-900">
                    Application UI
                </a>
                <svg width="24" height="24" fill="none" className="flex-none text-gray-300">
                    <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a href="" aria-current="page" className="truncate hover:text-gray-900">
                    Navigation
                </a>
            </nav>
        </div>
    );
};

export default Breadcrumb;
