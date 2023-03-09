import React, { useState } from 'react';
import './Counter.css';

export const Counter = () => {

    const [valor, setValor] = useState(1);

    // let valor = 1;

    const sumaUno = ()=> {
        console.log('+1');
        setValor(valor + 1);
        console.log(valor);
    };

    const restaUno = ()=> {
        setValor(valor - 1);
    };

    const reiniciar = ()=> {
        setValor(0);
    };

  return (
    <>
    <h1>Counter</h1>
    <hr />
    <p>{valor}</p>
    <button className="btn btn-primary" onClick={sumaUno}>+1</button>
    <button className="btn btn-primary" onClick={restaUno}>-1</button>
    <button className="btn btn-primary" onClick={reiniciar}>Reinicia</button>
    </>
  )
}
