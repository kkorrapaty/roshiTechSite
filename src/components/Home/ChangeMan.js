import React, { useEffect, useState } from 'react'
import carousel2 from '../../carousel2-alm.png'
import Button from 'react-bootstrap/Button'

const ChangeMan = props => {
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
        <li>Expertise in Defect Management Tools ( ClearQuest, Bugzilla, JIRA, Test Doctor, Starbase etc..)</li>
        <li>Install and customize Change Management tools</li>
        <li>Integrated Change Management and Source Code management and other tools to provide Application LifeCycle Management (ALM)</li>
      </ul>
    </div>
  }

  return (
    <div className='info'>
      <center>
        <img src={carousel2} />
        <Button variant='primary' onClick={(ref) => {
          displayText()
        }}>Change Management</Button>
        <br/><br/>
      </center>
      {jsx}
    </div>
  )
}

export default ChangeMan
