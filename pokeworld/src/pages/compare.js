import { useState, useEffect } from "react";
import Background from './galaxy2.png'

function PokemonCompare() {
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {
    getRandomPokemon(setPokemon1);
    getRandomPokemon(setPokemon2);
  }, []);

  const getRandomPokemon = (setPokemon) => {
    const randomId = Math.floor(Math.random() * 898) + 1; // Generate random Pokemon ID
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`; // API URL for getting Pokemon data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };

  const comparePokemon = () => {
    if (pokemon1 && pokemon2) {
      const pokemon1Stats = pokemon1.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      }));
      const pokemon2Stats = pokemon2.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      }));
      const pokemon1Total = pokemon1.stats.reduce(
        (total, stat) => total + stat.base_stat,
        0
      );
      const pokemon2Total = pokemon2.stats.reduce(
        (total, stat) => total + stat.base_stat,
        0
      );
      return {
        pokemon1: {
          name: pokemon1.name,
          stats: pokemon1Stats,
          total: pokemon1Total,
          image: pokemon1.sprites.front_default,
        },
        pokemon2: {
          name: pokemon2.name,
          stats: pokemon2Stats,
          total: pokemon2Total,
          image: pokemon2.sprites.front_default,
        },
      };
    }
    return null;
  };

  const handleRefreshClick = () => {
    getRandomPokemon(setPokemon1);
    getRandomPokemon(setPokemon2);
  };

  const comparisonResult = comparePokemon();

  return (
    <div className="backgroundcompare" style={{backgroundImage: `url(${Background})`, width: '1481px', height: '745px', marginTop: '-20px', backgroundRepeat: 'no-repeat', backgroundColor: '#111111'}}>
      <h1 className="ComTitle">Pokemon Compare</h1>
      {comparisonResult && (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>{comparisonResult.pokemon1.name}</th>
              <th>{comparisonResult.pokemon2.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image</td>
              <td>
                <img src={comparisonResult.pokemon1.image} alt="Pokemon 1" />
              </td>
              <td>
                <img src={comparisonResult.pokemon2.image} alt="Pokemon 2" />
              </td>
            </tr>
            {comparisonResult.pokemon1.stats.map((stat, index) => (
              <tr key={index}>
                <td>{stat.name}</td>
                <td>{stat.value}</td>
                <td>{comparisonResult.pokemon2.stats[index].value}</td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>{comparisonResult.pokemon1.total}</td>
              <td>{comparisonResult.pokemon2.total}</td>
            </tr>
          </tbody>
        </table>
      )}
      <button className="Comparebut"  onClick={handleRefreshClick}>Refresh</button>
    </div>
  );
}

export default PokemonCompare;
