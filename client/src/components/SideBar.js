import { observer } from "mobx-react-lite";
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

 const SideBar= observer(() =>{
	const {device} = useContext(Context)
  return (
	<ListGroup>
	{device.types.map(type=>
	<ListGroup.Item key={type.id}
	onClick={()=> device.setSelectedType(type)}
	active={type.id === device.selectedType.id}
	style={{cursor:"pointer"}}>
{type.name}
	</ListGroup.Item>
	)}
 </ListGroup>
  )
})
export default SideBar;