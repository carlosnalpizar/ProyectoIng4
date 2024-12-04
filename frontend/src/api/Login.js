import axios from 'axios';

// URL base de tu API
const BASE_URL = 'http://localhost:3333';

export const login = async (personaCedula, contrasena) => {
  try {
    const response = await axios.post(
      'http://localhost:3333/auth/login',
      { personaCedula, contrasena },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      // Errores del servidor
      console.error('Error en login:', error.response.data);
      throw new Error(error.response.data.mensaje || 'Error en el servidor');
    } else if (error.request) {
      // La solicitud no llegó al servidor
      console.error('Error en la red:', error.request);
      throw new Error('Error en la red o el servidor no responde');
    } else {
      // Otros errores
      console.error('Error desconocido:', error.message);
      throw new Error('Ocurrió un error desconocido');
    }
  }
};


export const logout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/logout`, {}, {
      withCredentials: true, // Permite enviar cookies en la solicitud
    });

    return response.data; // Retorna la respuesta del servidor
  } catch (error) {
    console.error('Error en logout:', error.response?.data?.mensaje || error.message);
    throw new Error(error.response?.data?.mensaje || 'Error al cerrar sesión');
  }
};

export const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:3333/auth/profile", {
        withCredentials: true, // Envía cookies para la autenticación
      });
      return response.data; // Asegúrate de que incluye `rol` como propiedad
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      throw new Error("No se pudo obtener el perfil del usuario");
    }
  };
  
  
