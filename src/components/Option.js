import React, {Component} from 'react';
import './css/styles.css';
import numbers from '../img/numbers.jpg';
import paint from '../img/paint.png';
import Footer from "./Footer";



export default class Option extends Component {

    render() {
        return (
            <div>
                <div className="title">
                    <p id="welcome">Bienvenido!</p>
                    <p id="subtitle">Selecciona un tema para comenzar</p>

                </div>
                <div className="master-container row">
                    <div className="container" id="numbers">
                        <img src={numbers} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text"><a href="numbers">NÚMEROS</a> </div>
                        </div>
                    </div>

                    <div className="container" id="colors">
                        <img src={paint} alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text"><a href="colors">COLORES</a></div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

};