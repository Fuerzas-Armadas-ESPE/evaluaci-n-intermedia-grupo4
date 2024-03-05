import './App.css'
//importando los modulos de firebase
import appFirebase from './credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

const auth = getAuth(appFirebase)


import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {

    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return (
    <div className="App">
      {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}

    </div>
  );
}

export default App
