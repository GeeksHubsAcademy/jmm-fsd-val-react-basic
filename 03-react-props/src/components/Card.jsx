import React from 'react'

export const Card = ({datHome}) => {
  return (
    <>
    <h1>Card</h1>
    <hr />
    <code>{JSON.stringify(datHome)}</code>
    <ol>
        {datHome.map(persona=> {return <li key={persona.id}>{JSON.stringify(persona)}</li>})}
    </ol>
    </>
  )
}
