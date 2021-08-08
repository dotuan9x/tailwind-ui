import Loadable from 'react-loadable';

export const components = [
    {
        name: 'overview',
        label: 'Overview',
        type: 'component',
        component: Loadable({
            loader: () => import('Modules/container/components/overview'),
            loading: () => {return null}
        })
    },
    {
        name: 'general',
        label: 'General',
        type: 'group',
        children: [
            {
                name: 'button',
                label: 'Button',
                type: 'component',
                component: Loadable({
                    loader: () => import('Components/button'),
                    loading: () => {return null}
                })
            },
            {
                name: 'input',
                label: 'Input',
                type: 'component',
                component: Loadable({
                    loader: () => import('Components/input'),
                    loading: () => {return null}
                })
            },
            {
                name: 'select',
                label: 'Select',
                type: 'component',
                component: Loadable({
                    loader: () => import('Components/select'),
                    loading: () => {return null}
                })
            },
            {
                name: 'icon',
                label: 'Icon',
                type: 'component',
                component: Loadable({
                    loader: () => import('Components/icon'),
                    loading: () => {return null}
                })
            },
            {
                name: 'typography',
                label: 'Typography',
                type: 'component'
            }
        ]
    }
];
