import React, { Component } from 'react';
import Stopwatch from "./Stopwatch";
import Retry from "./Retry";
import '../css/Header.css'
import {Button} from "@material-ui/core";



export default class Header extends Component {

    render() {
        return (
            <header>

                <div className="Timers">
                    <div className="retry">
                     <Button onClick={this.props.resetGame}>
                        <Retry />
                     </Button>
                    </div>

                <div className="App">
                    <div className="App-title"></div>
                        <Stopwatch />
                </div>

                <div className="attempt">
                    Intentos: {this.props.numberOfAttemps}
                </div>
                </div>
            </header>

        );
    }

    };