import React, { useContext, useEffect } from 'react';
import {Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar';
import SideBar from '../components/SideBar';
import Col from 'react-bootstrap/Col'
import DeviceList from '../components/DeviceList';
import {observer} from 'mobx-react-lite';
import {Context} from '../index'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';


 const Shop=observer(()=> {
  const {device} = useContext(Context)

  useEffect(()=>{
    fetchTypes().then(data=>device.setTypes(data))
    fetchBrands().then(data=>device.setBrands(data))
    fetchDevices().then(data=>device.setDevices(data.rows))
  }, [])
  return (
    <Container>
    <Row className='mt-2'>
    <Col md={3}>
     <SideBar/>
    </Col>
    <Col md={9}>
   <BrandBar/>
   <DeviceList/>
</Col>
    </Row>
    </Container>
  )
})
export default Shop