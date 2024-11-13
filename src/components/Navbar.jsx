import { Link } from "react-router-dom";
import "./Navbar.css";
// Defino el componente NavButton que recibe 'href' y 'text' como props
function NavButton(props) {
    // Retorno un enlace (<a>) con la clase CSS 'nav-btn', usando 'href' y 'text' de las props
    // Renderizo un enlace (<a>) con una clase CSS 'nav-btn', el href y el texto proporcionado como props
    /*<a className="nav-btn" href={props.href}>
            {props.text} {/* Muestra el texto que se pasa como prop */
    return (
        // Renderizo un enlace (<a>) con una clase CSS 'nav-btn', el href y el texto proporcionado como props
        /*<a className="nav-btn" href={props.href}>
            {props.text} /* Muestra el texto que se pasa como prop */
        /*</a> */ 

        // Utilizo el componente Link de react-router-dom para la navegación sin recargar la página
        // 'to' especifica la ruta a la que se navega, y 'props.text' muestra el texto dentro del enlace
        <Link className="nav-btn" to={props.href}>
            {/* Muestra el valor de 'text' recibido como prop en el componente*/}
            {props.text}
        </Link>
    );
}
// Defino el componente Navbar, que representa la barra de navegación
//function Navbar(props) {
function Navbar({ links }) {
    // Retorno de un encabezado h1 que muestra el texto "Prueba
    //return <h1>Prueba</h1>
    // Imprimo en la consola el contenido de la prop 'links' para depuración
    //console.log(props.links)
    // Imprimo en la consola el contenido de la variable 'links' para depuración
    console.log(links);
    // Defino la constante 'title' que almacenará el nombre o título de la aplicación
    const title = "space-app";

    // Estilos en línea para el encabezado (aún no definidos)
    const headerStyles = {
        fontSize: "2.5rem", // Tamaño de fuente de 2.5 veces el tamaño base (rem)
        margin: "2px", // Aplica un margen de 2 píxeles alrededor del encabezado
        background: "-webkit-linear-gradient(#024caa, #ec8305)", // Gradiente lineal de azul a naranja
        WebkitBackgroundClip: "text", // Aplica el gradiente solo al texto, no al fondo
        WebkitTextFillColor: "transparent", // Hace que el color del texto sea transparente para mostrar el gradiente
    };

    // Renderiza el componente Navbar, que incluye un título dinámico y un botón con el mismo título
    return (
        /* "<> </> "Fragmento de React que permite agrupar elementos sin crear un nodo extra en el DOM */
        // *Definición del componente de barra de navegación que se posiciona de forma fija en la parte superior izquierda de la pantalla
        //* La barra de navegación tiene un ancho fijo de 200px y se mantiene fija mientras se hace scroll usando 'position: fixed'.
        //* No se especifica la altura, por lo que la barra de navegación se ajustará según su contenido.
        <nav style={{ position: "fixed", top: 0, left: 0, width: "100vw" }}>
            {/* Contenedor principal del navbar */}
            <div>
                {/* Título del navbar */}
                {/*<h1>Navbar</h1>*/}
                {/*<h1>{title}</h1>*/}

                {/* Renderizo un encabezado h1 con estilos dinámicos aplicados desde el objeto headerStyles*/}
                {/*<h1 style={headerStyles}>{title}</h1>*/}

                {/*Renderizo un encabezado h1 que muestra el valor dinámico de la variable 'title' */}
                <h1>{title}</h1>
            </div>
            {/**Creo un boton con react */}
            {/* Botón interactivo para el usuario */}
            {/*<button>Click</button>*/}
            {/* Botón que muestra el título dinámico */}
            {/*<button>{title}</button>*/}
            {/*Itero sobre el arreglo 'links' y renderizo un componente NavButton por cada enlace*/}
            {links.map((link, idx) => (
                // Renderizo el componente NavButton pasando 'href' y 'text' como props, y asigno un key único
                <NavButton href={link.href} text={link.text} key={idx} />
            ))}
        </nav>
    );
}

// Exporto el componente Navbar para poder utilizarlo en otros archivos
export default Navbar;