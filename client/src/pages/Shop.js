import React from 'react';
import {Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar';
import SideBar from '../components/SideBar';
import Col from 'react-bootstrap/Col'
export default function Shop() {
  return (
    <Container>
    <Row className='mt-2'>
    <Col md={3}>
     <SideBar/>
    </Col>
    <Col md={9}>
   <BrandBar/>
</Col>
    </Row>
    </Container>
  )
}
