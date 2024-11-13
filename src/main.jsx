// Importo StrictMode para activar verificaciones adicionales durante el desarrollo
import { StrictMode } from 'react';

// Importo BrowserRouter para manejar el enrutamiento en la aplicación
import { BrowserRouter } from 'react-router-dom';

// Importo createRoot para renderizar la aplicación en el DOM
import { createRoot } from 'react-dom/client';

// Importo el archivo CSS global para la aplicación
import './index.css';

// Importo el componente principal de la aplicación
import App from './App.jsx';

// Renderizo la aplicación en el DOM utilizando createRoot
createRoot(document.getElementById('root')).render(
  // StrictMode activa verificaciones adicionales para detectar posibles errores
  <StrictMode>
    {/* BrowserRouter envuelve la aplicación para manejar el enrutamiento */}
    <BrowserRouter>
    {/* Renderizo el componente principal de la aplicación */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
