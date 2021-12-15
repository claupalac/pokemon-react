import {selectPokemonData} from "../redux/states/selecters";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";

export default function HomePage() {

    const data = useSelector(selectPokemonData);

    if (data.sprites) {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.sprites['back_default']} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">bt</Button>
                </Card.Body>
            </Card>

            // <div>
            //     HOME
            //     <img src={data.sprites['back_default']}/>
            // </div>
        );
    }
        else
        {
            return (
                <div>
                    HomePage
                </div>
            );
        }
}