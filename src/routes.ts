import React from 'react';

const Components = React.lazy(() => import('Modules/container/components'));
const Playground = React.lazy(() => import('Modules/container/playground'));

export interface routeType {
    state: string;
    component: any;
    path: string;
    exact: boolean;
    resources?: routeType[]
}

let routes: Array<routeType> = [
    {
        state: 'components',
        path: '/components',
        exact: true,
        component: Components,
        resources: [
            {
                state: 'component',
                path: '/components/:component',
                exact: true,
                component: Components
            }
        ]
    },
    {
        state: 'playground',
        path: '/playground',
        exact: true,
        component: Playground
    }
];

// Convert nested routes to simple routes
function convertNestedRoutes(routes: Array<any>): any {
    try {
        if (routes.length) {
            routes.forEach(function (route) {
                if (route.resources && route.resources.length) {
                    routes = routes.concat(convertNestedRoutes(route.resources));
                }
            });
        }

        return routes;
    } catch (e) {
        // Error
    }
}

routes = convertNestedRoutes(routes);

export default routes;
