import React, {Component, PropTypes} from 'react'

import TextEntry from './TextEntry';
import {sendLine, sendStatus} from '../../API'

class Body extends Component {
  static propTypes = {
    firebase: PropTypes.object,
  }

  constructor(props){
    super(props);
    this.state = {
      status: true,
      lines: []
    }
    window.sendLine = sendLine
    window.sendStatus = sendStatus
    window.firebase = this.props.firebase

    this._addLines = this._addLines.bind(this);
    this._listLines = this._listLines.bind(this);
  }

  render() {
    return (
      <div className='body-component'>
        { this._listLines() }
        <TextEntry addLine={this._addLines}/>
      </div>
    )
  }

  _listLines() {
    let {messages} = this.props, arr = [];
    for(var i = 0; i < messages.length; i++){
      let msg = messages[i];
      arr.push(<span key={i}>{msg.message}</span>);
    }
    return arr;
  }

  _addLines(newLine) {
    let {firebase, user} = this.props;
    sendLine({user, message, firebase})
  }
}

Body.defaultProps = {
  firebase: {},
  messages:[],
  user: "JSP"
}

export default Body
