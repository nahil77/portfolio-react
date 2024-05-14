import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../components/ContactForm.css"

const ContactForm = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errorButton, setErrorButton] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});


    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (name === 'fullname') {
      const nameRegExp = /^[A-Za-z]{3,}$/;
      newErrors.fullname = !value.match(nameRegExp) || value.trim() === '' ? 'Please Enter A Valid Name' : '';
    }
    if (name === 'phone') {
      const phoneRegExp = /^(0|91)?[6-9][0-9]{9}$/;
      newErrors.phone = !value.match(phoneRegExp) || value.trim() === '' ? 'Please Enter A Valid Phone Number' : '';
    }
    if (name === 'email') {
      const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      newErrors.email = !value.match(emailRegExp) || value.trim() === '' ? 'Please Enter A Valid Email' : '';
    }
    if (name === 'subject') {
      const nameRegExp = /^[A-Za-z]{3,}$/;
      newErrors.subject = !value.match(nameRegExp) || value.trim() === '' ? 'Please Enter A Valid Subject' : '';
    }
    if (name === 'message') {
      const nameRegExp = /^[A-Za-z]{3,}$/;
      newErrors.message = !value.match(nameRegExp) || value.trim() === '' ? 'Please Enter Your Message' : '';
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValues = Object.values(formData);


    if (formValues.some(value => value.trim() === '')) {
      setErrorButton('Please Fill in All Fields');
      return;
    }


    if (Object.values(errors).every((error) => error === '')) {
      console.log('Form submitted successfully',formData);
    }
  };
  




  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} xs={12} md={6} className='mb-1'>
            <Form.Control
              type="text"
              name='fullname'
              placeholder="Enter your name"     
              onChange={handleChange} />
            <span className='errors'>{errors?.fullname}</span>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} className='mb-1'>
            <Form.Control
              type="tel"
              name='phone'
              placeholder="Enter your number"
              onChange={handleChange} />
            <span className='errors'>{errors?.phone}</span>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} xs={12} md={6} className=' mb-1'>
            <Form.Control
              type="email"
              name='email'
              placeholder="Enter your email"
              onChange={handleChange} />
            <span className='errors'>{errors?.email}</span>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} className='mb-1'>
            <Form.Control
              type="text"
              name='subject' placeholder="Enter subject"
              onChange={handleChange} />
            <span className='errors'>{errors?.subject}</span>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col}>
            <Form.Control
              as="textarea"
              name='message'
              rows={7}
              cols={150}
              placeholder="Enter your message"
    
              onChange={handleChange} />
            <span className='errors'>{errors?.message}</span>
          </Form.Group>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6} className="text-center">
            <Button variant="primary" className="btn-submit" type="submit">Contact Me</Button>
            <span className='errors'>{errorButton}</span>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
