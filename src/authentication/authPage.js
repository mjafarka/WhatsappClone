import React, { useState } from 'react'

import './style.scss'
import logo from '../resources/app_logo.png'
import { signIn, signUp } from '../firebase/fireBaseApi';
import { useUserDispatcher } from '../context/UserContext';

function AuthPage() {
    const [newUserLogin, setNewUserLogin] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const logUser = useUserDispatcher();
    const signUser = async () => {
        let user;

        // signup and sign in need to return user object with name, id, profLoc, email_id
        if (newUserLogin) {
            user = await signUp({
                userName: name,
                emailId: email,
                password: password,
                profileLoc: '/user/drive'
            });
        } else {
            user = await signIn(email, password);
            console.log("user ", user);
        }
        logUser({type: 'getIn', ...user})
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