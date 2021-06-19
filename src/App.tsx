// Libraries
import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

// Store Redux
import store from './store';

// Pages
import Components from 'Modules/components';

import 'tailwindcss/tailwind.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={Components} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
