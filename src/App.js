import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Dashboard from './components/Dashboard';
import Options from './components/Option';
import NumbersPage from "./components/Directory/numbers/NumbersPage";
import ColorsPage from "./components/Directory/colors/ColorsPage";

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
                <Route path="/colors">
                    <ColorsPage/>
                </Route>
            </Switch>
        </Router>

    )
}

export default App;

