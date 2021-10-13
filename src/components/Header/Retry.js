import React from 'react';
import retry from "../../img/retry.png";
import '../css/Header.css';

function Retry() {
    return (
        <div className="Retry">
            <button className="retry">
                <img src={retry} width="50px" height="50px"/>
            </button>
        </div>
    );
}

export default Retry;