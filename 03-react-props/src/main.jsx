import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './layout/home';
import { persona } from './data/dataBase';
import './index.css';


const data = [1,2,3,4,5];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home pepe={data} titulo='Ejemplo de titulo' persona={persona} salario={3000}/>
  </React.StrictMode>,
)
