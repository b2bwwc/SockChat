import React from 'react'
import {AppBar} from 'material-ui'

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this._tap = this._tap.bind(this);
  }

  _tap(){
    console.log('stuff');
  }

  render() {
    return (
      <AppBar
        onClick={this._tap}
        title={<span>Title</span>}
        iconClassNameRight="muidocs-icon-navigation-expand-more">
      </AppBar>
    )
  }
}

HeaderBar.defaultProps = {}

export default HeaderBar
