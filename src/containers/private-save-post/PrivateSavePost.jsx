import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    InputGroup, InputGroupAddon, Input, InputGroupText,
    Container, Row, Col, Button } from 'reactstrap';
import { saveAsyncActionCreator  } from '../../store/modules/post/actions';

/**
 * Private Save Post
 * Vista privada para crear post
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {string} titulo - state para las input de texto
 * @param {string} details - state para las input de texto
 * @param {string} ranking - state para las input de texto
 * @param {string} image_url - state para las input de texto
 */

const PrivateSavepost = (props) => {
    const [titulo, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [ranking, setRanking] = useState(0);
    const [image_url, setImageUrl] = useState('');

    const dispatch = useDispatch();
    const postSaveModule = useSelector(store => store.post.postSave);
    useEffect(() => {
        dispatch({
            type: 'POST_SAVE_VOID',
            payload: null,
        })
    }, []);

    useEffect(() => {
        if(postSaveModule.data.id) {
            props.history.push('/private/home');
            dispatch({
                type: 'POST_SAVE_VOID',
                payload: null,
            })
        }
    }, [postSaveModule.data.id])

    const handlerSave = (event) => {
        event.preventDefault();
        const descrip = {
            details,
            ranking,
        }
        const post = {
            title: titulo,
            description: JSON.stringify(descrip),
            image_url,
        };
        dispatch(saveAsyncActionCreator(post));
    }

    const validForm = () => {
        return titulo === '' || details === '' || ranking === '';
    }

    return (
        <div className="private-save-post">
            <Container>
                <Row>
                    <Col>
                        <br />
                        <h1>Nuevo Banda Influente</h1>
                        <form onSubmit={handlerSave}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>Nombre Banda</InputGroupText>
                                </InputGroupAddon>
                                <Input value={titulo} onChange={({ target}) => setTitle(target.value)} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>Descripcion</InputGroupText>
                                </InputGroupAddon>
                                <Input type="textarea" value={details} onChange={({ target}) => setDetails(target.value)} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>Nivel de Influencia</InputGroupText>
                                </InputGroupAddon>
                                <Input type="number" value={ranking} onChange={({ target}) => setRanking(target.value)} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>URL de imagen</InputGroupText>
                                </InputGroupAddon>
                                <Input value={image_url} onChange={({ target}) => setImageUrl(target.value)} />
                            </InputGroup>
                            <br />
                            <Button disabled={validForm()} color="primary">Crear</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default PrivateSavepost;