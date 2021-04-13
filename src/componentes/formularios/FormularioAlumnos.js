import { useState, useEffect } from "react";

import { db } from "../../services/firebase";

//import { toast } from "react-toastify";

const FormularioAlumnos = (props) => {
  //Definir los valores de inicio
  const iniciarInput = {
    nombre: "",
    apellidos: "",
    direccion: "",
  };

  //Setear los valores de inicio
  const [values, setValues] = useState(iniciarInput);
  //const [lista, setLista]=useState([]);
  //const [currentId, setCurrentId]=useState('');

  //obtener los valores de los cuadros de textos del formulario
  const inputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  /*const AgregarOrEditar = async(listaAlumnos)=>{
        await db.collection('appcbta').doc().set(listaAlumnos);
        toast.success('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: 'error'
          });

    }*/

  /* const getLista= async(id)=>{
      db.collection('appcbta').onSnapshot((querySnapshot)=>{
        const docs=[];

        querySnapshot.forEach(doc=>{
          docs.push({...doc.data(), id: doc.id});
        });
        setLista(docs);
      })
    }*/

  //Guardar la informacion en la bd
  const handleSubmit = (e) => {
    e.preventDefault();
    props.agregarOrEditar(values);
    setValues({ ...iniciarInput });
  };

  const getListaById = async (id) => {
    const consulta = await db.collection('appcbta').doc(id).get();
    setValues({ ...consulta.data() });
  };

  useEffect(() => {
    if (props.currentId === '') {
      setValues({ ...iniciarInput });
    } else {
      getListaById(props.currentId);
    }
  }, [props.currentId]);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Formulario para alta de alumnos</h5>

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="input-group mb-3">
              <label for="nombre" className="col-sm-2 col-form-label">
                Nombre
              </label>

              <span className="input-group-text" id="nombre">
                <i class="bi bi-person"></i>
              </span>

              <input
                type="text"
                name="nombre"
                className="form-control"
                id="nombre"
                placeholder="Ingrese nombre"
                aria-describedby="nombre"
                value={values.nombre}
                onChange={inputChange}
              />
            </div>

            <div className="input-group mb-3">
              <label for="nombre" className="col-sm-2 col-form-label">
                Appellidos
              </label>

              <span className="input-group-text" id="apellidos">
                <i class="bi bi-person"></i>
              </span>

              <input
                type="text"
                name="apellidos"
                className="form-control"
                id="apellidos"
                placeholder="Ingrese apellidos"
                aria-describedby="apellidos"
                value={values.apellidos}
                onChange={inputChange}
              />
            </div>

            <div className="input-group mb-3">
              <label for="direccion" className="col-sm-2 col-form-label">
                Direccion
              </label>

              <span className="input-group-text" id="direccion">
                <i class="bi bi-house"></i>
              </span>

              <input
                type="text"
                name="direccion"
                className="form-control"
                id="direccion"
                placeholder="Ingrese su direccion"
                aria-describedby="direccion"
                value={values.direccion}
                onChange={inputChange}
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary">
                {props.currentId == "" ? "Guardar" : "Actualizar"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioAlumnos;
