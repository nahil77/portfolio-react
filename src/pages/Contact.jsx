import React from 'react'
import "../components/Contact.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='bg-imge position-relative'>
            <div className=' caption3'>
                <Container>
                    <Row>
                        <Col className='d-flex mrg-r-100' sm={12} md={4}>
                            <h2 className='mrg-r-20'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </h2>
                            <div>
                                <h1>
                                    Location:
                                </h1>
                                <h3>
                                    Thrissur,Kerala,India
                                </h3>
                            </div>
                        </Col>
                        <Col className='d-flex mt-md-0 mt-sm-3' sm={6} md={4}>
                            <h2 className='mrg-r-20'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </h2>
                            <div>
                                <h1>
                                    Email:
                                </h1>
                                <h3>
                                    mohammednahil7000@gmail.com
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-md-5 mt-sm-3'>
                        <Col className='d-flex'xs={12} md={6}>
                            <h2 className='mrg-r-20'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </h2>
                            <div>
                                <h1>
                                    LinkedIn:
                                </h1>
                                <h3>
                                    Mohammed Nahil
                                </h3>
                            </div>
                        </Col>
                        <Col className='d-flex mt-md-0  mt-sm-3' xs={12} md={6}>
                            <h2 className='mrg-r-20'>
                                <FontAwesomeIcon icon={faGithub} />
                            </h2>
                            <div>
                                <h1>
                                    Github:
                                </h1>
                                <h3>
                                    Nahil77
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Col>
                    <h1 className='text-md-center mt-2 text-sm-start'>
                        Let'S Connect :
                    </h1>
                    </Col>
                    <Col  className='text-md-center text-sm-start'>
                        <h5>
                            <p>Feel free to reach out to me via email or connect with me on Linkedin or Github.</p>
                            <p>I'm always open to new oppurtunities and collaborations!</p> 
                        </h5>
                    </Col>

                </Container>
            </div>
        </div>
    )
}

export default Contact