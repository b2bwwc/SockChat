import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HeaderBar from './Components/HeaderBar';
import UserList from './Components/UserList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('../Style/base.scss');

const muiTheme = getMuiTheme();

import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBGIZLuITeL-Gpvc1umC4YCt3ZIJltMvk8",
  authDomain: "sockchat-8ade0.firebaseapp.com",
  databaseURL: "https://sockchat-8ade0.firebaseio.com",
  projectId: "sockchat-8ade0",
  storageBucket: "sockchat-8ade0.appspot.com",
  messagingSenderId: "919803726345"
};
firebase.initializeApp(config);

const FB_DB = firebase.database().ref();

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
        <div style={{width:"20vw"}}>
          <UserList />
        </div>
      </div>
    )
  }
}

export default App
