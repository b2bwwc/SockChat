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
        <TextField
          ref={(ta)=>(this._ta = ta)}
          hintText='Type something here jerk...'
          floatingLabelText='Entry field...'
          multiLine={true}
          fullWidth={true}
          rows={2}
          value={this.state.text}
          onChange={this._typing}
          />
      </div>
    )
  }

  _typing(event, text) {
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
