import axios from "axios";

export const insertarCliente = async (clienteNuevo) => {
  try {
    const { direccion, telefono, correoElectronico, Persona_Cedula, contrasena } = clienteNuevo;
    console.log("Datos enviados para insertar cliente:", { direccion, telefono, correoElectronico, Persona_Cedula, contrasena });
    const response = await axios.post(
      "http://localhost:3333/cliente/crear-cliente",
      {
        direccion,
        telefono,
        correoElectronico,
        Persona_Cedula,
        contrasena
      }
    );
    console.log("Respuesta de la API:", response.data); 
    return response.data;
  } catch (error) {
    console.error("Error al insertar el cliente:", error);
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

export const obtenerClientePorId = async (Persona_Cedula) => {
  try {
    const response = await axios.get(`http://localhost:3333/cliente/obtenerCliente/${Persona_Cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el cliente por cédula:", error);
    throw error;
  }
};

export const eliminarCliente = async (Persona_Cedula) => {
  try {
    const response = await axios.delete(`http://localhost:3333/cliente/eliminarCliente/${Persona_Cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el cliente:", error);
    throw error;
  }
};

export const modificarCliente = async (Persona_Cedula, clienteActualizado) => {
  try {
    const { direccion, telefono, correoElectronico, contrasena } = clienteActualizado;
    console.log("Datos enviados para modificar cliente:", {
      direccion,
      telefono,
      correoElectronico,
      contrasena
    });
    const response = await axios.put(
      `http://localhost:3333/cliente/modificarCliente/${Persona_Cedula}`,
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
