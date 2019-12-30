import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Container, Button, Table } from 'reactstrap';

import { findAllAsyncActionCreator, findByIdAsyncActionCreator } from '../../store/modules/user/actions';
import UserModal from '../../components/user-modal/UserModal';

/**
 * Private Home User
 * Vista privada de usuarios
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {object} userModule - lista de usuarios obtenido desde el store
 * @param {object} userByIdModule - usuario individual obtenido desde el store
 */

const PrivateHome = () => {
    const dispatch = useDispatch();
    const userModule = useSelector(store => store.user.users);
    const userByIdModule = useSelector(store => store.user.userById);

    useEffect(() => {
        dispatch(findAllAsyncActionCreator());
    }, []);

    const handlerFindById = (user) => {
        return (event) => {
            dispatch(findByIdAsyncActionCreator(user.id));
        }
    }

    return (
        <Container className="private-home">
            <h1>Lista de Usuarios</h1>
            <br />
            <Table striped hover responsive >
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {userModule.data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><Button onClick={handlerFindById(user)}>Ver</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {userByIdModule.data.id && (<UserModal user={userByIdModule} />)}
        </Container>
    );
};

export default PrivateHome;