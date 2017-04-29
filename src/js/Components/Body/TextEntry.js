import React, {Component, PropTypes} from 'react'
import {TextField} from 'material-ui'

class TextEntry extends Component {
  constructor(props){
    super(props);
    this._typing = this._typing.bind(this);
  }

  render() {
    return (
      <div className='text-entry-area'>
        <TextField
          hintText='Type something here jerk...'
          floatingLabelText='Entry field...'
          multiLine={true}
          fullWidth={true}
          rows={2}
          onChange={this._typing}
          />
      </div>
    )
  }

  _typing(event, val) {
    if(val.indexOf('\n') + 1) {
      console.log(27)
      this.props.addLine(val);
    } else {
      console.log(30)
    }
    // console.log(event.nativeEvent, val);
  }
}

TextEntry.defaultProps = {
  addLine: {},
}

export default TextEntry
