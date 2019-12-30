import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Container, Button, Table } from 'reactstrap';
import ModalPostUpdate from '../../components/modal-post-update/ModalPostUpdate';

import { findAllAsyncActionCreator, findByIdAsyncActionCreator, deleteAsyncActionCreator, updateAsyncActionCreator } from '../../store/modules/post/actions';

/**
 * Private Home
 * Vista privada
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {object} postModule - lista de posts obtenido desde el store
 * @param {object} postByIdModule - post individual obtenido desde el store
 * @param {object} postUpdateModule - post individual para actualizar obtenido desde el store
 * @param {boolean} okAction - valor de borrado obtenido desde el store
 */

const PrivateHome = (props) => {
    const dispatch = useDispatch();
    const postModule = useSelector(store => store.post.posts);
    const postByIdModule = useSelector(store => store.post.postById);
    const postUpdateModule = useSelector(store => store.post.postUpdate);
    const okAction = useSelector(store => store.post.postDelete.okAction);

    useEffect(() => {
        dispatch(findAllAsyncActionCreator());
    }, []);

    useEffect(() => {
        if(okAction) {
            dispatch(findAllAsyncActionCreator());
        }
    }, [okAction]);

    const handlerFindById = (post) => {
        return (event) => {
            dispatch(findByIdAsyncActionCreator(post.id));
        }
    }
    const handlerDelete = (post) => {
        return (event) => {
            dispatch(deleteAsyncActionCreator(post.id));
        }
    }

    const updateAction = (post, id, toggle) => {
        dispatch(updateAsyncActionCreator(post, id));
        toggle(props.history);
    }

    return (
        <Container className="private-home">
            <br />
            <h1>Lista de Bandas Influentes</h1>
            <br />
            <Table striped hover responsive >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Nivel de Influencia</th>
                        <th>URL Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {postModule.data.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.description.details}</td>
                            <td>{post.description.ranking}</td>
                            <td>{post.image_url}</td>
                            <td><Button onClick={handlerFindById(post)}>Editar</Button>{' '}<Button color='danger' onClick={handlerDelete(post)}>Borrar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {postByIdModule.data.id && (<ModalPostUpdate updateAction={updateAction} post={postByIdModule.data} />)}
        </Container>
    );
};

export default PrivateHome;