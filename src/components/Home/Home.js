import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import carousel1 from '../../carousel1-homepage.jpg'
import QA from './QA'
import ConfigMan from './ConfigMan'
import ALM from './ALM'
import ChangeMan from './ChangeMan'
import MobileAppDev from './MobileAppDev'

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
            </div> <br />
          </Carousel.Item>
          <Carousel.Item>
            <ALM /> <br />
          </Carousel.Item>
          <Carousel.Item>
            <ConfigMan /> <br />
          </Carousel.Item>
          <Carousel.Item>
            <QA /> <br />
          </Carousel.Item>
          <Carousel.Item>
            <ChangeMan /> <br />
          </Carousel.Item>
          <Carousel.Item>
            <MobileAppDev /> <br />
          </Carousel.Item>
        </Carousel>

      </div>
    )
    return (
      <div>
        {jsx}
        <h6>
        Roshi Tech is a consulting firm which specializes in understanding your requirements; we study and suggest services that are tailored to your business, your challenges, and your people. <br /> <br />

        Our goal is to get you to move past planning, and to begin implementing. Our work is based on real business issues to produce tangible and bottom line outcomes. We use the context of your business to develop the strategies and behaviors necessary for success in today&apos;s market driven climate. <br /> <br />

        Roshi Tech works with you as a partner to maintain a &quot;Win-Win&quot; relationship. Most of our customers are long term partners and we get lots of repeat business from our customers. We got many customers from satisfied people like you, who refer our services.
        </h6>

        <div>
          <Button variant="primary" onClick={() => {
            this.move()
          }}>Contact Us</Button>
        </div>

      </div>
    )
  }
}
