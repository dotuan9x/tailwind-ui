/**
 * return indentation for a level
 * @param level
 */
const getIndent = (level) => {
    let result = '',
        i = level * 4;

    if (level < 0) {
        throw 'Level is below 0';
    }

    while (i--) {
        result += ' ';
    }

    return result;
};

/**
 * Format and beautify html output
 * @param html the html to format
 */
export const formatHtml = (html: string) : string => {
    html = html.trim();

    const tokens = html.split(/</);
    let result = '',
        indentLevel = 0;

    for (let i = 0, l = tokens.length; i < l; i++) {
        const parts = tokens[i].split(/>/);

        if (parts.length === 2) {
            if (tokens[i][0] === '/') {
                indentLevel--;
            }
            result += getIndent(indentLevel);
            if (tokens[i][0] !== '/') {
                indentLevel++;
            }

            if (i > 0) {
                result += '<';
            }

            result += parts[0].trim() + '>\n';
            if (parts[1].trim() !== '') {
                result += getIndent(indentLevel) + parts[1].trim().replace(/\s+/g, ' ') + '\n';
            }

            if (parts[0].match(/^(img|hr|br)/)) {
                indentLevel--;
            }
        } else {
            result += getIndent(indentLevel) + parts[0] + '\n';
        }
    }

    return result;
};

/* export const getMatchFromPath = (routes, path: string, options: Record<string, any> = {}) => {
    // path: /121004/components/button
    const result = null;

    import('react-router-dom').then((router) => {
        router.matchPath(path, {
            /!* let appRoutes = [].concat(routes);

                appRoutes.forEach(function(route) {
                    const match = matchPath(path, {
                        path: route.path,
                        exact: true,
                        strict: false
                    });

                    if (match && match.params && match.path && route.state) {
                        result = {
                            ...match,
                            showBreadcrumb: route.showBreadcrumb,
                            showLeftMenu: route.showLeftMenu,
                            breadcrumbShowOnlyTitle: route.breadcrumbShowOnlyTitle,
                            state: route.state,
                            menu: route.menu || {},
                            appCode: route.appCode || appConfig.ANTALYSER_PERMISSION_APP_CODE,
                            inIframe: route.inIframe
                        };

                        return result;
                    }
                }); *!/
        });
    });

    return result;
};

export const getLinkFromState = (routes, state, params) => {
    /!* let url = '';

    if (state && params) {
        routes.map((route) => {
            if (route.state && route.state === state) {
                let path = route.path;

                path = path && generatePath(path, params);

                url = path;
            }
        });
    }

    return url; *!/

}; */
