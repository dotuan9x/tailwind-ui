// Libraries
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

export interface IBreadcrumb {
    name: string;
    label: string;
    path?: string
}

interface IBreadcrumbProps {
    title: string;
    breadcrumbs?: IBreadcrumb[]
}

const Breadcrumb: React.FC<IBreadcrumbProps> = ({
    title = 'Breadcrumbs',
    breadcrumbs
}) => {
    return (
        <div className="flex flex-col mb-8">
            <h1 className="order-1 text-gray-900 text-3xl font-extrabold tracking-tight mt-2">{title}</h1>
            <nav className="flex items-center text-gray-500 text-sm font-medium space-x-2 whitespace-nowrap">
                {
                    breadcrumbs && breadcrumbs.map((breadcrumb, index) => {
                        return (
                            <Fragment key={index}>
                                <Link to={breadcrumb.path || '/'} className="hover:text-gray-900">
                                    {breadcrumb.label}
                                </Link>
                                {
                                    index < (breadcrumbs.length - 1) ? (
                                        <svg width="24" height="24" fill="none" className="flex-none text-gray-300">
                                            <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : null
                                }
                            </Fragment>
                        );
                    })
                }
            </nav>
        </div>
    );
};

export default Breadcrumb;
