// Importo useState y useEffect de React para manejar el estado y efectos secundarios
import { useState, useEffect } from "react";
// Importo el componente CircularProgress desde Material-UI
// CircularProgress muestra un indicador de carga en forma de círculo, útil para indicar que una operación está en progreso
import { CircularProgress } from "@mui/material";
// Importo los estilos CSS específicos para el componente Astros desde el archivo "Astros.css"
import "./About.css";

function About() {
    // Estado para manejar si los datos están cargando o si ya han sido obtenidos
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
  
    // UseEffect para simular la carga de datos (por ejemplo, información del usuario o de una API)
    useEffect(() => {
      // Simulamos una carga de datos, por ejemplo, obteniendo información de un servidor
      setTimeout(() => {
        // Simulamos la carga de los datos y luego los actualizamos
        setUserInfo({
          name: 'David Arturo Rojas Lopez',
          edad: '24',
          nacimiento: '19/05/2000',
          email: 'davidarturo.rojas571@gmail.com',
          telefono: '55-60-68-61-17',
          description: 'Soy Desarrollador Full-stack Jr. con un fuerte deseo de aprender y crecer. Mis cualidades incluyen honestidad, persistencia y compromiso, que me ayudan a aplicar eficazmente los conocimientos adquiridos. Me motiva el entusiasmo, el amor por el aprendizaje y el trabajo en equipo.'
        });
        setLoading(false); // Terminamos de cargar los datos
      }, 2000); // Simulamos un retraso de 2 segundos
    }, []); // El useEffect se ejecuta una sola vez cuando el componente se monta
  
    return (
      <div className="about-container">
        {loading ? (
          <div className="loading-container">
            <CircularProgress color="beige" /> {/* Muestra el spinner de carga */}
          </div>
        ) : (
          <div className="about-card">
            <h2>About</h2>
            {/* Muestra la información una vez que está cargada */}
            <img src="src/assets/Perfil.png" alt="Foto de perfil" className="about-foto" />
            <p><strong>Nombre:</strong> {userInfo.name}</p>
            <p><strong>Edad:</strong> {userInfo.edad}</p>
            <p><strong>Fecha nacimiento:</strong> {userInfo.nacimiento}</p>
            <p><strong>Correo:</strong> {userInfo.email}</p>
            <p><strong>Tel:</strong> {userInfo.telefono}</p>
            <p><strong>Descripción:</strong> {userInfo.description}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default About;