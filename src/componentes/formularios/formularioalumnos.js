                             
import {useState} from 'react';

function FormularioAlumnos() {

    const iniciarInput={
        nombre:''
    }



    const [values,setValues]=useState(iniciarInput);

    const inputChange=(e)=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value})
    }

    const msj =(e) =>{
        e.preventDefault();
        alert("Hola "+""+values.nombre);
    }


    return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Formulario para alta de alumnos</h5>

                <div className="form-control">
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-10">
                            <input type="text" name="nombre" 
                            className="form-control" 
                            id="inputPassword" 
                            placeholder="Ingrese nombre" 
                            />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default FormularioAlumnos;