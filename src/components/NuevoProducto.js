import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

  // Utilizar useDispatch y te crea/devuelve una función
  const dispatch = useDispatch();

  // Manda llamar al action de productoAction
  const agregarProducto = () => dispatch(crearNuevoProductoAction())

  // Cuando el ususario haga submit
  const submitNuevoproducto = e => {
    e.preventDefault();

    //TODO Validar fomulario



    //TODO si no hay errores



    //TODO crear el nuevo Producto
    agregarProducto();
  }



  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form
              onSubmit={submitNuevoproducto}
            >

              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuevoProducto;