import React, { useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>
              Админ панель
            </Button>
            <Button variant={'outline-light'} onClick={() => logOut()} className="ms-3">
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Navbar>
    </Container>
  );
});
export default NavBar;
