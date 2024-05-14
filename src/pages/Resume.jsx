import React from 'react'
import "../components/Resume.css"
import { Col, Container, Row } from 'react-bootstrap'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Resume = () => {
    return (


        <Container className='bg-color top'>
            <div className='caption1'>
                <h1 className='lobster pt-2' >MOHAMMED NAHIL</h1>

                <ul >
                    <li>EMAIL: mohammednahil7000@gmail.com</li>
                    <li>LINKEDIN PROFILE: MOHAMMED NAHIL</li>
                </ul>
                <h6>
                    <Link to="https://www.instagram.com/n.ahil_/" target="_blank" rel="noopener noreferrer" className='light-red'>
                        <FontAwesomeIcon icon={faInstagram} />
                        <span></span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/mohammed-nahil-2b6074278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className='light-red'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <span></span>
                    <Link to="https://github.com/" target="_blank" rel="noopener noreferrer" className='light-red'>
                        <FontAwesomeIcon icon={faGithub} />

                    </Link>
                </h6>
                <Row>
                    <Col xs={12} md={8}>
                        <h3 className='lobster'>OBJECTIVES</h3>
                        <h5 className='ferrum'>Motivated BCom graduate with a passion for technology, seeking to kickstart a career as a Full Stack Web Developer utilizing the MERN stack. Eager to leverage academic knowledge and self-learning skills to contribute effectively to innovative project</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className='lobster'>EDUCATION</h3>
                        <ul>
                            <li> Bachelor of Commerce (B.Com)
                                Bharathiyar University, [2022-2024]</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <h3 className='lobster'>Hard SKILLS</h3>
                        <ul>
                            <li>Proficient in MERN stack (MongoDB, Express.js, React.js, Node.js)</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>Version control (Git)</li>
                            <li>Strong problem-solving abilities</li>
                            <li>Responsive web design</li>
                            <li>Familiarity with RESTful APIs</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3 className='lobster'>SOFT SKILLS</h3>
                        <ul>
                            <li>Communication Skills</li>
                            <li>Problem-Solving Abilities</li>
                            <li>Time Management</li>
                            <li>Creativity</li>
                            <li>Teamwork and Collaboration</li>
                            <li>Decision Making</li>
                        </ul>
                    </Col>
                </Row>
                <Row className='mt-2 mb-3'>
                    <Col>
                        <h3 className='mb-3'>CERTIFICATE</h3>
                        <h5>Full Stack Web Development with MERN Stack, 2024[ENTRI elevate]</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className='mb-3'>PROJECTS</h3>
                        <h4> New York Times Replica Website</h4>
                        <ul>
                            <li>Designed and developed a fully responsive replica of the New York Times news website</li>
                            <li>Implemented modern web design principles and techniques to ensure usability and aesthetics</li>
                            <li>Utilized HTML, CSS, JavaScript, and React.js for frontend development</li>
                        </ul>
                        <h4>Mi Site web site</h4>
                        <ul>
                            <li>Created a website inspired by the Xiaomi Redmi brand, showcasing products and features</li>
                            <li>Implemented a clean and minimalist design to reflect the brand's aesthetic</li>
                            <li>Utilized HTML, CSS, and JavaScript for frontend development</li>
                        </ul>
                        <h4>Personal Portfolio Website</h4>
                        <ul>
                            <li>Developed a sleek and professional portfolio website to showcase skills, projects, and resume</li>
                            <li>Implemented custom design and ensured full responsiveness across devices</li>
                            <li>Integrated backend functionality using Node.js for contact form and server-side logic</li>
                        </ul>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <h3>LANGUAGES</h3>
                        <ul className='pb-5'>
                            <li>English: Fluent (Speaking, Writing)</li>
                            <li>Malayalam: Native proficiency (Speaking, Writing)</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default Resume