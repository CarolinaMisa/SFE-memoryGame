import React, { Component } from 'react';
import Card from "./Card";
import './css/Tablero.css'


export default class Tablero extends Component{
    render(){
        return(
            <div className="tablero">
                {
                    this.props.deck
                        .map((card, index) =>{
                            //calcula si la carta que viene del map esta en el array pareja seleccionada
                            //si esta dentro del array, entonces esta siendo comparada
                          const isBeingCompared = this.props.selectedCouple.indexOf(card) > -1;
                            return <Card
                              key={index}
                              icon={card.icon}
                              isBeingCompared={isBeingCompared}
                              selectCard={() => this.props.selectCard(card)}
                              wasGuessed={card.wasGuessed}
                          />
                        })
                }
            </div>
        );
    }
};