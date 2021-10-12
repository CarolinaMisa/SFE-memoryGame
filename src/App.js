import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Dashboard from './components/Dashboard';
import Options from './components/Option';
import NumbersPage from "./components/NumbersPage";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Options/>
                </Route>

                <Route path="/" exact>
                    <Dashboard/>
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

