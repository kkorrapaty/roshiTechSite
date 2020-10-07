import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import carousel1 from '../../carousel1-homepage.jpg'
import carousel2 from '../../carousel2-alm.png'

// Contact Form

// import Form from 'react-bootstrap/Form'
// <Form>
//   <Form.Group controlId='firstName'>
//     <Form.Label>First Name</Form.Label>
//     <Form.Control
//       type="text"
//       name="information"
//       placeholder="Enter First Name"
//     />
//   </Form.Group>
//   <Form.Group controlId='lastName'>
//     <Form.Label>Last Name</Form.Label>
//     <Form.Control
//       type="text"
//       name="information"
//       placeholder="Enter Last Name"
//     />
//   </Form.Group>
// </Form>

export default class Home extends Component {
  constructor (props) {
    super(props)
    // set state values
    this.state = {
      contactRoute: false
    }
  }

  move () {
    this.setState({
      contactRoute: true
    })
  }

  render () {
    const { contactRoute } = this.state

    if (contactRoute) {
      return <Redirect to='/contact' />
    }

    const jsx = (
      <div>
        <Carousel className='home-page'>
          <Carousel.Item>
            <div className='info'>
              <img src={carousel1} />
              <h3>Welcome to Roshi Tech, Inc</h3>
              <h6>
              Roshi Tech is a consulting firm which specializes in understanding your requirements; we study and suggest services that are tailored to your business, your challenges, and your people. <br /> <br />

              Our goal is to get you to move past planning, and to begin implementing. Our work is based on real business issues to produce tangible and bottom line outcomes. We use the context of your business to develop the strategies and behaviors necessary for success in today&apos;s market driven climate. <br /> <br />

              Roshi Tech works with you as a partner to maintain a &quot;Win-Win&quot; relationship. Most of our customers are long term partners and we get lots of repeat business from our customers. We got many customers from satisfied people like you, who refer our services.
              </h6>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='info'>
              <center> <img src={carousel2} /> </center>
              <h3>Application Life Cycle Management (ALM)</h3>
              <h6>
              ALM is the new mantra for Integrated Software Development Environment (ISDE). Roshi Tech has been providing ISDE for its clients. It helps in identifying the right tools for an organization depending on their current and future growth needs and budgets. Roshi Tech partnered with multiple vendors to provide a right set of tools. It also helped its clients to upgrade their environments to more appropriate tools. <br /> <br />

              ALM includes...
              </h6>
              <ul>
                <li>Requirements Management tools</li>
                <li>Code Management</li>
                <li>Requirements Management tools</li>
                <li>Testing tools</li>
                <li>Tracking tools</li>
                <li>Release Management</li>
              </ul>
            </div>
          </Carousel.Item>
          <Carousel.Item>
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
          </Carousel.Item>
        </Carousel>

        <div>
          <Button variant="primary" onClick={() => {
            this.move()
          }}>Contact Us</Button>
        </div>
      </div>
    )
    return (
      <div>
        {jsx}
      </div>
    )
  }
}
