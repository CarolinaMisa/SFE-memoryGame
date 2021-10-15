import shuffle from 'lodash.shuffle';
import imagesColors from "../../utils/imagesColors";



const NUMBER_OF_CARDS = 20

//este modulo va a exportar una funcion que al ser invocada retorna
//una barja nueva

export default () => {
    //const fontAwesomeClasses = FontAwesomeClasses();

    const imageColors = imagesColors();
    let cards = [];

    //de los +100 iconos que tiene font-awesome, quiero solo 20 (la cantidad en NUMBER_OF_CARDS)

    while(cards.length < NUMBER_OF_CARDS){
        //para generar aleatoriamente
        const index = Math.floor(Math.random() * imageColors.length);
        const card = {
            //extraemos el elemento q esta en el array en ese index
            icon: imageColors.splice(index, 1)[0],
            wasGuessed: false
        };
        //la misma carta en posiciones distintas con el shuffle
        cards.push(card);
        cards.push({...card});

    }

    return shuffle(cards);
};