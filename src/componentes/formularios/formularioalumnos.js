import { useState } from "react";

function FormularioAlumnos(props) {
  const iniciarInput = {
    nombre: "",
    apellidos: "",
    direccion: "",
  };

  const [values, setValues] = useState(iniciarInput);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hola " + "" + values.nombre);
  };

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
              name="diereccion"
              className="form-control"
              id="direccion"
              placeholder="Ingrese su direccion"
              aria-describedby="direccion"
            />
          </div>
          <div className="d-grid gap-2">
          <input type="submit" value="Guardar" className="btn btn-primary"/>
          </div>
        </div>
        </form>

      </div>
    </div>
  );
}

export default FormularioAlumnos;
