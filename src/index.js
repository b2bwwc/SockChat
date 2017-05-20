import React, {Component} from 'react'
import {render} from 'react-dom'

import App from './js/App'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme = getMuiTheme();

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
)
