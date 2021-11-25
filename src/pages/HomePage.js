
export default function HomePage(props) {
    let pokemonData = props.pokemonData;
    console.log(pokemonData.results);
    if (!pokemonData.sprites) {
        return (
            <div>
                Nada
            </div>
        );
    }
    else {

        let front = '';
        console.log(pokemonData.sprites['front_default']);
        if (pokemonData.sprites['front_default']){
            front = pokemonData.sprites['front_default'];
        }
        return (
            <div>
                <img src={front}  alt={'Pokemon'}/>
                <h1>Home</h1>
            </div>
        );
    }
}