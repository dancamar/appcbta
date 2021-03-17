

//import Ejemplo from './componentes/ejemplo';
import Header from './componentes/inicio/header';
import Heading from './componentes/body/heading';
import Carousel from './componentes/inicio/carousel';
import Sectiondos from './componentes/body/seccion';

function App() {
  return (
    <div className="App">
     <Header/>
     <hr/>
     <Carousel/>
     <hr/>
     <Heading/>
     <hr/>
     <Sectiondos/>
    </div>

  );
}

export default App;
