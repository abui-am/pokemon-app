import React from 'react';
import { Row, Col } from 'reactstrap';
import pokemon from './../assets/pokemon.png';

const Title = () => {
  return (
    <Row>
      <Col lg={12} className='mt-4'>
        <img src={pokemon} alt='pokemon' width={300} />
        <h1>Pokemon Apps</h1>
      </Col>
    </Row>
  );
};

export default Title;
