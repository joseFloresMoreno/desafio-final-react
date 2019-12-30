import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup } from 'reactstrap';

/**
 * ModalPostUpdate
 * Modal para la actualizacion de informacion de los post
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {string} titulo - state para las input de texto
 * @param {string} details - state para las input de texto
 * @param {string} ranking - state para las input de texto
 * @param {string} image_url - state para las input de texto
 */

const ModalPostUpdate = (props) => {

    const [modal, setModal] = useState(true);

    const [titulo, setTitle] = useState(props.post.title);
    const [details, setDetails] = useState(props.post.description.details);
    const [ranking, setRanking] = useState(props.post.description.ranking);
    const [image_url, setImageUrl] = useState(props.post.image_url);

    const toggle = (history) =>  {
      setModal(!modal);
    };

    const update = () => {
      const postId = props.post.id;
      const descrip = {
          details,
          ranking,
      }
      const postUpdate = {
          title: titulo,
          description: JSON.stringify(descrip),
          image_url,
        }
        props.updateAction(postUpdate, postId, toggle);
    }
  
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={props.className}>
          <ModalHeader toggle={toggle}>Actualizar Post</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Titulo</Label>
              <Input value={titulo} onChange={({ target}) => setTitle(target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>Descripcion</Label>
              <Input type="textarea" value={details} onChange={({ target}) => setDetails(target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>Nivel de Influencia</Label>
              <Input type="number" value={ranking} onChange={({ target}) => setRanking(target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>URL Imagen</Label>
              <Input value={image_url} onChange={({ target}) => setImageUrl(target.value)} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancelar</Button>{' '}
            <Button color="primary" onClick={update}>Guardar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );

}

export default ModalPostUpdate;