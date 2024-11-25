import axios from "axios";

export const insertarCliente = async (clienteNuevo) => {
  try {
    const { nombre, primerApellido, segundoApellido, direccion, telefono, correoElectronico, personaCedula, contrasena } = clienteNuevo;
    console.log("Datos enviados para insertar cliente:", { direccion, telefono, correoElectronico, personaCedula, contrasena });

    const response = await axios.post("http://localhost:3333/cliente/crear-cliente", {
      nombre,
      primerApellido,
      segundoApellido,
      direccion,
      telefono,
      correoElectronico,
      personaCedula,
      contrasena,
    });

    console.log("Respuesta de la API:", response.data);
    return response.data; // Retornamos la respuesta para manejarla en el frontend
  } catch (error) {
    if (error.response) {
      console.error("Error del servidor:", error.response.data);
    } else {
      console.error("Error al insertar el cliente:", error.message);
    }
    throw error;
  }
};


export const obtenerClientes = async () => {
  try {
    const response = await axios.get("http://localhost:3333/cliente/obtenerClientes");
    return response.data;
  } catch (error) {
    console.error("Error al obtener la lista de clientes:", error);
    throw error;
  }
};

export const obtenerClientePorId = async (personaCedula) => {
  try {
    const response = await axios.get(`http://localhost:3333/cliente/obtenerCliente/${personaCedula}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el cliente por cédula:", error);
    throw error;
  }
};

export const eliminarCliente = async (personaCedula) => {
  try {
    const response = await axios.delete(`http://localhost:3333/cliente/eliminarCliente/${personaCedula}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el cliente:", error);
    throw error;
  }
};

export const modificarCliente = async (personaCedula, clienteActualizado) => {
  try {
    const { direccion, telefono, correoElectronico, contrasena } = clienteActualizado;
    console.log("Datos enviados para modificar cliente:", {
      direccion,
      telefono,
      correoElectronico,
      contrasena
    });
    const response = await axios.put(
      `http://localhost:3333/cliente/modificarCliente/${personaCedula}`,
      {
        direccion,
        telefono,
        correoElectronico,
        contrasena
      }
    );
    console.log("Respuesta de la API:", response.data); 
    return response.data;
  } catch (error) {
    console.error("Error al modificar el cliente:", error);
    throw error;
  }
};
