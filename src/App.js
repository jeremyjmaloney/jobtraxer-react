import React, {Component} from 'react';
import Form from './components/Form.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      view : "new",
      jobs : [],
      newCount :0,
      appliedCount:0,
      interviewedCount:0

    }
  }

  createJob = (jobDetails) =>
  {
    console.log("this is a create job ");
  }

  render() {
    return (
        <div>
        <h1>JobTraxer</h1>
        <Form createJob = {this.createJob}/>
        </div>
    )
  }
}

export default App;
