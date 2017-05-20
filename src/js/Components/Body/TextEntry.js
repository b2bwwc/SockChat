import React, {Component, PropTypes} from 'react'
import {TextField} from 'material-ui'

class TextEntry extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:'',
    }
    this._typing = this._typing.bind(this);
  }

  render() {
    return (
      <div className='text-entry-area'>
        <button className='text-entry-button plus'>+</button>
        <input
          value={this.state.text}
          placeholder='Say something...'
          onChange={this._typing}
          className='primary-text-entry-area'/>
        <button className='text-entry-button send'>Send</button>
      </div>
    )
  }

  _typing(event) {
    let text = event.target.value;
    if(text.indexOf('\n') + 1) {
      text = text.replace('\n','');
      this.props.addLine(text);
      this.setState({text:''});
    } else {
      this.setState({text});
    }
  }
}

TextEntry.defaultProps = {
  addLine: {},
}

export default TextEntry
