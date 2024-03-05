import React from 'react'
import Imagen from '../assets/login.webp'
import { useState } from 'react'
import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(appFirebase)

export const Login = () => {
    const [registrando, setRegistrando] = useState(false)

    const funcAuth = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        // Validación de campos vacíos
        if (!email || !password) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Validación de formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        // Validación de longitud de contraseña
        if (password.length < 6) { // Cambia 6 por la longitud mínima deseada
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert('¡Usuario registrado con éxito!');
            } catch (error) {
                alert('El correo ya está registrado o ha ocurrido un error.');
                e.target.email.value = ''; // Vaciar campo de correo
                e.target.password.value = ''; // Vaciar campo de contraseña
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                //alert('¡Inicio de sesión exitoso!');
            } catch (error) {
                alert('Usuario o contraseña incorrectos.');
                e.target.email.value = ''; // Vaciar campo de correo
                e.target.password.value = ''; // Vaciar campo de contraseña
            }
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <h2 style={{ padding: '20px', color: '#8758ff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>TASKMANAGER G4</h2>
                            <form onSubmit={funcAuth}>
                                <input id='email' type="text" placeholder='Email' className='caja-texto' />
                                <input id='password' type="password" placeholder='Password' className='caja-texto' />
                                <button className='btnForm'>{registrando ? "Registrarse" : "Iniciar Sesión"}</button>
                            </form>
                            <h6 className='taxto'>{registrando ? "Si ya tienes cuenta " : "No tienes cuenta? "}<button className='btnForm2' onClick={() => setRegistrando(!registrando)}>{registrando ? "Iniciar sesión" : "Registrarse"}</button></h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={Imagen} alt="Login img" className='tamano-imagen' />
                </div>
            </div>
        </div>
    )
}

export default Login