// Importo el componente Navbar desde la carpeta components
import Navbar from './components/Navbar.jsx';
import Astros from './components/Astros.jsx';
import Apod from './components/Apod.jsx';
import About from './components/About.jsx';
// Importo Routes y Route de react-router-dom para gestionar el enrutamiento en la aplicación
import { Routes , Route } from 'react-router-dom';
// Importo los estilos css de la aplicación
import './App.css';


// Defino el componente principal de la aplicación
function App() {
  // Defino un arreglo de objetos que representa los enlaces para el menú de navegación
  const links = [
    // Enlace a la página principal (home)
    { href: '/', text: 'home' },

    // Enlace a la página de astros
    { href: '/astros', text: 'astros' },

    // Enlace a la página del APOD (Astronomy Picture of the Day)
    { href: '/apod', text: 'apod' },

    { href: '/about', text: 'about' }

  ];

  return (
    <> {/* Fragmento de React que permite agrupar elementos sin crear un nodo extra en el DOM */}
      {/* Ejemplo de uso de <div> para comentar dentro del return */}
      {/*<div> </div>  para comentar dentro return*/}
      {/*<Navbar />*/} {/* Renderizo el componente Navbar */}

      <Navbar links={links} /> {/*Renderizo el componente Navbar y paso el arreglo 'links' como una prop */}
      <Routes>
          <Route element={<Astros />} path='/astros' />
          <Route element={<Apod />} path='/apod' />
          <Route element={<About />} path='/about' />
      </Routes>
       {/*<Astros />*/}
    </> /*Fragmento de react y Cierro el fragmento de React */
  );
}

// Exporto el componente App para usarlo en otros archivos
export default App;
