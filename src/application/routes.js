import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

export default function Indexer (props) {
    // console.log(props.dataSource);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<LoginPage pokemonData={props.dataSource}/>}/>
                <Route path={"/Home/"} element={<HomePage pokemonData={props.dataSource}/>}/>
                <Route path={"*"} element={() => <div>Perro Tramposo</div>}/>
            </Routes>
        </BrowserRouter>
    );
}