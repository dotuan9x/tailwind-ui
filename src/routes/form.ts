import React from 'react';

const Form = React.lazy(() => import('Modules/Components'));

export default [
    {
        state: 'form',
        path: '/components',
        exact: true,
        component: Form,
        resources: [

        ]
    }
];
