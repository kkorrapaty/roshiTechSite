import React, { Component } from 'react'
import carousel2 from '../../carousel2-alm.png'

export default class ConfigMan extends Component {
  render () {
    return (
      <div className='info'>
        <img src={carousel2} />
        <h3>Configuration Management</h3>
        <ul>
          <li>Roshi Tech Inc. is a leading provider of Integrated Computing Environment solutions, designed to enable our clients to cost effectively manage and develop their IT environment successfully</li>
          <li>Expertise in Change Management and Version Control tools ( ClearCase, Subversion, CVS, Accurev, Perforce, VSS, Starbase and PVCS)</li>
          <li>Process suggestion, Install, Maintain</li>
          <li>Integration with other tools</li>
          <li>Process automation using triggers</li>
          <li>Tools Administration</li>
          <li>Build and Release engineering using tools and scripts (Maven, Ant, Clearmake, gnu Make, PERL, Shell etc..)</li>
          <li>Web enabling</li>
        </ul>
      </div>
    )
  }
}
