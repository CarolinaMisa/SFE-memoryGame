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
import Header from "./components/Header/Header";


function App() {
    return (
        <Router>
            <Dashboard/>
            <Switch>
                <Route path="/" exact>
                    <Options/>
                </Route>

                <Route path="/numbers">
                    <NumbersPage/>
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

