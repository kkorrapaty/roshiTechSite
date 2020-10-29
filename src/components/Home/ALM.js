import React, { useEffect, useState } from 'react'
import carousel2 from '../../carousel2-alm.png'
import Button from 'react-bootstrap/Button'

const ALM = props => {
  const [display, setDisplay] = useState(null)

  useEffect(() => {
    setDisplay(false)
  }, [])

  const displayText = () => {
    setDisplay(!display)
  }

  let jsx

  if (display === null) {
    jsx = <p className = "loader"></p>
  } else if (display) {
    jsx =
      <div className='info seperation'>
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
  }

  return (
    <div className='info'>
      <center>
        <img src={carousel2}/>
        <Button variant='primary' onClick={(ref) => {
          displayText()
        }}>Application Life Cycle Management (ALM)</Button>
        <br/><br/>
      </center>
      {jsx}
    </div>
  )
}

export default ALM
