import React from 'react'
import "../components/About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';


const About = () => {
  return (
    <div className='bg-img position-relative '>
      <div className='caption'>
        <h1 className='eleven'>MOHAMMED NAHIL</h1>
        <h2 className='eleven'>WEB DEVELOPER</h2>
        <h3>
          <Link to="https://www.instagram.com/n.ahil_/" target="_blank" rel="noopener noreferrer" className='text-white'>
            <FontAwesomeIcon icon={faInstagram} />
            <span></span>
          </Link>
          <Link to="https://www.linkedin.com/in/mohammed-nahil-2b6074278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className='text-white'>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <span></span>
          <Link to="https://github.com/" target="_blank" rel="noopener noreferrer" className='text-white'>
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </h3>
        <Row className='mt-3'>
          <Col  xs={12} md={8} className='sm-pl'>
            <h4 className='lobster'>
              <p className='mb-0'>
              A PASSIONATE WEB DEVELOPER WITH BACHELOR'S DEGREE IN COMMERCE AND A KNACK FOR CREATING STUNNING WEB EXPERIENCES.
              </p>
              <p className='mb-0'>
                I SPECIALIZE IN MONGODB,EXPRESS.JS,REACT.JS,NODE.JS,CSS,HTML,
                BOOTSTRAP AND JAVASCRIPT.</p>
                <p>
                  AN INTERACTION DESIGNER AND WEB WEBSITES WITH THE LATEST DESIGN TRENDS.LET'S COLLABORATE AND BRING YOUR CREATIVE VISION TO LIFE.
              </p>
            </h4>
          </Col>
        </Row>

      </div>

    </div>


  )
}

export default About