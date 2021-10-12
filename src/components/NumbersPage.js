import React, {Component} from 'react';
import Dashboard from "./Dashboard";
import {Router} from "@material-ui/icons";


export default class NumbersPage extends Component {
    render() {
        return(
            <Router>
                <Dashboard/>
            </Router>
        )

    }


};