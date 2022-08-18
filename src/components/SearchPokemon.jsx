import React from 'react';
import Select from 'react-select';
import {
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import usePokemon from '../hooks/usePokemon';
import CustomContainer from './CustomContainer';

const options = [
  { value: 'grass', label: 'Grass' },
  { value: 'poison', label: 'Poison' },
  { value: 'flying', label: 'Flying' },
  { value: 'water', label: 'Water' },
  { value: 'bug', label: 'Bug' },
  { value: 'normal', label: 'Normal' },
];

const SearchPokemon = () => {
  const { search, selectedType, setSelectedType, setPokemons, pokemons } =
    usePokemon();
  return (
    <CustomContainer>
      <Row className='mt-4'>
        <Col lg={8} className='text-start'>
          <label for='cars'>Type:</label>
          <Select
            value={selectedType}
            onChange={(value) => {
              setSelectedType(value);
            }}
            options={options}
          />
        </Col>
        <Col lg={1} className='d-flex align-items-end'>
          <Button
            className='w-100'
            color='danger'
            onClick={() => {
              setSelectedType(null);
              setPokemons([]);
            }}
          >
            X
          </Button>
        </Col>
        <Col lg={3} className='d-flex align-items-end'>
          <Button className='w-100' color='primary' onClick={search}>
            Search
          </Button>
        </Col>
        <Col lg={12}>
          <Row className='mt-4'>
            {pokemons.map((poke) => (
              <Col lg={4} key={poke.id}>
                <Card className='mb-4'>
                  <CardImg
                    alt='Card image cap'
                    src={poke.sprites.front_default}
                    top
                    width='100%'
                  />
                  <CardBody>
                    <CardTitle tag='h5'>{poke.name}</CardTitle>
                    <CardSubtitle className='mb-2 text-muted' tag='h6'>
                      {poke.types.map((type) => (
                        <span className='ms-1 me-1'>{type.type.name}</span>
                      ))}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </CustomContainer>
  );
};

export default SearchPokemon;
