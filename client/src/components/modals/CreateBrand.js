import React, { useContext, useState } from 'react';
import { Modal, Button, Form , Dropdown, Row, Col} from 'react-bootstrap';
import {Context} from "../../index"

export default function CreateBrand({show, onHide}) {
	const {device} = useContext(Context)
	const [info, setInfo] = useState([])
	const addInfo =()=>{
		setInfo([...info, {title:'', description:'', number: Date.now()}])
	}
	const removeInfo =(number)=>{
		setInfo(info.filter(i=>i.number !== number))
	}
  return (
	<Modal
	show={show}
	onHide={onHide}
	size="lg"
	aria-labelledby="contained-modal-title-vcenter"
	centered
 >
	<Modal.Header closeButton>
	  <Modal.Title id="contained-modal-title-vcenter">
		 Добавить бренд
	  </Modal.Title>
	</Modal.Header>
	<Modal.Body>
	  <Form>
		{/* <Form.Control placeholder={"Введите название бренда"}/> */}
		<Dropdown className='mt-3'>
			<Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
			<Dropdown.Menu>
				{device.types.map(type=>
				<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
				)}
			</Dropdown.Menu>
		</Dropdown>
		<Dropdown className='mt-3'>
			<Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
			<Dropdown.Menu>
				{device.brands.map(brand=>
				<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
				)}
			</Dropdown.Menu>
		</Dropdown>
		<Form.Control placeholder='Введите название устройства' className='mt-3'/>
		<Form.Control type='number' placeholder='Введите стоимость устройства' className='mt-3'/>
		
		<Form.Control type='file'  className='mt-3'/>
		<br/>
		<Button onClick={addInfo}>Добавить новое свойство</Button>
		{
			info.map(item =>
			<Row className='mt-3' key={item.number}>
         <Col md={4}>
			<Form.Control
				placeholder='Введите название свойства'
			/>
			</Col>
			<Col md={4}>
			<Form.Control
				placeholder='Введите описание свойства'
			/>
</Col>
 <Col md={4}>
<Button onClick={()=>removeInfo(item.number)}>Удалить</Button>
</Col>
			</Row>)
		}
	  </Form>
	</Modal.Body>
	<Modal.Footer>
	  <Button onClick={onHide}>Закрыть</Button>
	  <Button onClick={onHide}>Добавить</Button>
	</Modal.Footer>
 </Modal>
  )
}
