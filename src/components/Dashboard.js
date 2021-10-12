import React, {Component} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './listItems';
import {withStyles} from "@material-ui/core/styles";
import Header from "./Header/Header";
import Tablero from "./Tablero";
import buildDeck from "./utils/buildDeck";

const drawerWidth = 240;

const getInitialState = () => {
    const deck = buildDeck();
    return{
        deck,
        selectedCouple: [],
        isComparing: false,
        numberOfAttempts: 0
    };
}
const useStyle = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },

});

class Dashboard extends Component{
    //para indicarle que este es tu estado inicial
    constructor(props) {
        super(props);
        this.state = getInitialState();
    }
    render() {
        return(
            <div className="App">
                <Header
                numberOfAttempts={this.state.numberOfAttempts}
                resetGame={() => this.resetGame()}
                />
                <Tablero
                    //creamos propiedad. Hacemos referencia al estado inicial de baraja que creamos en getInitialState
                deck={this.state.deck}
                //carta, estas siendo seleccionada, date vuelta
                selectedCouple={this.state.selectedCouple}
                selectCard={(card) => this.selectCard(card)}
                />
            </div>
        );
    }

    selectCard(card){
        //cuando el usuario no deberia seleccionar?
        //cuando esta comparando
        //si el usuario ya eligio esta carta( >-1 es decir si la carta ya esta en el array de parejas seleccionadas
        //si la carta ya fue adivinada
        if(
            this.state.isComparing ||
            this.state.selectedCouple.indexOf(card) > -1 ||
            card.wasGuessed
        ) {
            //si cualquiera de estas condiciones se hace cierta, retornamos
            return;
        }
        //creamos un nuevo array con las cartas en el estado y le agregamos la nueva carta
        const selectedCouple = [...this.state.selectedCouple, card];
        this.setState({
            //actualiza el estado de la aplicacion con la pareja que esta siendo seleccionada
            selectedCouple
        });

        //si el usuario ha corrido 2 cartas
        if(selectedCouple.length === 2) {
            this.compareCouple(selectedCouple);
        }
    }

    compareCouple(selectedCouple){
        this.setState({isComparing:true});
        //como seteamos el estado a isComparing, el usuario no puede seleccionar mas cartas (ver dento de selectCard, cuando se retornaba)

        //establecemos un delay al voltear una carta
        setTimeout(() => {
            const [firstCard, secondCard] = selectedCouple;
            let deck = this.state.deck;

            //si entramos en este if, significa que el usuario logró adivinar esta pareja
            if(firstCard.icon === secondCard.icon){

                //debemos marcar el flag 'wasGuessed'
                //le hacemos cambios a la baraja
                deck = deck.map((card) => {

                    //si la carta q tengo en la barja, es distinta a firstCard, no es la carta q el usuario selecciono
                    if(card.icon !== firstCard.icon){

                        //retorno la carta
                        return card;
                    }
                    //else
                    return{...card, wasGuessed:true};
                });
            }
            this.verifyIfWinner(deck);
            //actualizamos calculos.
            this.setState({
                //selectedCouple vuelve a estar en blanco. Se haya o no adivinado
                selectedCouple: [],
                //si el usuario no adivino, no ocurren modificaciones en la baraja. Entonces enviamos la misma baraja q recibimos
                deck,
                //ya comparamos, vuelve a falso
                isComparing: false,
                //cuando hacemos la comparacion, vemos el numero de intentos
                numberOfAttempts: this.state.numberOfAttempts + 1
            })
        }, 1000)
    }

    verifyIfWinner(deck){

        if(
            //filtra, si el filter es > 0, significa q todavia hay cartas q no fueron adivinadas
            deck.filter((card) => !card.wasGuessed).length === 0
        ) {
            alert(`Ganaste en ${this.state.numberOfAttempts} intentos!`);

        }

    }

    resetGame() {
        this.setState(
            getInitialState()
        );
    }
}

export default Dashboard;