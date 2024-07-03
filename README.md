# Dashboard React

## Sobre o Projeto

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

### Tecnologias Utilizadas

- **React**: Utilizado para a construção da interface do usuário, permitindo a criação de componentes reutilizáveis.
- **React Router DOM**: Gerencia a navegação entre diferentes páginas da aplicação de forma declarativa.
- **React Query**: Gerencia o estado e o cache de dados assíncronos, facilitando a integração com APIs externas.
- **Chart.js e React-Chartjs-2**: Utilizados para criar gráficos interativos e visualizar dados complexos de forma intuitiva.
- **Axios**: Cliente HTTP utilizado para fazer requisições à API PokeAPI, permitindo a comunicação com servidores externos.
- **Sass (SCSS)**: Utilizado como pré-processador CSS para estilização avançada, proporcionando um design moderno e organizado.
- **React Icons**: Adiciona ícones aos componentes, melhorando a interface visual da aplicação.
- **React Query Devtools**: Ferramenta de desenvolvimento para depurar e otimizar consultas de dados com React Query.

### Funcionalidades

- Exibe cards informativos sobre diferentes tecnologias e bibliotecas utilizadas no projeto.
- Ao clicar em um card específico, exibe uma descrição detalhada da tecnologia, incluindo um gráfico relacionado (se aplicável).
- Utiliza Axios para buscar e exibir dados de Pokémon da API PokeAPI, demonstrando integração com APIs externas.

## Instruções de Execução

No diretório do projeto, você pode executar os seguintes comandos:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página recarrega automaticamente ao fazer alterações.\
Erros de lint serão exibidos no console.

### `npm test`

Executa o executor de testes no modo interativo de observação.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Empacota corretamente o React em modo de produção e otimiza a construção para melhor desempenho.

Os arquivos são minificados e os nomes de arquivo incluem hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação unilateral. Uma vez que você `eject`, não pode voltar atrás!**

Se não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência de construção única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc.) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por conta própria.

Você não é obrigado a usar `eject`. O conjunto de recursos curado é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.
