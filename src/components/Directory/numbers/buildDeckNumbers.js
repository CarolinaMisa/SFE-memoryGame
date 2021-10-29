import shuffle from 'lodash.shuffle';
import imagesNumbers from "../../utils/imagesNumbers";



const NUMBER_OF_CARDS = 20

//este modulo va a exportar una funcion que al ser invocada retorna
//una barja nueva

export default () => {
    //const fontAwesomeClasses = FontAwesomeClasses();

    const imageNumbers = imagesNumbers();
    let cards = [];

    //de los +100 iconos que tiene font-awesome, quiero solo 20 (la cantidad en NUMBER_OF_CARDS)

    console.log(imageNumbers);

    while(cards.length < NUMBER_OF_CARDS){
        //para generar aleatoriamente
        const index = Math.floor(Math.random() * imageNumbers.length);
        let iconStr = imageNumbers.splice(index, 1)[0];
        console.log( 'iconStr:' +iconStr);

        //vamos a tener un array dentro de validator, q luego solo vamos a extraer el elemento del array que nos haga falta con "" y el numero
        const card = {
            validator: iconStr.split('_')[1],
            //extraemos el elemtento q esa en el array en ese index
            icon: iconStr,
            wasGuessed: false
        };
        //la misma carta en posiciones distintas con el shuffle
        cards.push(card);

        //cards.push para suma, solo una vez

    }


    return shuffle(cards);
};