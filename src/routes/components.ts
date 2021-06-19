import React from 'react';

const Components = React.lazy(() => import('Modules/container/components'));

export default [
    {
        state: 'components',
        path: '/components',
        exact: true,
        component: Components,
        resources: [

        ]
    }
];
