import React, { Component } from 'react';
import Stopwatch from "./Stopwatch";
import {Button} from "@material-ui/core";
import Retry from "./Retry";
import '../css/Header.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <Button className="retry">
                        <Retry />
                    </Button>
                </div>

                <div className="App">
                    <div className="App-title"></div>
                    <div className="Timers">
                        <Stopwatch />
                    </div>
                </div>
            </header>

        );
    }
    };