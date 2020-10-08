import React, { Component } from 'react'
import aboutUsDrop from '../../aboutUsDrop.png'

export default class AboutUs extends Component {
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
    const { load } = this.state
    let jsx

    if (!load) {
      jsx = <p className = "loader"></p>
    } else {
      jsx = (
        <div className='info'>
          <img src={aboutUsDrop}/>
          <h3>About Us</h3>
          <h6>
            <span>ROSHI TECH, INC.</span> is a consulting organization providing high level software solutions and training services to a wide range of industries , markets and individuals. We demonstrated strong Project Management skills in providing &quot;Fixed price solutions&quot; to our clients. <br /> <br />

            We have earned reputation among our customers and industry peers for delivering quality IT services at competitive prices. <br /> <br />

            We have been providing Consultancy services to our customers since 1996. We are committed to and emphasize quality throughout all aspects of our operations. Our goal is to provide you with maximum flexibility, convenience and the freedom to choose the services you want, when you want them. <br /> <br />

            Our commitment to quality, customer satisfaction, and value has been rewarded with a high percentage of repeat business and steady growth in new customer accounts. Much of this growth has been in the form of outsourcing, a process whereby customers turn over to Roshi Tech the responsibility of performing functions previously accomplished by their own staff. <br /> <br />
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
