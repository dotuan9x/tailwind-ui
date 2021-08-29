import React from 'react';

import Preview from 'Modules/components/preview';

const Select = () => {
    return (
        <>
            <section className="mt-10">
                <Preview title="Basic select">
                    <SelectBasic />
                </Preview>
            </section>
            <section className="mt-10">
                <Preview title="Select with search field">
                    <SelectWithSearchField />
                </Preview>
            </section>
            <section className="mt-10">
                <Preview title="Default select">
                    <DefaultSelect />
                </Preview>
            </section>
            <section className="mt-10">
                <Preview title="Simple select">
                    <SimpleSelect />
                </Preview>
            </section>
            <section className="mt-10">
                <Preview title="With dividers">
                    <WithDividers />
                </Preview>
            </section>
        </>
    );
};

const SelectBasic = () => {
    return (
        <div className="flex flex-row w-full max-w-xl mx-auto">
            <div className="relative inline-block text-left">
                <div>
                    <div className="mt-1 relative">
                        <button type="button" className="relative w-full bg-white border border-gray-300 rounded shadow-sm px-4 py-2 text-left cursor-default hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="select-label-1">
                            <span className="flex items-center">
                                <span className="block truncate font-medium">Tom Cook</span>
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="origin-top-right absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                    <div className="py-1" role="none">
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                        <form method="POST" action="#" role="none">
                            <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
                                Sign out
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SelectWithSearchField = () => {
    return (
        <div className="flex flex-row w-full max-w-xl mx-auto">
            <div className="relative inline-block text-left">
                <div>
                    <div className="mt-1 relative">
                        <button type="button" className="relative w-full bg-white border border-gray-300 rounded shadow-sm pr-4 text-left cursor-default hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="select-label-1">
                            <span className="flex items-center">
                                <input type="text" name="price"
                                    className="hover:bg-gray-50 cursor-pointer rounded block w-full pr-12 sm:text-sm border-0 "
                                    placeholder="Select a person" />
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="origin-top-right absolute right-0 mt-1 w-56 min-w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                    <div className="py-1" role="none">
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                        <form method="POST" action="#" role="none">
                            <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
                                Sign out
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DefaultSelect = () => {
    return (
        <div className="flex flex-row w-full max-w-xl mx-auto">
            <div>
                <label id="select-label-1" className="block text-sm font-medium text-gray-700">
                    Assigned to
                </label>
                <div className="mt-1 relative">
                    <button type="button" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="select-label-1">
                        <span className="flex items-center">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                            <span className="ml-3 block truncate">Tom Cook</span>
                        </span>
                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <span className="mx-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>

            <div>
                <label id="select-label-2" className="block text-sm font-medium text-gray-700">
                    Assigned to
                </label>
                <div className="mt-1 relative">
                    <button type="button" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="select-label-2">
                        <span className="flex items-center">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                            <span className="ml-3 block truncate">Tom Cook</span>
                        </span>
                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>
                    <ul className="absolute z-10 mt-1 w-56 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                        <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" role="option">
                            <div className="flex items-center">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                <span className="font-normal ml-3 block truncate">Tom Cook</span>
                            </div>
                            <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </li>
                        <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" role="option">
                            <div className="flex items-center">
                                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                <span className="font-normal ml-3 block truncate">Wade Cooper</span>
                            </div>
                        </li>
                        <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" role="option">
                            <div className="flex items-center">
                                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                <span className="font-normal ml-3 block truncate">Wade Cooper</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const SimpleSelect = () => {
    return (
        <div className="flex flex-row w-full max-w-xl mx-auto">
            <div className="relative inline-block text-left">
                <div>
                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Options
                        {/* Heroicon name: solid/chevron-down */}
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                    <div className="py-1" role="none">
                        {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                        <form method="POST" action="#" role="none">
                            <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
                                Sign out
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WithDividers = () => {
    return (
        <div className="flex flex-row w-full max-w-xl mx-auto">
            {/* This example requires Tailwind CSS v2.0+ */}
            <div className="relative inline-block text-left">
                <div>
                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Options
                        {/* Heroicon name: solid/chevron-down */}
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                    <div className="py-1" role="none">
                        {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Edit</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Duplicate</a>
                    </div>
                    <div className="py-1" role="none">
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Archive</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">Move</a>
                    </div>
                    <div className="py-1" role="none">
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4">Share</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-5">Add to favorites</a>
                    </div>
                    <div className="py-1" role="none">
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-6">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Select;
