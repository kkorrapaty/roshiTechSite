import React, { Component } from 'react'
import aboutUsDrop from '../../aboutUsDrop.png'

export default class ManagementTeam extends Component {
  constructor (props) {
    super(props)
    this.state = {
      load: false
    }
  }

  componentDidMount () {
    this.setState({
      load: true
    })
  }

  render () {
    let jsx
    const { load } = this.state

    if (!load) {
      jsx = <p className = "loader"></p>
    } else {
      jsx = (
        <div className='info'>
          <img src={aboutUsDrop}/>
          <h3>Management Team</h3>
          <h6>
            <span>ROSHI TECH, INC.</span> is owned and operated by Prasad Tadi for the last 13 years. It is registered in 1996 as an S-corporation in the state of Massachusetts and having its main office in Merrimack, New Hampshire. It has business offices in California, Virginia and Ohio states. <br/> <br/>

            Roshi Tech has offices at Hyderabad, India. Partnered with other companies to provide services
          </h6>
          <div className='seperation'>
            <h2>Prasad Tadi</h2>
            <h4>CEO</h4>
            <ul>
              <li>M.S in Computer Sciences from IIT Kharaghpur 1984-86</li>
              <li>B.S in Electrical Engineering from A U Eng. College 1980-84</li>
              <li>Over 20 years of Technical Services, sales, marketing and business management experience in India and in USA</li>
              <li>He worked as a Sr. Systems Analyst developing a CRISP project and rolling it out to all the 500+ districts in India.1986-1991</li>
              <li>Worked as a Project Leader with CBSI/ Digital Equipment Corporation (DEC) from 1992-96</li>
              <li>Started Roshi Tech in 1996</li>
              <li>Represented the College and University in sports and games; Continue to be active in Games</li>
            </ul>
            <a href="https://www.linkedin.com/in/prasadtadi/" target="blank">Prasad Tadi Profile</a>
          </div>
        </div>
      )
    }

    return (
      <div>
        {jsx}
      </div>
    )
  }
}
