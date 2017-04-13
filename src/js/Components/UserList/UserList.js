import React from 'react'
import {List, ListItem} from 'material-ui/List';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        <ListItem
          primaryText="Zach Okuhara"
        />
        <ListItem
          primaryText="Jeff Penkar"
        />
        <ListItem
          primaryText="Dan Romanausky"
        />
      </List>
    )
  }
}

UserList.defaultProps = {}

export default UserList;
