import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderBar from './Components/HeaderBar'
import UserList from './Components/UserList'
const muiTheme = getMuiTheme();

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div style={{width:"20vw"}}>
          <UserList />
        </div>
      </div>
    )
  }
}

export default App
