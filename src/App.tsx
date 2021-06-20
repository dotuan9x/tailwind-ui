// Libraries
import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

// Store Redux
import store from './store';

import routes from 'Src/routes';
import 'tailwindcss/tailwind.css';

const App = () => {
    return (
        <Provider store={store}>
            <Suspense fallback={<div>Loading</div>}>
                <Router>
                    <Switch>
                        {
                            routes.map((route, idx) => {
                                return route.component ? (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        render={props => (<route.component {...props} />)}
                                    />) : null;
                            })
                        }
                        <Redirect to={'/components/overview'} />
                    </Switch>
                </Router>
            </Suspense>
        </Provider>
    );
};

export default App;
