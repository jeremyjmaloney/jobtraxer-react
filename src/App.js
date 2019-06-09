import React, {Component} from 'react';
import Form from './components/Form.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      view: "new",
      jobs: [],
      newCount: 0,
      appliedCount: 0,
      interviewedCount: 0
    }
  }

  createJob = (job) => {
    fetch('http://localhost:3000/jobs', {
      body:JSON.stringify(job),
      method:'POST',
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdJob => createdJob.json())
    .then(jData => {
      if(this.state.view === 'new'){
        this.setState({
          jobs: [...this.state.jobs, jData],
          newCount: this.state.newCount + 1
        })
      }
    })
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
