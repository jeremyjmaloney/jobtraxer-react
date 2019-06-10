import React, {Component} from 'react';

class JobList extends Component {
  render() {
    return (
      <div className="joblist">
        {this.props.jobs.map((job, index) => {
          return (
            <div className="job" key={index}>
              <h4>{job.title} | {job.company} | <a href={job.link} target="_blank">LINK</a> |
                <button className='green' onClick={() =>
                {this.props.handleJob('new',job)}}>NEW</button>

                {this.props.view === 'applied' || this.props.view === 'followUp' || this.props.view === 'interviewed' ?
                <button className='green' onClick={() => {this.props.handleJob('applied',job)}}>APPLIED</button>
                : <button onClick={() => {this.props.handleJob('applied',job)}}>APPLIED</button>}

                {this.props.view === 'followUp' || this.props.view === 'interviewed'?
                <button className='green' onClick={() => {this.props.handleJob('followUp',job)}}>FOLLOW UP</button>
                : <button onClick={() => {this.props.handleJob('followUp',job)}}>FOLLOW UP</button>}

                {this.props.view === 'interviewed' ?
                <button className='green' onClick={() => {this.props.handleJob('interviewed',job)}}>INTERVIEWED</button>
                : <button onClick={() => {this.props.handleJob('interviewed',job)}}>INTERVIEWED</button>}
                
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
