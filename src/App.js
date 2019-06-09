import React, {Component} from 'react';
import Form from './components/Form.js'
import JobList from './components/JobList.js'

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
      console.log(jData);
      if(this.state.view === 'new'){
        this.setState({
          jobs: [...this.state.jobs, jData],
          newCount: this.state.newCount + 1
        })
      }
    })
  }
  handleJob = (view) => {
    console.log('this is handleJob')
  }
  deleteJob = (id) => {
    console.log('this is deleteJob')
  }
  render() {
    return (
      <div>
        <h1>JobTraxer</h1>
        <Form createJob = {this.createJob}/>
        <JobList
          view={this.state.view}
          jobs={this.state.jobs}
          handleJob={this.handleJob}
          deleteJob={this.deleteJob}
        />
      </div>
    )
  }
}

export default App;
