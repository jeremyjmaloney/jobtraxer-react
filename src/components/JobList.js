import React, {Component} from 'react';

class JobList extends Component {
  render() {
    return (
      <div className="joblist">
        <h3>Job Title | Company | Job Listing Link</h3>
        {this.props.jobs.map((job, index) => {
          return (
            <div className="job" key={index}>
              <h4>{job.title} | {job.company} | {job.link} ||
                <button onClick={this.props.handleJob('new')}>New</button>
                <button onClick={this.props.handleJob('applied')}>Applied</button>
                <button onClick={this.props.handleJob('interviewed')}>Interviewed</button>
              </h4>
            </div>
          )
        })}
      </div>
    )
  }
}

export default JobList;
