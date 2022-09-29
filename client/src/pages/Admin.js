import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

export default function Admin() {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  return (
	 <Container className='d-flex flex-column '>
   <Button onClick={()=> setTypeVisible(true)}>
     Добавить тип
   </Button>
   <Button onClick={()=> setBrandVisible(true)}>
     Добавить бренд
   </Button>
   <Button onClick={()=> setDeviceVisible(true)}>
     Добавить устройство
   </Button>
   <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}/>
   <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)}/>
   <CreateDevice show={deviceVisible} onHide={()=> setDeviceVisible(false)}/>
   </Container>
  )
}
