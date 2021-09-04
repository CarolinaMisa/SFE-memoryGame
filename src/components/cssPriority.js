import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

export default function GlobalCssPriority() {
    return (
        <StyledEngineProvider injectFirst>
                .MuiToolbar-root{
                background-color: #57CC99;
            }

                .MuiDrawer-paper{
                background-color: #D7F7DB;
            }
                .MuiTypography-body1{
                font-weight:bold;
                font-family: 'Varela Round', sans-serif;
            }

                .MuiListItem-gutters {
                margin-top: 25px;
            }
        </StyledEngineProvider>
    );
}