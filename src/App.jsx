import Contador from "./components/Contador";
import Subtitulo from "./components/Subtitulo";
import TituloPrincipal from "./TituloPrincipal";
// para importar las hojas de estilo
import './style.css'


function App() {

  const comision = 'c6i';

  return (
    <>
      {/* <TituloPrincipal></TituloPrincipal> */}
      <TituloPrincipal codigoComision= {comision} estado= {true} />
      <Subtitulo></Subtitulo>
      {/* puede ser llamado como etiqueta doble o simple */}
    <Contador></Contador>
    </>
    
    
  );
}

export default App;
 
// componente: son partes de una pagina escritas en jsx
// cada componente va a ser un archivo de extencion jsx
// siempre hacer el componente con la primera letra Mayuscula
// todos los componentes dentro de src, o crear una carpeta que se llame components si son muchos
