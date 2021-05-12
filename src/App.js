import React, { useEffect, useState } from 'react';
import './App.css';
import ListaProdutos from './componentes/ListaProdutos';
import hoc from './componentes/hoc';
import axios from 'axios';

function App() {
  const CarregandoProdutos = hoc(ListaProdutos);
  const [estadoDaAplicacao, setEstadoDaAplicacao] = useState({
    consultando: false,
    produtos: null,
  });

  useEffect(() => {
    setEstadoDaAplicacao({ consultando: true });
      axios.get("https://animechan.vercel.app/api/quotes")
       .then((res) =>{
        console.log(res.data)
        setEstadoDaAplicacao({ consultando: false, produtos: res.data});
      });
  }, [setEstadoDaAplicacao]);
  
  return (
    <div className='App'>
        <CarregandoProdutos isLoading={estadoDaAplicacao.consultando} produtos={estadoDaAplicacao.produtos} />
    </div>
  );
}
export default App;