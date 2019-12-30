import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  Container,
} from 'reactstrap';
import './Header.css'
import { NavLink as RRNavLink } from 'react-router-dom';
import { logoutActionCreator } from '../../store/modules/auth/actions';


/**
 * Header
 * header de la aplicacion
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {boolean} isLogin - rescatado del store para validar el login
 * @param {string} isOpen - state para las input de texto
 */

const Header = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(store => store.auth.isLogin);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const handlerLogout = () => {
    dispatch(logoutActionCreator());
  };

  const toggleNavItems = () => {
    if(isLogin){
        return (
          <React.Fragment>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/private/home/" activeClassName="active">Lista de Post</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/private/home/post/create" activeClassName="active">Crear Nuevo Post</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/private/home/user" activeClassName="active">Lista de Usuarios</NavLink>
            </NavItem>
          </React.Fragment>
        )
    }else{
      return (
        <NavItem>
          <NavLink tag={RRNavLink} exact to="/login" activeClassName="active">Login</NavLink>
        </NavItem>
      )
    }
  }
  

  return (
    <div className='header'>
        <Navbar color="dark" dark expand="md">
        <Container>
        <NavbarBrand href="/">Influencia del K-POP</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
              </NavItem>
              {toggleNavItems()}
              {/* <NavItem>
              {isLogin ? (
                <NavLink tag={RRNavLink} exact to="/private/home/" activeClassName="active">Lista de Post</NavLink>
                  ) : ''}
              </NavItem>
              {!isLogin ? (
                <NavLink tag={RRNavLink} exact to="/login" activeClassName="active">Login</NavLink>
                  ) : <NavLink tag={RRNavLink} exact to="/private/home/user/create" activeClassName="active">Crear Nuevo Post</NavLink>}
              </NavItem> */}
            </Nav>
            <Form>
              {isLogin ? <Button onClick={handlerLogout}>Cerrar sesión</Button> : ''}
            </Form>
          </Collapse>
        </Container>
        </Navbar>
    </div>
  );
}

export default Header;