import React, {Component} from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';
import JobList from './components/JobList.js';
import './App.css';
const URL = 'https://jobtraxer-rails.herokuapp.com/jobs/';

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
    fetch( URL + view,
      {
        method: 'GET'

      })
      .then (data => data.json())
      .then(jData => {
          console.log(jData);

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
      this.setState({
        jobs : []

      });

      this.fetchJobs(this.state.view);

    })
  }

  deleteJob = (job, jobsArray, index) => {
    fetch(`http://localhost:3000/jobs/${job.id}`, {
      method: 'DELETE'
    }).then(data => {
      jobsArray.splice(index, 1)
      this.setState({
        jobs: jobsArray
      })
    }).catch(error => console.log(error))
  }

  handleView = (goToView) => {
    this.setState({
      view : goToView,
      jobs : []
    });

    this.fetchJobs(goToView)
  }

  componentDidMount() {
     this.fetchJobs(this.state.view)
  }

  render() {
    return (
      <div className='container'>
        <h1>JobTraxer</h1>
        <Form createJob = {this.createJob}/>
        <Header
          handleView = {this.handleView}
          view = {this.state.view}
        />
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
