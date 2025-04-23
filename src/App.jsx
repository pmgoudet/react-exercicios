//! EXERCICIO 1 /////////////////////////////////////////////////////////

// import { useState } from 'react'
// import './App.css'

// function App() {

//   let [numero, setNumero] = useState(0);

//   const soma = () => {
//     setNumero(numero+1);
//   }

//   const subtrai = () => {
//     if(numero > 0) {
//       setNumero(numero-1);
//     }
//   }

// modelo gpt: ------------------------------------------------------

// const soma = () => {
//   setNumero(prev => prev + 1);
// }

// const subtrai = () => {
//   setNumero(prev => (prev > 0 ? prev - 1 : 0));
// }
//--------------------------------------------------------------------

//   const reset = () => {
//       setNumero(0);
//   }

//   return (
//     <div>
//       <p>{numero}</p>
//       <button onClick={subtrai}>-</button>
//       <button onClick={soma}>+</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App

//! EXERCICIO 2 /////////////////////////////////////////////////////////

// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [checked, setChecked] = useState (false)

//   const verificar = () => {
//     setChecked(!checked)
//   }

//   return (
//     <div>
//       <input type="checkbox" onChange={verificar}/>
//       <p>{checked ? 'Marcado' : 'Desmarcado'}</p>
//     </div>
//   )
// }

// export default App

//! EXERCICIO 3 /////////////////////////////////////////////////////////

// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [texto, setTexto] = useState('Por favor, digite algo')

//   const atualizaTexto = (e) => {
//     setTexto(e.target.value);
//   }

//   return (
//     <div>
//       <input type="text" onChange={atualizaTexto}/>
//       <p>{texto}</p>
//     </div>
//   )
// }

// export default App

//! EXERCICIO 4 /////////////////////////////////////////////////////////

// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [mostrado, setMostrado] = useState(true)

//   const mostrarEsconder = () => {
//     setMostrado(!mostrado)
//   }

//   return (
//     <div>
//         <p style={{ display: mostrado ? 'block' : 'none' }}>texto</p>
//         <button onClick={mostrarEsconder}>{ mostrado ? 'Esconder' : 'Mostrar' }</button>
//     </div>
//   )
// }

// export default App

//! EXERCICIO 5 /////////////////////////////////////////////////////////

// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [name, setName] = useState ('')
//   const [nameFinal, setNameFinal] = useState ('')
//   const [email, setEmail] = useState ('')
//   const [emailFinal, setEmailFinal] = useState ('')
//   const [mostra, setMostra] = useState (false)

//   const pegaNome = (e) => {
//     setName(e.target.value)
//   }

//   const pegaEmail = (e) => {
//     setEmail(e.target.value)
//   }

//   const sub = (e) => {
//     e.preventDefault()
//     name && email ? setMostra(true) : setMostra(false)
//     setNameFinal(name)
//     setEmailFinal(email)
//   }

//   return (
//     <div>
//       <form onSubmit={sub}>
//         <input type="text" placeholder='name' onChange={pegaNome}/><br />
//         <input type="text" placeholder='email' onChange={pegaEmail}/><br />
//         <button type='submit'>Submit</button>
//       </form>
//       {mostra && <p>Olá, {nameFinal}! Seu email é {emailFinal}.</p>}
//     </div>
//   )
// }

// export default App

//! EXERCICIO 6 /////////////////////////////////////////////////////////

// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [task, setTask] = useState('')
//   const [tasks, setTasks] = useState([])

//   const saveTask = (e) => {
//     setTask(e.target.value)
//   }

//   const add = (e) => {
//     e.preventDefault()
//     task && setTasks([...tasks, task])
//     setTask('')
//     console.log(tasks)
//   }

//   return (
//     <div>
//         <form onSubmit={add}>
//           <input type="text" placeholder='Crie sua task' onChange={saveTask} value={task}/><br />
//           <button type='submit'>Adicionar</button>
//         </form>
//         <ul>
//           {tasks.map(task => (
//             <li>{task}</li>
//           ))}
//         </ul>
//     </div>
//   )
// }

// export default App

//! EXERCICIO 7 /////////////////////////////////////////////////////////

// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [valor, setValor] = useState(0)
//   const [msg, setMsg] = useState('')

//   const soma = () => {
//     valor<10 ? (setValor(valor+1), setMsg('')) : setMsg('Valor máximo atingido')
//   }

//   const subtrai = () => {
//     valor>0 ? (setValor(valor-1), setMsg('')) : setMsg('Valor mínimo atingido')
//   }

//   return (
//     <div>
//       <p>{valor}</p>
//       <button onClick={subtrai}>-</button>
//       <button onClick={soma}>+</button>
//       <p>{msg}</p>
//     </div>
//   )
// }

// export default App

//! EXERCICIO 8 /////////////////////////////////////////////////////////

// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [msg, setMsg] = useState('Olá!')

//   const troca = () => {
//     msg === 'Olá!'? setMsg('Tchau') : setMsg('Olá!')
//   }

//   return (
//     <div>
//       <p>{msg}</p>
//       <button onClick={troca}>Trocar mensagem</button>
//     </div>
//   )
// }

// export default App

//todo AQUI AUMENTA A DIFICULDADE

//! EXERCICIO 9 /////////////////////////////////////////////////////////

import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [operacao, setOperacao] = useState("");

  return (
    <div>
      <button value={"="}>=</button>
      <br />
      <br />
      <button value={1}>1</button>
      <button value={2}>2</button>
      <button value={3}>3</button>
      <br />
      <button value={4}>4</button>
      <button value={5}>5</button>
      <button value={6}>6</button>
      <br />
      <button value={7}>7</button>
      <button value={8}>8</button>
      <button value={9}>9</button>
      <br />
      <button value={0}>0</button>
      <br />
      <br />
      <button value={"+"}>+</button>
      <button value={"-"}>-</button>
      <button value={"*"}>*</button>
      <button value={"/"}>/</button>
      <br />
      <br />

      <p>Resultado: </p>
    </div>
  );
}

export default App;
