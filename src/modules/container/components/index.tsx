// Libraries
import React, {Fragment, useState, useEffect} from 'react';
import {useParams, useHistory, useLocation} from 'react-router-dom';
import {get} from 'lodash';

import Breadcrumb, {IBreadcrumb} from 'Components/breadcrumb/default';

// Utils
import {components} from 'Modules/container/components/constant';

const Components = () => {
    const route = useParams<{id?: string}>();
    const history = useHistory();
    const location = useLocation();
    const [component, setComponent] = useState<Record<string, any>>({});
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

    useEffect(() => {
        if (!get(route, 'component')) {
            history.push('/components/overview');
        } else {
            getComponentActive(components);
        }
    }, [location]);
    
    useEffect(() => {
        const arrBreadcrumbs = [
            {
                name: 'overview',
                label: 'Application UI',
                path: '/'
            }
        ];
        
        if (component.label && component.name) {
            arrBreadcrumbs.push({
                name: component.name,
                label: component.label,
                path: `/components/${component.name}`
            });

            setBreadcrumbs(arrBreadcrumbs);
        }
    }, [component]);

    const renderSidebarMenu = (components) => {
        return components.map((component) => {
            if (get(component, 'type') === 'group') {
                return (
                    <Fragment key={component.name}>
                        <a key={component.name} className="mx-6 my-2 opacity-70 flex items-center text-gray-600 border-b border-gray-200">
                            <span className="py-2 text font-normal text-sm antialiased">{component.label}</span>
                        </a>
                        {
                            get(component, 'children').map((child) => {
                                return (
                                    <a key={child.name} href={`#/components/${child.name}`} className="px-2 mx-4 hover:text-gray-800 hover:bg-gray-100 flex items-center my-2 transition-colors duration-200 text-gray-600 rounded-lg">
                                        <span className="py-2 text font-normal text-sm antialiased">{child.label}</span>
                                    </a>
                                );
                            })
                        }
                    </ Fragment>
                );
            } else {
                return (
                    <a key={component.name} href={`#/components/${component.name}`} className="px-2 mx-4 hover:text-gray-800 hover:bg-gray-100 flex items-center my-2 transition-colors duration-200 text-gray-600 rounded-lg">
                        <span className="py-2 text font-normal text-sm antialiased">{component.label}</span>
                    </a>
                );
            }
        });
    };

    const getComponentActive = (components) => {
        const component = get(route, 'component');

        if (component && components.length) {
            const comp = components.reduce((arrComponents, component) => {
                if (get(component, 'type') === 'group') {
                    return [].concat(arrComponents, component.children);
                } else {
                    return [].concat(arrComponents, component);
                }
            }, []).find((item) => {
                return item.name === component;
            });

            if (comp && comp.component) {
                setComponent(comp);
            } else {
                setComponent({});
            }
        }
    };

    return (
        <div className="relative bg-white">
            <div className="ring-0 w-full bg-white mx-auto px-4 sm:px-6 border-b-2 border-gray-100 z-50">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1 divide-x divide-gray-200">
                        <a className="pr-2" href="#">
                            <img className="h-8 w-auto sm:h-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                        </a>
                        <div className="h-8 px-2 text-gray-400 text-sm">Beautiful UI components by the creators of Tailwind CSS</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-1">
                <div className="w-full lg:w-60 border-r border-gray-100">
                    <div className="relative bg-white">
                        <div className="flex flex-col sm:flex-row sm:justify-around">
                            <div className="w-72 h-screen">
                                <nav className="mt-6">
                                    {renderSidebarMenu(components)}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-10 container">
                    <Breadcrumb title={component.label} breadcrumbs={breadcrumbs} />

                    {component.component ? <component.component /> : <>Not found component</>}
                </div>
            </div>
        </div>
    );
};

export default Components;
