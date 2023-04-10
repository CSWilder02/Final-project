import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Background from './galaxy2.png'

const PokemonPieChart = () => {
  const [pokemonName, setPokemonName] = useState('charizard');
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const statData = response.data.stats.map(({ base_stat, stat }) => ({
        name: stat.name,
        value: base_stat,
      }));
      setStats(statData);
    };
    fetchData();
  }, [pokemonName]);

  const handleSelectChange = (event) => {
    setPokemonName(event.target.value);
  };

  const renderPokemonOptions = () => {
    const pokemonNames = ['charizard', 'pikachu', 'mewtwo', 'gengar'];
    return pokemonNames.map((name) => (
      <option key={name} value={name}>
        {name}
      </option>
    ));
  };

  const renderPieChart = () => {
    const colors = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'];

    const total = stats.reduce((acc, curr) => acc + curr.value, 0);

    return (
      <div className="pie-chart" >
        {stats.map((stat, index) => (
          <div key={stat.name} className="pie-chart-slice" style={{ backgroundColor: colors[index % colors.length] }}>
            <div className="pie-chart-slice-content">
              <div className="pie-chart-slice-name">{stat.name}</div>
              <div className="pie-chart-slice-value">{`${Math.round((stat.value / total) * 100)}%`}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="timeline" style={{backgroundImage: `url(${Background})`, width: '1481px', height: '745px', marginTop: '-20px', backgroundRepeat: 'no-repeat', backgroundColor: '#111111'}}> 
      <h3 className='PokeTitle'>Select a Pokemon:</h3>
      <select className='filterTime' value={pokemonName} onChange={handleSelectChange}>
        {renderPokemonOptions()}
      </select>
      {renderPieChart()}
    </div>
  );
};

export default PokemonPieChart;

