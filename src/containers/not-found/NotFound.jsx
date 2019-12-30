import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './NotFound.css';

/**
 * NotFound
 * componente que se ejecuta desde react-router para una ruta no encontrada
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 */

const NotFound = (props) => {
    return (
      <div>
        <Container>
            <Jumbotron>
                <h1 className="display-3">Página no encontrada</h1>
                <p className="lead">Un ejercito de Coreanos del Norte trabajan para encontrar el problema</p>
                <hr className="my-2" />
            </Jumbotron>
        </Container>
      </div>
    );
  };
  
  export default NotFound;