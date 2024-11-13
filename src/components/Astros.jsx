// Importo useState y useEffect de React para manejar el estado y efectos secundarios
import { useState ,useEffect } from "react";
// Importo el componente CircularProgress desde Material-UI
// CircularProgress muestra un indicador de carga en forma de círculo, útil para indicar que una operación está en progreso
import { CircularProgress } from "@mui/material";
// Importo los estilos CSS específicos para el componente Astros desde el archivo "Astros.css"
import "./Astros.css";


//*----------Definir la card astro-------------
// Defino el componente AstroCard que recibe 'name' y 'craft' como props
// 'name' será el nombre del astronauta y 'craft' será la nave o estación a la que pertenece
function AstroCard({ name, craft }) {
    return ( 
        /* Contenedor principal para la tarjeta del astronauta. Utiliza la clase 'astro-card' para aplicar estilos específicos a este componente.*/
        <div className="astro-card">
            {/* Párrafo que muestra el nombre del astronauta. La clase 'astro-name' se usa para aplicar estilos específicos al nombre */}
    
            <p className="astro-name">{name}</p>

            {/* 
            Párrafo que muestra la nave o estación a la que pertenece el astronauta. 
             La clase 'astro-craft' se usa para aplicar estilos específicos al 'craft'.
            */}
            <p className="astro-craft">{craft}</p>
        </div>
    );
}

function Astros(){
     // Defino la URL de la API para obtener los datos sobre los astronautas en el espacio
    const API_URL ="http://api.open-notify.org/astros.json";
    // Inicializo el estado 'astros' con 'null', que se actualizará más tarde con los datos de la API
    const [astros, setAstros] = useState(null);
    // Usamos useEffect para ejecutar la solicitud a la API solo una vez cuando el componente se monta
    useEffect(() => {
        // Definimos una función asíncrona para obtener los datos de la API
        const fetchData = async () => {
            // Hacemos una solicitud fetch a la API
            const data = await fetch(API_URL); 
            // Convertimos la respuesta en formato JSON
            const rest = await data.json();
            // Actualizamos el estado 'astros' con los datos de la API
            setAstros(rest.people); // 'people' contiene la lista de astronautas
        }

        // Ejecutamos la función fetchData() que realiza la solicitud a la API para obtener los datos de los astronautas.
        // Usamos .catch() para manejar cualquier error que pueda ocurrir durante la ejecución de la función asíncrona fetchData().
        // Si ocurre un error (como problemas de red o respuesta inválida), se captura el error y se imprime en la consola para su depuración.
        fetchData().catch((err) => console.error(err));
    },  []);

    return (
        // Contenedor principal para mostrar los astronautas. La clase 'astro-container' se usa para los estilos de contención.
        <div className="astro-container">
            {/*Si 'astros' es nulo o undefined (lo que significa que los datos aún no se han cargado),*/}
            {/* mostramos el mensaje "Loading...". Esto es útil para mostrar una indicación visual mientras se espera la respuesta de la API.*/}
            {!astros ? (
                //<p>Loading...</p> // Mensaje que se muestra mientras se carga la información de los astronautas
                // Utilizo CircularProgress de Material-UI y personalizo su color con la propiedad 'sx' para establecer el color 'beige'
                // Muestra un indicador de carga circular con color personalizado (beige)
                <CircularProgress sx={{color: "beige"}} />
            ) : (
                 // Si 'astros' tiene datos, iteramos sobre él usando map() para renderizar un componente AstroCard para cada astronauta.
                 // Para cada astronauta, se renderiza un componente AstroCard.
                 // Se pasa un valor único 'key' basado en el índice y se propagan todas las propiedades de 'astro' con el spread operator '...astro'.
                astros.map ((astros, idx) => <AstroCard key={idx} {...astros} />)
            )}
            {/* Iteramos sobre el array 'astros' para renderizar un componente 'AstroCard' por cada astronauta.Utilizamos 'map' para recorrer los elementos de 'astros' y para cada uno, renderizamos un 'AstroCard'. 'key' es necesario para cada elemento de la lista en React para asegurar un manejo eficiente del DOM.'...astro' pasa todas las propiedades del objeto 'astro' como props a 'AstroCard'.   
            //*{astros.map ((astros, idx) => (
                // Renderizamos el componente 'AstroCard' pasando las propiedades del astronauta
                //<AstroCard key= {idx} {...astro} />
            /*))}*/}
        </div>
    );
}

//Exporto el componente para usarlo en otros archivos
export default Astros;