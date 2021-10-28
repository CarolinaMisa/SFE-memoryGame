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
import AdditionsPage from "./components/Directory/AdditionsPage";
import ColorsPage from "./components/Directory/colors/ColorsPage";
import WordsPage from "./components/Directory/WordsPage";
import Footer from "./components/Footer";




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
                <Route path="/words">
                    <WordsPage/>
                </Route>
                <Route path="/additions">
                    <AdditionsPage/>
                </Route>
            </Switch>
            <Footer/>
        </Router>

    )
}

export default App;

