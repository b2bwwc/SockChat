import React, {Component, PropTypes} from 'react'
import {sendLine, sendStatus} from '../../API'

class Body extends Component {
  static propTypes = {

  }

  line(){
    sendLine();
  }
  status(){
    sendStatus();
  }

  render() {
    return (
      <div>
        <span onClick={::this.line}>line</span>
        Body
        <span onClick={::this.status}>status</span>
      </div>
    )
  }
}

Body.defaultProps = {

}

export default Body
