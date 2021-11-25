
export default function LoginPage(props) {

    let pokemonData = props.pokemonData;

    return (
        <div>Login Page
            <ul>
                <li>{pokemonData.name}</li>
            </ul>
        </div>
    );
}