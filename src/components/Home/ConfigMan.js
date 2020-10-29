import React, { useEffect, useState } from 'react'
import carousel2 from '../../carousel2-alm.png'
import Button from 'react-bootstrap/Button'

const ConfigMan = props => {
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
  }

  return (
    <div className='info'>
      <center>
        <img src={carousel2} />
        <Button variant='primary' onClick={(ref) => {
          displayText()
        }}>Configuration Management</Button>
        <br/><br/>
      </center>
      {jsx}
    </div>
  )
}

export default ConfigMan
