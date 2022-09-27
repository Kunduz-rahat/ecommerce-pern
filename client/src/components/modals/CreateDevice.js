import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function CreateDevice({show, onHide}) {
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
		 Добавить устройство
	  </Modal.Title>
	</Modal.Header>
	<Modal.Body>
	  <Form>
		<Form.Control placeholder={"Введите название устройства"}/>
	  </Form>
	</Modal.Body>
	<Modal.Footer>
	  <Button onClick={onHide}>Закрыть</Button>
	  <Button onClick={onHide}>Добавить</Button>
	</Modal.Footer>
 </Modal>
  )
}
