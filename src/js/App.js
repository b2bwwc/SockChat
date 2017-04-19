import React from 'react'

import HeaderBar from './Components/HeaderBar';
import UserList from './Components/UserList';
import Body from './Components/Body'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme = getMuiTheme();

require('../Style/base.scss');

import firebase from 'firebase';
import {configs} from './Constants/api'
firebase.initializeApp(configs);

const FB_DB = firebase.database().ref();

const Style = {
  content: {
    container: {
      display:'inline-flex',
      width:'100vw',
      height:'calc(100vh - 64px)',
    },
    menubar: {
      display:'inline-flex',
      width:'20vw',
    },
    textarea: {
      display:'inline-flex',
      width:'80vw',
      backgroundColor:'white',
    }
  }
}

class App extends React.Component {
  componentWillMount() {
    FB_DB.on('value', (snap) => {
      console.log(snap.val());
    })
  }

  render() {
    return (
      <div>
        <HeaderBar />
        <div style={Style.content.container}>
          <div style={Style.content.menubar}>
            <UserList />
          </div>
          <div style={Style.content.textarea}>
            <Body firebase={firebase.database().ref()} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
