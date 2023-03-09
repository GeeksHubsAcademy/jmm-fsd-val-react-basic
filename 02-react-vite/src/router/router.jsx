
import {  createBrowserRouter } from "react-router-dom";
import { Persona } from "../components/Persona";
import { Saludo } from "../components/Saludo";


export const rutas = createBrowserRouter([
    {
      path: "/",
      element: <Saludo/>,
    },
    {
      path: "persona",
      element: <Persona/>,
    },
  ]);