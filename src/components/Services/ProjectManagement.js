import React, { Component } from 'react'
import carousel1 from '../../carousel1-homepage.jpg'

export default class ProjectManagement extends Component {
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
          <img src={carousel1}/>
          <h3>Project Management</h3>
          <h6>
            Project Management is an essential skill set for successful development and deliver of project. We have PMP certified professionals available to address our customer Project Management needs. <br/> <br/>

            We work with industry standard tools. We integrated PM tools with rest of the tools to provide a complete Software Development Life Cycle (SDLC) management. <br/> <br/>
          </h6>
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
