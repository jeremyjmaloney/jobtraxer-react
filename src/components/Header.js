import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <button className='headerbtn' onClick={() => {this.props.handleView('new')}}> NEW </button>
        <button className='headerbtn' onClick={() => {this.props.handleView('applied')}}> APPLIED </button>
        <button className='headerbtn' onClick={() => {this.props.handleView('interviewed')}}> INTERVIEWED </button>
      </div>
    )
  }
}

export default Header;
