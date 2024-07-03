import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const fetchPostsData = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function Dashboard() {
  const { data, error, isLoading } = useQuery('postsData', fetchPostsData);

  if (isLoading) return <div>Carregando informações...</div>;
  if (error) return <div>Erro: Informações não carregadas. {error.message}</div>;

  // Preparando dados para o gráfico de barras (neste caso, contando o número de posts por usuário)
  const userPostCounts = data.reduce((acc, post) => {
    acc[post.userId] = (acc[post.userId] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(userPostCounts).map(userId => `User ${userId}`),
    datasets: [
      {
        label: 'Número de Posts',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: Object.values(userPostCounts),
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>

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
        {data.slice(0, 6).map(post => (
          <div className="card" key={post.id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
