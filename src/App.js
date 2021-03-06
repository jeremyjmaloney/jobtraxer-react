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
      followUpCount:0,
      interviewedCount: 0
    }
  }

  fetchJobs = (view) =>{
    fetch( URL,
      {
        method: 'GET'
      })
      .then (data => data.json())
      .then(jData => {
        let newData = jData.filter((job)=>{
          return job.status === 'new'
        })
        let appliedData = jData.filter((job)=>{
          return job.status === 'applied'
        })
        let followUpData = jData.filter((job)=>{
          return job.status === 'followUp'
        })
        let interviewedData = jData.filter((job)=>{
          return job.status === 'interviewed'
        })
        if(view === 'new'){
          this.setState({
            jobs: newData
          })
        }
        else if(view === 'applied'){
          this.setState({
            jobs: appliedData
          })
        }
        else if(view === 'followUp'){
          this.setState({
            jobs: followUpData
          })
        }
        else if(view === 'interviewed'){
          this.setState({
            jobs: interviewedData
          })
        }
        this.setState({
          newCount: newData.length,
          appliedCount: appliedData.length,
          followUpCount: followUpData.length,
          interviewedCount: interviewedData.length
        })
      })
  }

  createJob = (job) => {
    fetch(URL, {
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
  job.status = view;
  fetch(URL + job.id,
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
    fetch(URL + job.id, {
      method: 'DELETE'
    }).then(data => {
      jobsArray.splice(index, 1)
      this.setState({
        jobs: jobsArray
      })
    }).catch(error => console.log(error))
    if(this.state.view === 'new'){
      this.setState({
        newCount: this.state.newCount - 1
      })
    } else if (this.state.view === 'applied') {
      this.setState({
        appliedCount: this.state.appliedCount - 1
      })
    } else if (this.state.view === 'followUp') {
      this.setState({
        followUpCount: this.state.followUpCount - 1
      })
    } else {
      this.setState({
        interviewedCount: this.state.interviewedCount - 1
      })
    }
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
          newCount={this.state.newCount}
          appliedCount={this.state.appliedCount}
          followUpCount={this.state.followUpCount}
          interviewedCount={this.state.interviewedCount}
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
