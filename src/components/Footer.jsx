import React from 'react'
import "../components/Footer.css"
import { Container } from 'react-bootstrap'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer>
            <Container>
                <h5>
                    <FontAwesomeIcon icon={faCopyright} />
                    <span className='mrg-10'> 2024  Nahil. All rights reserved.</span>
                    <span>Designed & Developed by Nahil.</span>
                </h5>
                

            </Container>

        </footer>
    )
}

export default Footer