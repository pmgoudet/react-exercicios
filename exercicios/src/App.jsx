
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


import { useState } from 'react'
import './App.css'

function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mostra, setMostra] = useState(false)

  const defineNome = (e) => {
    setNome(e.target.value)
  }

  const defineEmail = (e) => {
    setEmail(e.target.value)
  }

  const sub = (event) => {
    event.preventDefault()
    setMostra(!mostra)

    setNome('')
    setEmail('')
  }


  return (
    <form onSubmit={sub}>
      <input type="text" placeholder='nome' onChange={defineNome}/><br />
      <input type="text" placeholder='email' onChange={defineEmail}/> <br />
      {mostra && <button type="submit" >Enviar</button>}

      {mostra && <p>"Olá, {nome}! Seu email é {email}."</p>}
    </form>
  )
}

export default App