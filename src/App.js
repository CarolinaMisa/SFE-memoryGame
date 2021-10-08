import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Dashboard from './components/Dashboard';
import Header from "./components/Header/Header";


function App() {
    return (
        <Router>
            <Dashboard/>
            <Switch>
                <Route path="/" exact>
                    <Header />
                </Route>

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

