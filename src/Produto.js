import React, { useEffect } from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((data) => setDados(data));
    }
  }, [produto]);

  if (dados === null) return null;

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.descricao}</p>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produto;
