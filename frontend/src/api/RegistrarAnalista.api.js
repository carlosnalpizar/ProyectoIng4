import axios from 'axios';

export const insertarAnalista = async (analistaNuevo) => {
  try {
    const { nombre, primerApellido, segundoApellido, personaCedula, telefono, correoElectronico, contrasena } = analistaNuevo;
    console.log('Datos enviados para insertar analista:', { nombre, primerApellido, segundoApellido, personaCedula, telefono, correoElectronico, contrasena });

    const response = await axios.post('http://localhost:3333/analistas/insertar', {
      nombre,
      primerApellido,
      segundoApellido,
      personaCedula,
      telefono,
      correoElectronico,
      contrasena,
    });

    console.log('Respuesta de la API:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error del servidor:', error.response.data);
    } else {
      console.error('Error al insertar el analista:', error.message);
    }
    throw error;
  }
};

export const obtenerAnalistas = async () => {
  try {
    const response = await axios.get('http://localhost:3333/analistas/obtenerAnalistas');
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de analistas:', error);
    throw error;
  }
};

export const obtenerAnalistaPorId = async (personaCedula) => {
  try {
    const response = await axios.get(`http://localhost:3333/analista/obtenerAnalista/${personaCedula}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el analista por cédula:', error);
    throw error;
  }
};

export const eliminarAnalista = async (personaCedula) => {
  try {
    const response = await axios.delete(`http://localhost:3333/analista/eliminarAnalista/${personaCedula}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el analista:', error);
    throw error;
  }
};

export const modificarAnalista = async (personaCedula, analistaActualizado) => {
  try {
    const { nombre, primerApellido, segundoApellido, telefono, correoElectronico, contrasena } = analistaActualizado;
    console.log('Datos enviados para modificar analista:', {
      nombre,
      primerApellido,
      segundoApellido,
      telefono,
      correoElectronico,
      contrasena,
    });

    const response = await axios.put(
      `http://localhost:3333/analista/modificarAnalista/${personaCedula}`,
      {
        nombre,
        primerApellido,
        segundoApellido,
        telefono,
        correoElectronico,
        contrasena,
      }
    );

    console.log('Respuesta de la API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al modificar el analista:', error);
    throw error;
  }
};
