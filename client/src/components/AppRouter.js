import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Shop from '../pages/Shop';

export default function AppRouter() {
  const isAuth = false
  return (
	 <Routes>
    {isAuth && authRoutes.map(({path, Component})=>
    <Route key={path} path={path} element={<Component/>} exact/>
    )}
    {publicRoutes.map(({path, Component})=>
    <Route key={path} path={path} element={<Component/>} exact/>
    )}
    <Route path='*' element={<Shop/>}/>
   </Routes>
  )
}
