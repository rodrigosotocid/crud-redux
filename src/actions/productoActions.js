import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR
} from '../types';

// Crear nuevos productos (Aqui trabajamos con la BBDD o mandar a ejecutar al Reducer para modificar el STATE)
export function crearNuevoProductoAction(producto) {
  return () => {
    console.log(producto);
  }
}