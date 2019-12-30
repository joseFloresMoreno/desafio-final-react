import React from 'react';
import './Card.css';
import {
    Card as CardRS, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Container, CardColumns
  } from 'reactstrap';

/**
 * Card
 * componente que revela la informacion en el home publico
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {*} props - info recibido desde el home
 * @returns {function} - componenete Card
 */

const Card = (props) => {
    const handlerPostDetail = (post) => {
        return (event) => {
            props.history.push({pathname:`/post/detail/${post.id}`, state:post})
        }
    }
    return(
            <Container>
                <br />
                <h1>Listado de Bandas</h1>
                <CardColumns>
                    {props.post.map(post => (
                        <CardRS key={post.id} className='card-home'>
                            <CardImg top src={post.image_url} className='img-responsive' />
                            <CardBody>
                                <CardTitle><h3>{post.title}</h3></CardTitle>
                                <CardSubtitle><strong>Nivel de Influencia: </strong>{post.description.ranking}</CardSubtitle>
                                <br />
                                <Button color="info" onClick={handlerPostDetail(post)}>Ver</Button>
                            </CardBody>
                        </CardRS>
                    ))}
                </CardColumns>
            </Container>
    );
}

export default Card;