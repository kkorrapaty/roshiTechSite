import React, { useEffect, useState } from 'react'
import carousel2 from '../../carousel2-alm.png'
import Button from 'react-bootstrap/Button'

const MobileAppDev = props => {
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
      We have expertise in <span>Mobile Application Development</span> platform including <span>iPhone Application Development, Windows Mobile Application, Mobile enabled website development, J2ME based Mobile Application Development</span> on Nokia, Samsung, LG phones, Google Android, NFC Phone, iPhone Mobile Website Development, iPhone Mobile Application Development. <br /> <br />

      In keeping with these trends, We have harnessed mobile technologies for diverse platforms like Symbian OS, J2ME, iPhone, Win CE, and Palm OS, CDMA & GSM Phones and Tablet PCs among others. Our team of <span>Mobile Application Development</span> specialists produce economical solutions by isolating components in an application that hinder development, solve with effective and industry standard techniques. We have developed many customized <span>iPhone Mobile Applications, Java Based Mobile (J2ME) Applications, Windows Mobile Application Solutions</span> and <span>NFC Mobile Application</span>. We also provide complete, end-to-end mobile/wireless solutions that integrate business transactions through mobile devices and content delivery systems to publish a range of information valuable for both suppliers and buyers. <br /> <br />

      We at our offshore development center provide full spectrum <span>Mobile Application Development</span> that encompasses the entire mobile application development cycle from initial design and architecture to development and integration into existing systems. We have expertise in building multiple applications that utilize the Palm OS, Windows CE, Symbian OS, CDMA & GSM Phones and Tablet PCs. We have development experience in GPS based J2ME applications. <br /> <br />
      </h6>
    </div>
  }

  return (
    <div className='info'>
      <center>
        <img src={carousel2} />
        <Button variant='primary' onClick={(ref) => {
          displayText()
        }}>Mobile Application Development</Button>
        <br/><br/>
      </center>
      {jsx}
    </div>
  )
}

export default MobileAppDev
