import {Component} from "react";
import {getInitialState} from "./Dashboard";

class Construction extends Component {
    constructor(props) {
        super(props);
        this.state = getInitialState();
    }

    selectCard(card) {
        if (
            this.state.isComparing ||
            this.state.selectedCouple.indexOf(card) > -1 ||
            card.wasGuessed
        ) {
            return;
        }

        const selectedCouple = [...this.state.selectedCouple, card];
        this.setState({
            selectedCouple
        });

        if (selectedCouple.length === 2) {
            this.compareCouple(selectedCouple);
        }
    }
    compareCouple(selectedCouple){
        this.setState({isComparing: true});

        setTimeout(() => {
            const [firstCard, secondCard] = selectedCouple;
            let deck = this.state.deck;

            if (firstCard.icon === secondCard.icon){
                deck = deck.map((card) => {
                    if (card.icon !== firstCard.icon) {
                        return card;
                    }
                    return {...card, wasGuessed: true}
                });
            }
            this.checkIfWinner(deck);
            this.setState({
                selectedCouple: [],
                deck,
                isComparing: false,
                numberOfAttempts: this.state.numberOfAttemps + 1
            })
        }, 1000)
    }
    checkIfWinner(deck) {
        if(
            deck.filter((card) => !card.wasGuessed).length === 0
        ) {
            alert(`Ganaste en ${this.state.numberOfAttemps} intentos!`);
        }
    }

    resetGame() {
        this.setState(
            getInitialState()
        );

    }


}
export default Construction;