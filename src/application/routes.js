import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Skills from '../pages/Skills';
import HomePage from '../pages/Home';
import {Container, Navbar} from "react-bootstrap";
import React, {useState} from "react";
import Pokemon from "../components/characters/Pokemon";

export default function Indexer () {

    const [searchField, setSearchField] = useState('');
    const [pokemon, setPokemon] = useState();

    const onInput = ({target:{value}}) => setSearchField(value);

    function handleSearch() {
        if(searchField)
        {
            setPokemon(<Pokemon name={searchField}/>)
        }
    }
    return (
        <BrowserRouter>
            <div className={'container'}>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Link to="/Home">Home</Link>
                        <Link to="/">Skills</Link>
                            <input
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={onInput}
                                value={searchField}
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0"
                                    type="button"
                                    onClick={handleSearch}>hola</button>
                    </Container>
                </Navbar>
                {pokemon}
            </div>
            <Routes>
                <Route exact path={"/"} element={<Skills/>}/>
                <Route path={"/Home/"} element={<HomePage/>}/>
                <Route path={"*"} element={() => <div>Perro Tramposo</div>}/>
            </Routes>
        </BrowserRouter>
    );
}