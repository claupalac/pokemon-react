import {useSelector} from "react-redux";
import {selectPokemonData} from "../redux/states/selecters";
import React from "react";

export default function Skills() {

    const data = useSelector(selectPokemonData);
    if (data.abilities) {

        return (
            <ul class="list-group">
            {
                data.abilities.map(function (ability) {
                    return (
                        <div>
                            <li class="list-group-item">{ability.ability.name}</li>
                        </div>
                    );
                })
            }
            </ul>
        );
    }

    return (
        <div>Skills Page
            <ul>
                <li>NO hay nada</li>
            </ul>
        </div>
    );
}