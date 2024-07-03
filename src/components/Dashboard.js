import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { RiLoader4Line } from 'react-icons/ri'; 

const fetchChuckNorrisFact = async () => {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    return response.data.value;
  } catch (error) {
    console.error('Erro ao buscar fato de Chuck Norris:', error);
    return 'Erro ao buscar fato de Chuck Norris.';
  }
};

function Dashboard() {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChuckNorrisFacts = async () => {
      setIsLoading(true);
      try {
        const fetchedFacts = await Promise.all(Array.from({ length: 6 }, () => fetchChuckNorrisFact()));
        setFacts(fetchedFacts);
      } catch (error) {
        setError('Erro ao carregar fatos de Chuck Norris.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchChuckNorrisFacts();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-message">
        <RiLoader4Line className="loading-icon" /> 
      </div>
    );
  }
  if (error) return <div className="error-message">{error}</div>;

  const chartData = {
    labels: ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5', 'Fact 6'],
    datasets: [
      {
        label: 'Número de Facts',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: Array.from({ length: 6 }, (_, index) => index + 1),
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard com Chuck Norris API</h2>

      {/* Gráfico de barras */}
      <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>

      {/* Exibindo dados em cards */}
      <div className="cards-container">
        {facts.map((fact, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">Chuck Norris Fact {index + 1}</h5>
              <p className="card-text">{fact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
