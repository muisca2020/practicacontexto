import './App.css';
import React from 'react';

// Con esta declaración se crea un contexto que queda exportado para toda la 
// aplicación
export const UserContext = React.createContext();

function App() {
  return (
    // Aquí se le asigna un valor al contexto llamado UserContext
    <UserContext.Provider value="Leo"> 
      <User/>
    </UserContext.Provider>
  );
}

function User(){
  return (
    // Aquí se consume el contenido de la variable de contexto llamada
    // UserContext
    <UserContext.Consumer>
      { value => <h1>{value}</h1> }
    </UserContext.Consumer>
  )
}

export default App;
