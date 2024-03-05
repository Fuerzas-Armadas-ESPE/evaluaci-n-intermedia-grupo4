import React from 'react'
import { TodoWrapper } from './TodoWrapper'
import { TodoTask } from './TodoTask'

import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(appFirebase)

export const Home = ({ correoUsuario }) => {
    return (
        <div>
            <h2 className='textoHome'> Bienvenido: <span className='textoHome1'>{correoUsuario}</span>  <button className='bnt bnt-primary' onClick={() => signOut(auth)}>Salir</button></h2>

            <TodoTask />
            <TodoWrapper />
        </div>
    )
}

export default Home