import React, { Component } from 'react';
import Stopwatch from "./Stopwatch";
import Retry from "./Retry";
import '../css/Header.css';
import {Button} from "@material-ui/core";
import iGiveUp from '../Directory/NumbersPage';



export default class Header extends Component {

    render() {
        return (
                    <div className="container header">
                        <div className="row">
                            <div className="col-md-4">
                                <Button className="retry" onClick={this.props.resetGame}>
                                    <Retry />
                                </Button>
                            </div>
                            <div className="col-md-4">
                                <Stopwatch />
                            </div>
                            <div className="col-md-4">
                                <p className="attempt">Intentos: {this.props.numberOfAttempts}</p>
                            </div>
                        </div>

                    </div>
        );
    }
};