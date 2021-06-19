// Libraries
import React from 'react';

// Components
// import Button from 'Modules/components/button'

function Preview(props) {
    return (
        <div>
            <header className="flex flex-wrap md:flex-nowrap items-center mb-3 py-1.5 whitespace-nowrap">
                <div className="min-w-0 flex items-center">
                    <h2 className="font-medium text-gray-900 truncate">
                        <a className="mr-1 antialiased">Contained</a>
                    </h2>
                </div>
            </header>
            <div className="w-full ring-1 ring-gray-900 ring-opacity-5 bg-gray-100 px-6 py-20 rounded-lg border border-gray-100 content-center">
                {props.children}
            </div>
        </div>
    );
}

export default Preview;
