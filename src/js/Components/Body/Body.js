import React, {Component, PropTypes} from 'react'
import {sendLine, sendStatus} from '../../API'

class Body extends Component {
  static propTypes = {
    firebase: PropTypes.object,
  }

  line(){
    let user = 'JSP', message = 'message', {firebase} = this.props;
    sendLine({firebase, user, message});
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
  firebase: {},
}

export default Body
