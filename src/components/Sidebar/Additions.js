import React from 'react';
import { ReactComponent as Add} from "../../img/calculator.svg";


const AddSize = {
    width: 37,
};

function Additions() {
    return (
        <div style={AddSize}>
            <Add />
        </div>
    );
}

export default Additions;
