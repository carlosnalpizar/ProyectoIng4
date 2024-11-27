import axios from "axios";

// Insertar un nuevo préstamo
export const insertarPrestamo = async (prestamoNuevo) => {
  try {
    const response = await axios.post("http://localhost:3333/prestamos/nuevoPrestamo", prestamoNuevo);
    return response.data; // Retornamos la respuesta para manejarla en el frontend
  } catch (error) {
    if (error.response) {
      console.error("Error del servidor:", error.response.data);
    } else {
      console.error("Error al insertar el préstamo:", error.message);
    }
    throw error;
  }
};

// Obtener la lista de préstamos
export const obtenerPrestamos = async () => {
  try {
    const response = await axios.get("http://localhost:3333/prestamo/lista");
    return response.data;
  } catch (error) {
    console.error("Error al obtener la lista de préstamos:", error);
    throw error;
  }
};

// Obtener el último préstamo
export const obtenerUltimoPrestamo = async () => {
  try {
    const response = await axios.get("http://localhost:3333/prestamos/obtenerultimo");
    return response.data;
  } catch (error) {
    console.error("Error al obtener el último préstamo:", error);
    throw error;
  }
};

// Eliminar un préstamo por número de préstamo
export const eliminarPrestamo = async (numeroPrestamo) => {
  try {
    const response = await axios.delete(`http://localhost:3333/prestamo/eliminar/${numeroPrestamo}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el préstamo:", error);
    throw error;
  }
};

// Modificar un préstamo
export const modificarPrestamo = async (numeroPrestamo, prestamoActualizado) => {
  try {
    const response = await axios.put(
      `http://localhost:3333/prestamo/modificar/${numeroPrestamo}`,
      prestamoActualizado
    );
    return response.data;
  } catch (error) {
    console.error("Error al modificar el préstamo:", error);
    throw error;
  }
};
