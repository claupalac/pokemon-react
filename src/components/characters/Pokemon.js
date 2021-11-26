import React, {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setStoreData} from "../../redux/states/reducer";

export default function Pokemon(props) {
    const [resultData, setResultData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        let options = {
            method: 'GET',
            url: ('https://pokeapi.co/api/v2/pokemon/'+ props.name),
        };
        axios.request(options).then(function (response) {
            setResultData(response.data);
            console.log(response.data);
            dispatch(setStoreData(response.data));
        });
        return resultData;
    }, [props])

    if (resultData.sprites) {

        return (
            <div>
                Si hay!
                <img src={resultData.sprites['front_default']}/>
            </div>
        );
    } else {
        return (
            <div>
                Hola
            </div>
        );
    }
}