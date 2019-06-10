import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h2>This is the header</h2>
        <ul>
          <li onClick={() => {this.props.handleView('new')}}> NEW </li>
          <li onClick={() => {this.props.handleView('applied')}}> APPLIED </li>
          <li onClick={() => {this.props.handleView('interviewed')}}> INTERVIEWED </li>
        </ul>
      </div>
    )
  }
}

export default Header;
