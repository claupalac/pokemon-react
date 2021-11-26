import {useSelector} from "react-redux";
import {selectPokemonData} from "../redux/states/selecters";
import React from "react";

export default function Powers() {

    const data = useSelector(selectPokemonData);
    if (data.abilities) {
        return (
            <div>
               <h1> Abilites:</h1>

                {data.abilities[0].ability.name}
            </div>
        );
    }

    return (
        <div>Login Page
            <ul>
                <li>Login</li>
            </ul>
        </div>
    );
}