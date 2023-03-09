
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

let nombre = 'Jose';

export const Persona = () => {
  return (
    <>
    <h1>{ nombre }</h1>
    <Button variant="warning">Warning</Button>
    </>
  )
}
