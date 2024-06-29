import React, { useState } from 'react'

import './style.scss'
import logo from '../resources/app_logo.png'
import { signIn, signUp } from '../firebase/fireBaseApi';

function AuthPage() {
    const [newUserLogin, setNewUserLogin] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signUser = async () => {
        signUp({
            userId: 1,
            username: name,
            emailid: email,
            password: password,
            profileloc: '/user/drive'
        })
        console.log("email", email);
    }

    return (
        <div className='bg-gray-100 h-screen'>
            <div className='card'>
                <h1 className='heading'>Welcome!</h1>
                <img src={logo} alt='dragon_logo' className='logo' />
                {/* name and passwords */}
                <div className='inputs'>
                    {newUserLogin ? <input type='text' placeholder='Name' onChange={e => setName(e.target.value)}/> : ""}
                    <input type='text' placeholder='E-mail ID' onChange={(e) => setEmail(e.target.value)}/>
                    <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={() => signUser()}>{newUserLogin ? 'Sign Up' : 'Sign In'}</button>
                </div>
                {newUserLogin ? <h6>Already a user? <span className='alternate' onClick={() => setNewUserLogin(!newUserLogin)}>&nbsp;Sign In</span></h6>
                    : <h6>Create Account ? <span className='alternate' onClick={() => setNewUserLogin(!newUserLogin)}>&nbsp;Sign Up</span></h6>}
            </div>
        </div>
    )
}

export default AuthPage