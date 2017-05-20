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
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      users:{},
      status:'',
    }
    this._receiveNew = this._receiveNew.bind(this);
  }
  componentWillMount() {
    FB_DB.on('value', (snap) => {
      this._receiveNew(snap.val());
    });
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
            <Body firebase={firebase.database().ref()} messages={this.state.messages}/>
          </div>
        </div>
      </div>
    );
  }

  _receiveNew(snapshot) {
    let messages = [];
    for(let msg in snapshot.messages){
      messages.push(snapshot.messages[msg]);
    }
    messages.sort((ms1, ms2)=>(ms1.date - ms2.date));
    this.setState(Object.assign({}, snapshot, {messages}));
  }
}

export default App
