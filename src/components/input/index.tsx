// Libraries
import React from 'react';

import Preview from 'Modules/components/preview';

const Input = () => {
    return (
        <>
            <section className="mt-10">
                <Preview title="Input with inline leading add-on and trailing dropdown">
                    <DefaultInput />
                </Preview>
            </section>
            <section className="mt-10">
                <Preview title="Input with prefix">
                    <InputWithPrefix />
                </Preview>
            </section>
            <section className="mt-10">
                <Preview title="Input with label">
                    <InputWithLabel />
                </Preview>
            </section>
            <section className="mt-10">
                <Preview title="Input with label and help text">
                    <InputWithLabelHelpText />
                </Preview>
            </section>
            <section className="mt-10">
                <Preview title="Input with validation error">
                    <InputWithValidationError />
                </Preview>
            </section>
        </>
    );
};

const DefaultInput = () => {
    return (
        <div className="max-w-sm mx-auto">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
            </label>
            <div className="mt-1 relative rounded shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded shadow-sm"
                    placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                        Currency
                    </label>
                    <select
                        id="currency"
                        name="currency"
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                    >
                        <option>USD</option>
                        <option>CAD</option>
                        <option>EUR</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

const InputWithPrefix = () => {
    return (
        <div className="max-w-sm mx-auto">
            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                Website
            </label>
            <div className="mt-1 flex rounded shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">http://</span>
                <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r sm:text-sm border-gray-300" placeholder="www.example.com" />
            </div>
        </div>
    );
};

const InputWithLabel = () => {
    return (
        <div className="max-w-sm mx-auto">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Email
            </label>
            <div className="mt-1 relative rounded shadow-sm">
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded shadow-sm"
                    placeholder="you@email.com"
                />
            </div>
        </div>
    );
};

const InputWithLabelHelpText = () => {
    return (
        <div className="max-w-sm mx-auto">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <div className="mt-1 relative rounded shadow-sm">
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded shadow-sm"
                    placeholder="you@email.com"
                />
            </div>
            <label className="block text-sm font-medium text-gray-400 pt-2">
                Make your password short and easy to guess
            </label>
        </div>
    );
};

const InputWithValidationError = () => {
    return (
        <div className="max-w-sm mx-auto">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
            </label>
            <div className="mt-1 relative rounded shadow-sm">
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded shadow-sm"
                    placeholder="dotuan9x"
                />
            </div>
            <label className="block text-sm font-medium text-gray-400 pt-2">
                Your user name must be more than 4 characters
            </label>
        </div>
    );
};

export default Input;
