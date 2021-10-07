import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// importamos nuestro componente App
import { App } from "./App"



// function componente, siempre debe ir en mayuscula ya que en minuscula esta reservado por react
// props son propiedades de un objeto, de lo que le estamos pasando directo del dom
// podemos estrucutrar en vez de props con construc como atributos
// todo lo que este dentro del componente se debe pasar como children
// function Componente({titulo, children}){
//   // const titulo = props.titulo
//   // const contenido = props.contenido
//   // constructor, es lo mismo que las const
//   // const {titulo, contenido} = props;
//   return (
//     // class en jsx es con classname
//   <div className="contenedor">
//     <h1>{titulo}</h1>
//     <div>{children}</div>
// </div>)
// }

// componentes podemos pasarse atributos
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
