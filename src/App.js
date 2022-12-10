import './App.css';
import React from 'react';

// Importación de un componente que usa Hooks para pasar el parametro mediante
// el contexto
import Username from './components/Username';

// Con esta declaración se crea un contexto que queda exportado para toda la 
// aplicación
export const UserContext = React.createContext();

function App() {
  return (
    // Aquí se le asigna un valor al contexto llamado UserContext
    <UserContext.Provider value="LeoSanMx"> 
      <Username/>
    </UserContext.Provider>
  );
}

export default App;
