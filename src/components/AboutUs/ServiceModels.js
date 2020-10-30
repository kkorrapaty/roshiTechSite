import React, { Component } from 'react'
import aboutUsDrop from '../../aboutUsDrop.png'

export default class ServiceModels extends Component {
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
          <h3>Service Models</h3>

          <p>
            <span>ROSHI TECH, INC.</span> has been providing cost effective and quality services using combination of On-Site, On-shore and Off-shore models.
          </p>

          <h6>
            <span>Contracting & Consulting services</span>
          </h6>

          <p>
            We can provide short term and long term resources to address your project needs. These resources will work as a part of your team and deliver the services as needed. The costing of these resources is based on time and material basis.
          </p>

          <h6>
            <span>Fixed Bid</span>
          </h6>

          <p>
            We can take up a project and develop and deliver for a fixed price solution.
          </p>

          <h6>
            <span>On Shore & Off Shore</span>
          </h6>

          <p>
            To give the better price advantage to our customers, we have developed multiple projects and delivered using this model. A resource can come and interact with you to understand the project and design and proto type. The project will be further developed and tested using our Off Shore resources. It is delivered and/or deployed at the customer sites. We help in documenting and training the staff on the product.
          </p>

          <h6>
            <span>Off Shore teams</span>
          </h6>

          <p>
            Under this model, we help in setting up a virtual team for your organizational needs. This team resources will be dedicated to your project for the duration of this project. This Team can be treated as your own off-shore team and works closely with your organization. <br/><br/>

            We have extended this concept to provide a Build, Operate and Transfer (B-O-T) teams.
          </p>

          <h6>
            <span>Off Shore BOT services</span>
          </h6>

          <p>
            We help our customers to start up their off-shore offices in a phased model. Instead of creating an off-shore entity and its start up delays, we can provide you with a dedicated off-shore teams. They can be operated as your branch office at off-shore. Once the customers sees the returns on its off-shore development, these dedicated teams can spin-off into an Off-shore branch office in India. We work with our partners to provide you the required non-software related services to take care of the Off-shore entity creation.
          </p>
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
