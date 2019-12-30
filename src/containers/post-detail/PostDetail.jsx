import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, } from 'reactstrap';

/**
 * PostDetail
 * componenete para mostrar el detalle de los post
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {object} postByIdModule - post individual obtenido los props
 */

const PostDetail = (props) => {
    const postByIdModule = props.location.state;

    const handlerBack = () => {
        return (event) => {
            props.history.push('/');
        }
    }

    return (
        <div className="post-detail">
            <Container>
                <Card>
                    <CardImg top width="100%" src={postByIdModule.image_url} />
                    <CardBody>
                        <br />
                        <CardTitle><h2>{postByIdModule.title}</h2></CardTitle>
                        <CardSubtitle><strong>Nivel de Influencia: </strong>{postByIdModule.description.ranking}</CardSubtitle>
                        <CardText><strong>Descripción: </strong>{postByIdModule.description.details}</CardText>
                        <Button onClick={handlerBack()}>Volver</Button>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}
export default PostDetail;