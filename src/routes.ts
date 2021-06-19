import components from 'Src/routes/components';

export interface routeType {
    component: any,
    path: string,
    exact: boolean
}

let routes: Array<routeType> = [
    ...components
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
