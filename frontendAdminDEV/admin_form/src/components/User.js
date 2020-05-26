import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as myModule from '../lib/';
 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const globalData = {}

export default class User extends Component {
constructor () {
    super(...arguments); 
    globalData.authComponent = this.props.data.main.props.authComponent;
    globalData.props = this.props;
}
render() {
    return <div>
      <DropMenu/>
    </div>
  }
}



function DropMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    globalData.authComponent.setState({clear : true});
    sessionStorage.clear();
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        { sessionStorage.getItem('log') }
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}



User.propTypes = {
  name: PropTypes.string.isRequired
}