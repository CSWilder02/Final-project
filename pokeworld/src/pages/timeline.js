import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Card } from "react-bootstrap";

function Timeline() {

    const [pokeData, setPokeData] = useState([]);

//     const [labels, setLabels] = useState([]);

//     useEffect(() => {
//         axios
//           .get("https://pokeapi.co/api/v2/pokemon")
//           .then((response) => {
//             const data = response.data.results.map((pokemon) => pokemon.name);
//             console.log(data)
//             setLabels(data);
//           });
//       }, []);

//       const chartConfig = {
//         labels: labels,
//         datasets: [
//           {
//             label: "PokeAPI Timeline",
//             data: [150, 90, 50, 40],
//             backgroundColor: "rgba(255, 255, 255, 1)",
//             borderColor: "rgba(4, 217, 255, 1)",
//             borderWidth: 1,
//           },
//         ],
//       };
      
//       return (
//         <div className="TimeLine">
//           <h1>PokeAPI Timeline Chart</h1>
//           <Line data={chartConfig} />
//         </div>
//       );
// }

const [filter, setFilter] = useState("");

useEffect(() => {
  async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    setPokeData(data.results);
  }
  fetchData();
}, []);

const labels = pokeData.map((data) => data.name);
const chartConfig = {
  labels: labels,
  datasets: [
    {
      label: "Pokemon",
      data: pokeData.map((data) => data.id),
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.5,
    },
  ],
};

const filteredData = pokeData.filter((data) =>
  data.name.toLowerCase().includes(filter.toLowerCase())
);

return (
  <div className="TimePage">
    <input className="Filter"
      type="text"
      placeholder="Filter by name..."
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    />
    <Line data={chartConfig} />
  </div>
);
}

export default Timeline;