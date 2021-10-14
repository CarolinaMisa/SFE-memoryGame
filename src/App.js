import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Dashboard from './components/Dashboard';
import Options from './components/Option';
import NumbersPage from "./components/Directory/NumbersPage";
import AdditionsPage from "./components/Directory/AdditionsPage";
import ColorsPage from "./components/Directory/ColorsPage";
import WordsPage from "./components/Directory/WordsPage";



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
                    <WordsPage/>
                </Route>
                <Route path="/colors">
                    <ColorsPage/>
                </Route>
                <Route path="/additions">
                    <AdditionsPage/>
                </Route>
            </Switch>
        </Router>

    )
}

export default App;

