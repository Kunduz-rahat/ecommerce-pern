import React, { useEffect, useState } from 'react'
import { Container , Col, Row, Card, Button, Image} from 'react-bootstrap';
import {AiFillStar} from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceApi';
export default function DevicePage() {
const [device, setDevice] = useState({info:[]})
const {id} = useParams()

useEffect(()=>{
fetchOneDevice(id).then(data=> setDevice(data))
}, [])
  return ( 
	 <Container className='mt-3'>
   <Row>
   <Col md={4}> 
<Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
</Col>
<Col md={4}>
<Row className='d-flex align-items-center justify-content-center'>
<h2>{device.name}</h2>
<div >
{device.rating}
<AiFillStar/>

</div>
</Row>
</Col>
<Col md={4}> 
<Card className='d-flex flex-column align-items-center justify-content-around' 
style={{width:300, height:300, fontSize:32, border:"5px solid light"}}>
<h3> От: {device.price} руб.</h3>
<Button className='mt-3'>Добавить товар в корзину</Button>
</Card>
</Col>
   </Row>
  <Row className='d-flex flex-column mt-3'>
   <h3>Характеристики :</h3>
    {device.info.map((info)=>
    <Row key={info.id} >
{info.title}: {info.description}
     </Row>
    )}
  </Row>
   </Container>
  )
}
