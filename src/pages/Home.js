import React, { useState, useEffect } from 'react';
import {
  FaReact,
  FaRoute,
  FaCogs,
  FaNetworkWired,
  FaChartLine,
  FaPalette,
  FaTools,
  FaChartBar,
  FaDatabase,
  FaDev,
} from 'react-icons/fa';
import Chart from 'chart.js/auto'; 

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const descriptions = {
    react: 'React foi utilizado para criar interfaces de usuário dinâmicas e responsivas, permitindo a criação de componentes reutilizáveis.',
    router: 'React Router DOM foi utilizado para gerenciar a navegação entre diferentes páginas da aplicação de forma declarativa.',
    query: 'React Query foi utilizado para gerenciar o estado e o cache de dados assíncronos, facilitando a integração com APIs externas.',
    redux: 'Redux, opcionalmente, foi utilizado para gerenciamento de estado centralizado, ideal para aplicações com estados complexos.',
    axios: 'Axios foi utilizado como cliente HTTP para fazer requisições a APIs, permitindo a comunicação com servidores.',
    sass: 'Sass (SCSS) foi utilizado como pré-processador CSS para estilização avançada, proporcionando um design moderno e organizado.',
    chartjs: 'Chart.js foi utilizado para criar gráficos interativos, ajudando na visualização de dados complexos de forma intuitiva.',
    chartjs2: 'React-Chartjs-2 integrou Chart.js com React, permitindo a criação de gráficos dentro dos componentes React.',
    icons: 'React Icons foi utilizado para adicionar ícones aos componentes, melhorando a interface visual da aplicação.',
    devtools: 'React Query Devtools foi utilizado como ferramenta de desenvolvimento para depurar e otimizar consultas de dados.',
  };

  const handleCardClick = (key) => {
    setSelectedCard(key);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  // Função para renderizar o conteúdo do modal com base em qual card foi clicado
  const renderModalContent = () => {
    if (selectedCard) {
      return (
        <div className="modal-content">
          <h3>{selectedCard}</h3>
          <p>{descriptions[selectedCard]}</p>
          {/* Exemplo básico de gráfico */}
          {selectedCard === 'chartjs' && (
            <div className="chart-container">
              <canvas id="myChart" width="400" height="400"></canvas>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  // Configuração Chart.js
  const setupChart = () => {
    if (selectedCard === 'chartjs') {
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };

  // Executa a funcao de config do Chart.js
  useEffect(() => {
    setupChart();
  }, [selectedCard]);

  return (
    <main className="home-main">
      <section className="hero">
        <div className="hero-content">
          <h2>Clique em um card para exibir mais informações.</h2>
        </div>
      </section>

      <section className="info-section">
        {Object.keys(descriptions).map((key) => (
          <div key={key} className="info-card" onClick={() => handleCardClick(key)}>
            <h3>{getIcon(key)} {key.charAt(0).toUpperCase() + key.slice(1)}</h3>
          </div>
        ))}
      </section>

      {/* Modal para exibir a descrição detalhada */}
      {selectedCard && (
        <div className="modal">
          <div className="modal-content">
            {renderModalContent()}
            <button className="modal-close" onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
    </main>
  );
};

// Função para obter o ícone
const getIcon = (key) => {
  switch (key) {
    case 'react':
      return <FaReact />;
    case 'router':
      return <FaRoute />;
    case 'query':
      return <FaCogs />;
    case 'redux':
      return <FaDatabase />;
    case 'axios':
      return <FaNetworkWired />;
    case 'sass':
      return <FaPalette />;
    case 'chartjs':
      return <FaChartBar />;
    case 'chartjs2':
      return <FaChartLine />;
    case 'icons':
      return <FaTools />;
    case 'devtools':
      return <FaDev />;
    default:
      return null;
  }
};

export default Home;
