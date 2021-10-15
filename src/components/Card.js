import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import './css/Card.css'


export default class Card extends Component {
    render() {
        return (
            <div className="card" onClick={this.props.selectCard}>
                <ReactCardFlip
                    //cuando se queda volteada?
                isFlipped={this.props.isBeingCompared || this.props.wasGuessed}
                disabled={true}
                >
                    <div className="cover"></div>
                    <div className="content">

                            <img src={this.props.icon}/>
                    </div>
                </ReactCardFlip>

            </div>
        )
    }
};