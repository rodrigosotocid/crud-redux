import React, { useEffect } from 'react';
import Producto from '../components/Producto';

// Redux 
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

const Productos = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    // Consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Obtener el STATE
  const productos = useSelector(state => state.productos.productos);
  const error = useSelector(state => state.productos.error);
  const cargando = useSelector(state => state.productos.loading);

  return (
    <>
      <h2 className="text-center">Listado de Productos</h2>
      { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error en la carga de los productos</p> : null}
      {cargando ? <p className="font-weight-bold text-center mt-4">Cargando...</p> : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? "No hay Productos" : (
            productos.map(producto => (
              <Producto
                key={producto.id}
                producto={producto}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default Productos;