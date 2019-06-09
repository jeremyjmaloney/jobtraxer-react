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

  fetchJobs = (view) =>{
    fetch('http://localhost:3000/jobs/' + view,
      {
        method: 'GET'

      })
      .then (data => data.json())
      .then(jData => {
          console.log(jData);
          let countViewName;
          if(view === 'new'){
            this.setState({
              newCount: this.state.newCount + 1
            })
          }
          else if(view === 'applied'){
            this.setState({
              appliedCount: this.state.appliedCount + 1
            })
          }
          else if(view === 'interviewed'){
            this.setState({
              interviewedCount: this.state.interviewedCount + 1
            })
          }

          this.setState({
            jobs: jData
          })
      })

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

  handleJob = (view, job) => {
  console.log('this is handleJob ', view , job );
  job.status = view;
  fetch('http://localhost:3000/jobs/' + job.id,
    {
      body:JSON.stringify(job),
      method: 'PUT',
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then (data => data.json())
    .then(jData => {
      console.log(jData);
      this.setState({
        jobs : []

      });

      this.fetchJobs(this.state.view);

    })
  }

  deleteJob = (id) => {
    console.log('this is deleteJob')
  }

  componentDidMount() {
     this.fetchJobs(this.state.view)
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
