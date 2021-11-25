import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Pokemon from "../characters/Pokemon";


export default function PokeNavBar() {

    const [searchField, setSearchField] = useState('');
    const [pokemonName, setPokemonName] = useState('ditto');
    const [pokemon, setPokemon] = useState(<div>NO hay</div>);

    const onInput = ({target:{value}}) => setSearchField(value);

    function handleSearch() {
        setPokemonName(searchField);
       setPokemon(<Pokemon name={pokemonName}/>)

    }

    return (
        <div className={'container'}>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">START</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/Home">Home</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={onInput}
                                value={searchField}
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0"  type="button" onClick={handleSearch}>hola</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {pokemon}
        </div>
    );
}
