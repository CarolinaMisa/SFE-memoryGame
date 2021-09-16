import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Dashboard from './components/Dashboard';


function App() {
    return (
        <Router>
            <Dashboard/>
            <Switch>
                <Route path="/" exact></Route>
                <Route path="/numbers">
                </Route>
                <Route path="/words">
                </Route>
                <Route path="/colors">
                </Route>
                <Route path="/additions">
                </Route>
            </Switch>
        </Router>
    )
}

export default App;

