import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Button, Table } from 'reactstrap';
import PostModal from '../../components/post-modal/PostModal';

import { findAllAsyncActionCreator, findByIdAsyncActionCreator, deleteAsyncActionCreator } from '../../store/modules/post/actions';


/**
 * Table
 * componenete que muestra la info en la pantala privada
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {object} postModule - state para las input de texto
 * @param {object} postByIdModule - state para las input de texto
 * @param {string} ranking - state para las input de texto
 * @param {string} image_url - state para las input de texto
 */

const TablePost = (props) => {
    const dispatch = useDispatch();
    const postModule = useSelector(store => store.post.posts);
    const postByIdModule = useSelector(store => store.post.postById);

    useEffect(() => {
        dispatch(findAllAsyncActionCreator());
    }, []);

    const handlerFindById = (post) => {
        return (event) => {
            dispatch(findByIdAsyncActionCreator(post.id));
        }
    }
    const handlerDelete = (post) => {
        return (event) => {
            dispatch(deleteAsyncActionCreator(post.id));
            props.history.push('/private/home');
        }
    }
        return (
            <Container>
            <Table striped hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Validación</th>
                        <th>URL Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {postModule.data.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.description}</td>
                            <td>{post.ranking}</td>
                            <td>{post.image_url}</td>
                            <td><Button onClick={handlerFindById(post)}>Ver</Button><Button color='danger' onClick={handlerDelete(post)}>Borrar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {postByIdModule.data.id && (<PostModal post={postByIdModule} />)}
            </Container>
        );
}

export default TablePost;