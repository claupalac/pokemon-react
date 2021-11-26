import {selectPokemonData} from "../redux/states/selecters";
import {useSelector} from "react-redux";
import React from "react";

export default function HomePage() {

    const data = useSelector(selectPokemonData);
    if (data.sprites) {
        // console.log(resultData.sprites['front_default']);
        return (
            <div>
                HOME
                <img src={data.sprites['back_default']}/>
            </div>
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