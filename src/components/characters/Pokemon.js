import React, {useEffect, useState} from "react";
import axios from "axios";
import Indexer from "../../application/routes";

export default function Pokemon(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let options = {
            method: 'GET',
            url: ('https://pokeapi.co/api/v2/pokemon/'+ props.name),
        };
        axios.request(options).then(function (response) {
            setData(response.data);
        });
        return data;
    }, [])

    console.log(data);

    return (
        <div>
            <Indexer dataSource={data}/>
        </div>
    );
}