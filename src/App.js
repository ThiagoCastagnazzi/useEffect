import { useEffect, useState } from 'react';
import Produto from './Produto';

function App() {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) {
      setProduto(produtoLocal);
    }
  }, []);

  useEffect(() => {
    if (produto !== null) {
      window.localStorage.setItem('produto', produto);
    }
  }, [produto]);

  function handleClick(event) {
    setProduto(event.target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={produto} />
    </div>
  );
}

export default App;
