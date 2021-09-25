import React from 'react';
import Retry from "./Header/Retry";
import './css/Dashboard.css'
import {Button} from "@material-ui/core";


export const headerListItems = (
    <div>
        <Button className="reiniciar">
                <Retry />
        </Button>
    </div>
);
