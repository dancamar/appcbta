

//import Ejemplo from './componentes/ejemplo';
import Header from './componentes/inicio/header';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <ToastContainer/>
    </div>

  );
}

export default App;
