// Importo useState y useEffect de React para manejar el estado y efectos secundarios
import { useState ,useEffect } from "react";
// Importo el componente CircularProgress desde Material-UI
// CircularProgress muestra un indicador de carga en forma de círculo, útil para indicar que una operación está en progreso
import { CircularProgress } from "@mui/material";
// Importo los estilos CSS específicos para el componente Astros desde el archivo "Astros.css"
import "./Apod.css";

function Apod() {
    const [apod, setApod] = useState(null); // Estado para almacenar la respuesta de la API
    const [loading, setLoading] = useState(true); // Estado para saber si los datos están siendo cargados

    // URL de la API para obtener la imagen del día
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=EEUIAgEsNEAAZcM9afYOQKUtdOhUkLl0FHhmDFx6"; // Reemplaza con tu propia API key

    // useEffect para realizar la petición fetch cuando el componente se monte
    useEffect(() => {
        // Función asíncrona para obtener los datos
        const fetchApod = async () => {
            try {
                const response = await fetch(API_URL); // Realizamos la petición
                const data = await response.json(); // Convertimos la respuesta a JSON
                setApod(data); // Guardamos los datos en el estado
                setLoading(false); // Terminamos el estado de carga
            } catch (error) {
                console.error("Error fetching APOD data", error);
                setLoading(false);
            }
        };

        fetchApod(); // Llamamos a la función para hacer la petición
    }, []); // Empty array para ejecutar solo una vez cuando se monta el componente
    return (
        <div className="apod-container">
            {loading ? (
                <CircularProgress sx={{color: "beige"}} />
            ) : (
                apod && (
                    <div className="apod-card">
                        <h2 className="apod-title">{apod.title}</h2>
                        {/* Mostrar la fecha aquí */}
                        <p className="apod-date">{apod.date}</p>
                        <img className="apod-image" src={apod.url} alt={apod.title} />
                        {/*<p className="apod-description">{apod.explanation}</p>*/}
                    </div>
                )
            )}
        </div>
    );
}

export default Apod;
