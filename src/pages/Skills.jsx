import React from 'react'
import "../components/Skills.css"
import { Col, Container, Row } from 'react-bootstrap'


const Skills = () => {
  return (
    <div className='bg-imge'>
      <div className='caption2'>
        <Container>
          <Row className='center' >
            <Col xs={6} md={3}>
                <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="icon"  />
                <h3><span className='mongo-clr'>M</span>ongoDB</h3>
            </Col>
            <Col xs={6} md={3}>
                <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/express-js-11217744-9200748.png" alt="icon"  />
              <h3><span className='exp-clr'>E</span>xpressJs</h3>
            </Col>
            <Col xs={6} md={3}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-226053.png" alt="icon"  />
              <h3><span className='react-clr'>R</span>eactJs</h3>
            </Col>
            <Col xs={6} md={3}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-3628954-3030179.png" alt="icon"/> 
                <h3><span className='node-clr'>N</span>odeJs</h3>    
            </Col>
          </Row>
          <Row>
            <Col className='text-center'>
            <h1 className='ferrum'>As a <span className='mongo-clr'>M</span><span className='exp-clr'>E</span><span className='react-clr'>R</span><span className='node-clr'>N</span> stack developer, I excel in:</h1> 
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h4>
                <ul className='ferrum'>
              <li>MongoDB for efficient data handling.</li>
              <li>Express.js for scalable server-side applications.</li>
              <li>React.js for dynamic user interfaces.</li>
              <li>Node.js for fast server-side operations.</li>
            </ul>
              </h4>
            </Col>
            <Col lg={6}>
              <h4>
                <ul className='ferrum'>
            <li>HTML5 & CSS3 for responsive design.</li>
              <li>JavaScript (ES6+) for complex logic.</li>
              <li>RESTful API development.</li>
              <li>Git for version control</li>
            </ul>
              </h4>
            
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default Skills