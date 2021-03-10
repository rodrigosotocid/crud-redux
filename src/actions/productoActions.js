import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


// Crear nuevos productos (Aqui trabajamos con la BBDD o mandar a ejecutar al Reducer para modificar el STATE)
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {

    dispatch(agregarProducto());

    try {
      // Insertar en la API
      await clienteAxios.post('/productos', producto)

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
  typo: AGREGAR_PRODUCTO_ERROR,
  payload: estado
})