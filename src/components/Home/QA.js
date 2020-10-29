import React, { useEffect, useState } from 'react'
import carousel2 from '../../carousel2-alm.png'
import Button from 'react-bootstrap/Button'

const QA = props => {
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
      <ul>
        <li>Expertise in QA and Automation tools (Rational Robot, Silk, WinRunner and Rational Test Manager, Selenium, Junit etc..)</li>
        <li>Setup Test Repositories and integrate with rest of Tools</li>
        <li>Execute the specified project with in the time period and deliver</li>
        <li>Automate tests using PCLI and  scripts.Implement data driven test automation thus reducing overhead for future changes</li>
        <li>Integration of tests and test suites into Software Development Life Cycles</li>
      </ul>
    </div>
  }

  return (
    <div className='info'>
      <center>
        <img src={carousel2} />
        <Button variant='primary' onClick={(ref) => {
          displayText()
        }}>QA and Automation</Button>
        <br/><br/>
      </center>
      {jsx}
    </div>
  )
}

export default QA
