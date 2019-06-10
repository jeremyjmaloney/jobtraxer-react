import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <button className='headerbtn' onClick={() => {this.props.handleView('new')}}>{this.props.newCount} NEW </button>
        <button className='headerbtn' onClick={() => {this.props.handleView('applied')}}>{this.props.appliedCount} APPLIED </button>
        <button className='headerbtn' onClick={() => {this.props.handleView('interviewed')}}>{this.props.interviewedCount} INTERVIEWED </button>
      </div>
    )
  }
}

export default Header;
