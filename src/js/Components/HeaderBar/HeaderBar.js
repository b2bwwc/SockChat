import React from 'react'
import {AppBar} from 'material-ui'

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this._tap = this._tap.bind(this);
  }
  _tap() {
    console.log('stop touching me!');
  }

  render() {
    return (
      <AppBar
        title={<span>Title</span>}
        onTitleTouchTap={this._tap}
        iconClassNameRight="muidocs-icon-navigation-expand-more">
      </AppBar>
    )
  }
}

HeaderBar.defaultProps = {}

export default HeaderBar
