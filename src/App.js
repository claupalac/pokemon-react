import './App.css';
import React from "react";
import Indexer from "./application/routes";
import {Provider} from "react-redux";
import {store} from "./redux";

function App() {
    return (
        <Provider store={store}>
            <Indexer/>
        </Provider>
    );
}

export default App;
