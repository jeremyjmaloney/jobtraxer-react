import React, {Component} from 'react';

class JobList extends Component {
  render() {
    return (
      <div className="joblist">
        {this.props.jobs.map((job, index) => {
          return (
            <div className="job" key={index}>
              <h4>{job.title} | {job.company} | <a href={job.link} target="_blank">LINK</a> |
                <button onClick={() => {this.props.handleJob('new',job)}}>New</button>
                <button onClick={() => {this.props.handleJob('applied',job)}}>Applied</button>
                <button onClick={() => {this.props.handleJob('followUp',job)}}>Follow Up</button>
                <button onClick={() => {this.props.handleJob('interviewed',job)}}>Interviewed</button>
                <button className='delete' onClick={()=>{this.props.deleteJob(job, this.props.jobs, index)}}>X</button>
              </h4>
            </div>
          )
        })}
      </div>
    )
  }
}

export default JobList;
