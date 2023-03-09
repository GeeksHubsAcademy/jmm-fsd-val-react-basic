import React, { useState } from 'react';
import './UserForm.css';

export const UserForm = () => {

    let user = {
        username: 'Jose',
        email: 'email@email.com'
    };

    const [valor, setValor] = useState(user);//Hook useState
    const {email, username} = valor;

    const newValue = ({target})=>{
        console.log(target);
        
        const {name, value} = target;
        setValor({...valor,
            [name]:value
            }    
        );
        
    }

  return (
    <>
    <h1>UserForm</h1>
    <hr />
    <input type="text" 
        name="username" 
        placeholder='username'
        value={username}
        onChange={newValue}
        />
    <input type="text" 
        name="email" 
        placeholder='email@email.com'
        value={email}
        onChange={newValue}
        />
    
    </>
  )
}
