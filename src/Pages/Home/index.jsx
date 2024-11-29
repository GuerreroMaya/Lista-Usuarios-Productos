import React from 'react';
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="display-4">Home Page</h1>
        
        <h2 className="mt-3">
          <Typewriter
            options={{
              strings: [
                "Ejercicio ReactJS",
                "Listas de Usuarios y Productos",
                "React Hooks y Componentes Router Dom",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h2>

        <p className="mt-4">
          <strong>Hooks de React utilizados:</strong> <br />
          <em>useState, useEffect</em>
        </p>
        <p>
          <strong>Componentes de React Router Dom:</strong> <br />
          <em>BrowserRouter, Routes, Route, Link</em>
        </p>
        <p>
          <strong>Estructura en carpetas:</strong> <br />
          <em>Components, Pages</em>
        </p>
        <p>
          <strong>Fetch Async a las APIs:</strong> <br />
          <em>randomuser.me y fakestoreapi.com</em>
        </p>
      </div>
    </div>
  );
}

export default Home;