import React, { Component } from 'react'
import carousel2 from '../../carousel2-alm.png'

export default class QA extends Component {
  render () {
    return (
      <div className='info'>
        <img src={carousel2} />
        <h3>QA and Automation</h3>
        <ul>
          <li>Expertise in QA and Automation tools (Rational Robot, Silk, WinRunner and Rational Test Manager, Selenium, Junit etc..)</li>
          <li>Setup Test Repositories and integrate with rest of Tools</li>
          <li>Execute the specified project with in the time period and deliver</li>
          <li>Automate tests using PCLI and  scripts.Implement data driven test automation thus reducing overhead for future changes</li>
          <li>Integration of tests and test suites into Software Development Life Cycles</li>
        </ul>
      </div>
    )
  }
}
