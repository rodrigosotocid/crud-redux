import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productoActions';
import Swal from 'sweetalert2';

const Producto = ({ producto }) => {

  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  // Confirmar si desea eliminarlo
  const confirmarEliminarProducto = id => {

    // Preguntar al Usuario
    Swal.fire({
      title: '¿Estas segur@?',
      text: "No podrás revertir esto.!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Elimínalo!'
    }).then((result) => {
      if (result.isConfirmed) {

        // Pasarlo al action
        dispatch(borrarProductoAction(id));

      }
    })


  }

  return (
    <tr>
      <td>{nombre}</td>
      <td><span className="font-weight-bold">{precio}€</span></td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >Eliminar</button>
      </td>
    </tr>
  );
}

export default Producto;