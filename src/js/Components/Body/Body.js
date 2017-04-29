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
    let {lines} = this.state, arr = [];
    for(var i = 0; i < lines.length; i++){
      arr.push(<span key={i}>{lines[i]}</span>)
    }
    return arr;
  }

  _addLines(newLine) {
    let {lines} = this.state;
    lines.push(newLine);
    this.setState({lines})
  }
}

Body.defaultProps = {
  firebase: {},
}

export default Body
