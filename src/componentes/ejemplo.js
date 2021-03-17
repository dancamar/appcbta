import { useState } from "react";

const Ejemplo =()=>{

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
    return(
        <div>
            <input type="text" 
            placeholder="Escribe un nombre"
            name="nombre"
            value={values.nombre}
            onChange={inputChange}/>
            <button onClick={msj}>Mensaje</button>           
        </div>
    )
}

export default Ejemplo;