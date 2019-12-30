/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/**
 * User modal
 * componenete que muestra la info de usuarios en la pantala privada
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {object} user - props enviado desde la vista privada
 * @param {boolean} modal - para el control de la visualizacion
 */

const UserModal = (props) => {
  const { user } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{user.data.id} {user.data.name}</ModalHeader>
        <ModalBody>
          {user.data.email}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
  );
}

export default UserModal;