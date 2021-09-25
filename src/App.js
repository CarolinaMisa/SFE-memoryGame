import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Dashboard from './components/Dashboard';


function App() {
    return (
        <div className="background">
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
        </div>
    )
}

export default App;

