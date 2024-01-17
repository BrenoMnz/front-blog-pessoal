import './Home.css'
import { useState, useEffect } from 'react';

//Props, tem que colocar no menu tbm
/*interface meusProps {
  title: string;
  description: string;
}*/

const Home = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  //useEffect
  /*const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completed])*/

  return (
    //Props
    /*<>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </>*/
    
    //useEffect
    /*<div>
      <h1>Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir tarefa</button>
    </div>*/
    
    <div>
      {loggedIn ? (
        <h1>Bem vindo de volta!</h1>
      ):(
        <button onClick={() => setLoggedIn(true)}>Entrar</button>
      )
      }
    </div>
  )
}

export default Home