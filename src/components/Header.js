import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <button className='headerbtn' onClick={() => {this.props.handleView('new')}}><span>{this.props.newCount}</span> NEW </button>
        <button className='headerbtn' onClick={() => {this.props.handleView('applied')}}><span>{this.props.appliedCount}</span> APPLIED </button>
        <button className='headerbtn' onClick={() => {this.props.handleView('followUp')}}><span>{this.props.followUpCount}</span> FOLLOW UP </button>
        <button className='headerbtn' onClick={() => {this.props.handleView('interviewed')}}><span>{this.props.interviewedCount}</span> INTERVIEWED </button>
      </div>
    )
  }
}

export default Header;
