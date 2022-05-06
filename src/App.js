import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css';
import cepapi from './services/cepapi';

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});

 async function handleSearch(){

    if(input === ''){
    alert("Preencha o CEP")
    return;
   }
    try{
        const response = await cepapi.get(`${input}/json`);//espera a resposta da api cepapi
        setCep(response.data)
        setInput("") 
  }catch{
    alert("Ops erro!");
    setInput("")
  }
  
 }
  return (
    <div className="container">
      <h1 className="title">TESTE PROJETO</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP ... " value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="buttonSearch"><FiSearch size="25" color='000' onClick={handleSearch}/></button>
      </div>

    {Object.keys(cep).length > 0 && (
      <main className="buttonSearch">
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro}</span>   
        <span>{cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}</span>
      </main>

)}

      </div>
  );
}

export default App;
