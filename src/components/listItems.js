import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NumberCube from './Sidebar/Numbers';
import Words from './Sidebar/Words';
import Colors from './Sidebar/Colors';
import Additions from './Sidebar/Additions';
import "./css/styles.css";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <NumberCube />
                </ListItemIcon>
            <ListItemText primary="Números" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Words />
            </ListItemIcon>
            <ListItemText primary="Primeras palabras"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Colors />
            </ListItemIcon>
            <ListItemText primary="Colores" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Additions />
            </ListItemIcon>
            <ListItemText primary="Sumas" />
        </ListItem>
    </div>
);
