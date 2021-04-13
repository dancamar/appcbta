import React, { useEffect, useState } from "react";

import { db } from "../../services/firebase";

import FormularioAlumnos from "./FormularioAlumnos";
import { toast } from "react-toastify";

const ListaAlumnos = () => {
  const [lista, setLista] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const agregarOrEditar = async (listaObject) => {
    if (currentId === "") {
      await db.collection('appcbta').doc().set(listaObject);
      toast("Nuevo registro agregado", {
        position: "top-center",
        type: "success",
        autoClose: 2000,
      });
    } else {
      await db.collection('appcbta').doc(currentId).update(listaObject);
      toast("Enlace actualizado", {
        position: "top-center",
        type: "info",
        autoClose: 2000,
      });

      setCurrentId('');
    }
  };

  const onDelete = async (id) => {
    if (window.confirm("Esta seguro de eliminar el registro?")) {
      await db.collection("appcbta").doc(id).delete();
      toast("Registro eliminado", {
        position: "top-center",
        type: "error",
        autoClose: 2000,
      });
    }
  };

  const getLista = async () => {
    await db.collection("appcbta").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLista(docs);
    });
  };

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div>
     
        <FormularioAlumnos {...{ agregarOrEditar, currentId, lista }} />
      

      <div className="col-md-8 p-2">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Direccion</th>
              </tr>
            </thead>

            {lista.map((lista) => (
              <tbody key={lista.id}>
                <tr>
                  <td>{lista.nombre}</td>
                  <td>{lista.apellidos}</td>
                  <td>{lista.direccion}</td>
                  <td><i className="bi bi-x-circle"
                  onClick={()=>onDelete(lista.id)}></i></td>
                  <td><i className="bi bi-pencil-fill" onClick={()=>setCurrentId(lista.id)}></i></td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListaAlumnos;