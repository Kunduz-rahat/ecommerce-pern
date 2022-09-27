import React from 'react'
import { Container , Col, Row, Card, Button} from 'react-bootstrap';
import {AiFillStar} from 'react-icons/ai';
export default function DevicePage() {
  const device = {id:1, name:"Apple Pro12", price:1230, rating:5, 
  img:"https://appleinsider.ru/wp-content/uploads/2021/09/iPhone_13_i_iPhone_13_mini_00007-750x481.jpg"}
  const description = [
    {id:1, title: "Оперативная память", description:"5 гб"},
    {id:2, title: "Камера", description:"12 мп"},
    {id:3, title: "Процессор", description:"Петтиум 3"},
    {id:4, title: "Кол-во ядер", description:"2"},
    {id:5, title: "Аккумулятор", description:"4 000"},
  ]
  return (
	 <Container className='mt-3'>
   <Row>
   <Col md={4}> 

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
    {description.map((info)=>
    <Row key={info.id} >
{info.title}: {info.description}
     </Row>
    )}
  </Row>
   </Container>
  )
}
