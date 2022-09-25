import React from 'react';
import {Container, Row , Col} from 'react-bootstrap'
import SideBar from '../components/SideBar';

export default function Shop() {
  return (
    <Container>
    <Row className='mt-2'>
    <Col md={3}>
     <SideBar/>
    </Col>
    <Col md={9}>

</Col>
    </Row>
    </Container>
  )
}
