import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


// Crear nuevos productos (Aqui trabajamos con la BBDD o mandar a ejecutar al Reducer para modificar el STATE)
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {

    dispatch(agregarProducto());

    try {
      // Insertar en la API
      await clienteAxios.post('/productoss', producto)

      // Si todo sale bien, actualizar el STATE
      dispatch(agregarProductoExito(producto))

      // Alerta
      Swal.fire(
        'Correcto',
        'El producto se agregó correctamente',
        'success'
      )

    } catch (error) {
      console.log(error);

      // Si hay un error, cambiar el STATE
      dispatch(agregarProductoError(true));

      // Alerta
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo',
        footer: '<a href>en serio, ha fallado la app?</a>'
      })
    }
  }
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true
})

// Si el Producto se guarda en la BBDD 
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto
})

// Si hubo un error al guardar
const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado
})

// ======================================================================================== //

// Función que descarga los productos de la BBDD
export function obtenerProductosAction() {

  return async (dispatch) => {

    dispatch(descargarProductos())

    try {
      const respuesta = await clienteAxios.get('/productos');

      dispatch(descargaProductosExitosa(respuesta.data));

    } catch (error) {
      console.log(error);
      dispatch(descargaProductosError())
    }

  }
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true
})

const descargaProductosExitosa = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos
})

const descargaProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true
})

//Selecciona y elimina el producto
export function borrarProductoAction(id) {

  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id))

    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito())
    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError())
      Swal.fire(
        'Eliminado!',
        'El producto ha sido eliminado.',
        'success'
      )

    }
  }
}

const obtenerProductoEliminar = (id) => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id
})

const eliminarProductoExito = () => ({
  type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
  type: PRODUCTO_ELIMINADO_ERROR,
  payload: true
})