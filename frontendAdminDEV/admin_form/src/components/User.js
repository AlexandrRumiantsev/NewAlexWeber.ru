import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class User extends Component {
  render() {
    const { name } = this.props
    return <div>
      <p>Привет, {name}!</p>
    </div>
  }
}
console.log(PropTypes.string);
User.propTypes = {
  name: PropTypes.string.isRequired
}