import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button, Form, FormGroup, Label, Card, Container, Col, Row, CardHeader, CardBody } from 'reactstrap';
import { loginAsyncActionCreator } from '../../store/modules/auth/actions';

/**
 * Login Form  
 * Formulario de inicio de sesion de la aplicacion
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {string} email - state para las input de texto
 * @param {string} password - state para las input de texto
 */

const LoginForm = (props) => {
    const store = useSelector(store => store);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handlerSubmit = (event) => {
        event.preventDefault();
        // client
        dispatch(loginAsyncActionCreator({
            email,
            password,
        }));
    }

    useEffect(() => {
        if(store.auth.isLogin) {
            props.history.push('/private/home');
        }
    }, [store.auth.isLogin, props]);

    const buttonIsDisabled = () => password.value === '' || email.value === '';

    return (
        <div className="login-form">
            <Container className="mt-4">
                <Row>
                    <Col sm={{ size: 4, offset: 4}}>
                        <Card>
                            <CardHeader>Inicio de sesión</CardHeader>
                            <CardBody>
                                <Form onSubmit={handlerSubmit}>
                                    <pre className="text-left">
                                    </pre>
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={({ target }) => setEmail(target.value) }
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Contraseña</Label>
                                        <Input 
                                            type="password"
                                            value={password}
                                            onChange={({ target }) => setPassword(target.value) }
                                        />
                                    </FormGroup>
                                    <Button
                                        disabled={buttonIsDisabled()}
                                    >Iniciar Sesión</Button>
                                </Form></CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;