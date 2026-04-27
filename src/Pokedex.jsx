import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  }, [offset]);

  return (
    <div>
      <h1>Pokédex</h1>

      <button onClick={() => setOffset(offset - 20)} disabled={offset === 0}>
        Previous
      </button>

      <button onClick={() => setOffset(offset + 20)}>Next</button>

      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>
            <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
