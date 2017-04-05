import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderBar from './Components/HeaderBar'
const muiTheme = getMuiTheme();

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <h1>I trusted You!</h1>
      </div>
    )
  }
}

export default App
