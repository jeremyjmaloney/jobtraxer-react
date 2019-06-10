import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"",
      company:"",
      link:"",
      status:"new"
    }
  }
  handleSubmit =(event) =>{
    console.log(event);
    event.preventDefault();
    this.props.createJob(this.state);
    this.clearForm();
  }

  clearForm = () =>{
    this.setState({
      title:"",
      company:"",
      link:""
    })
  }

  handleTitleInput= (event) =>{
    console.log(event.target.name);
    this.setState({
      title : event.target.value
    })
  }

  handleLinkInput =(event)=>{
    this.setState({
      link : event.target.value
    })
  }

  handleCompanyInput =(event) => {
    this.setState({
      company : event.target.value
    })
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Job Title"
          autoComplete="off"
          onChange ={this.handleTitleInput}
        />
        <input
          type="text"
          name="company"
          value={this.state.company}
          placeholder="Company Name"
          autoComplete="off"
          onChange ={this.handleCompanyInput}
        />
        <input
          type="text"
          name="link"
          value={this.state.link}
          placeholder="Link to the Job listing"
          autoComplete="off"
          onChange ={this.handleLinkInput}
        />
        <input type="submit" value="ADD"/>
      </form>
    )
  }
}

export default Form;
