import React, { Component } from 'react';
import './App.css';
import 'ag-grid/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid/dist/styles/ag-grid.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GridExample from './table'
import SimpleTabs from './tabs';
import plot from './plot'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#5e7380',
            main: '#334854',
            dark: '#0a212b',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#ffdc65',
            main: '#f9aa33',
            dark: '#c17b00',
            contrastText: '#000000',
        },
        background:'#000000'
    },
});

class App extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <div
                id="myGrid"
                style={{
                    boxSizing: "border-box",
                    height: "100%",
                    width: "100%"
                }}
                className="ag-theme-balham-dark"
            >
                <SimpleTabs></SimpleTabs>

            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;