import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NumberCube from './Sidebar/Numbers';
import Words from './Sidebar/Words';
import Colors from './Sidebar/Colors';
import Additions from './Sidebar/Additions';
import "./css/styles.css";
import Link from "@material-ui/core/Link";

export const mainListItems = (
    <div>
        <Link href="numbers" className="activeLink">
            <ListItem button>
                <ListItemIcon>
                    <NumberCube />
                    </ListItemIcon>
                <ListItemText primary="Números" />
            </ListItem>
        </Link>
        <Link href="words" className="activeLink">
            <ListItem button>
                <ListItemIcon>
                    <Words />
                </ListItemIcon>
                <ListItemText primary="Primeras palabras"/>
            </ListItem>
        </Link>
        <Link href="colors" className="activeLink">
            <ListItem button>
                <ListItemIcon>
                    <Colors />
                </ListItemIcon>
                <ListItemText primary="Colores" />
            </ListItem>
        </Link>
        <Link href="additions" className="activeLink">
            <ListItem button>
                <ListItemIcon>
                    <Additions />
                </ListItemIcon>
                <ListItemText primary="Sumas" />
            </ListItem>
        </Link>
    </div>
);
