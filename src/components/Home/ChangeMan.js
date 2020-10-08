import React, { Component } from 'react'
import carousel2 from '../../carousel2-alm.png'

export default class ChangeMan extends Component {
  render () {
    return (
      <div className='info'>
        <center> <img src={carousel2} /> </center>
        <h3>Change Management</h3>
        <ul>
          <li>Expertise in Defect Management Tools ( ClearQuest, Bugzilla, JIRA, Test Doctor, Starbase etc..)</li>
          <li>Install and customize Change Management tools</li>
          <li>Integrated Change Management and Source Code management and other tools to provide Application LifeCycle Management (ALM)</li>
        </ul>
      </div>
    )
  }
}
