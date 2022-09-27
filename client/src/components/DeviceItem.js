import React from 'react'
import { Col, Card, Image } from 'react-bootstrap';
import {AiFillStar} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/const';

 const DeviceItem=({device})=> {
	const navigate = useNavigate()
	console.log(navigate)
  return (
	 <Col md={3} className="mt-3" 
	 onClick={()=> navigate(DEVICE_ROUTE + '/' + device.id)}>
	 <Card style={{width:150, cursor:"pointer"}} border={"light"}>
<Image width={150}  src={device.img}/>
<div className='text-black-50 d-flex justify-content-between align-items-center mt-3'>
	<div>Samsung</div>
	<div className='align-items-center'>
	{device.rating}
		<AiFillStar/>
	</div>

</div>
	<div>
		{device.name}
	</div>
	 </Card></Col>
  )


}

export default DeviceItem


