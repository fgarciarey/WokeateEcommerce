import React, { useState } from "react";
import { db } from "./../firebase";
import { collection, addDoc } from "firebase/firestore";
import logowok from "./../assets/logowok.png";

export const Reservas = () => {
  // Referencias
  const reservasCollectionRef = collection(db, "reservas");

  // Estado para almacenar datos y controlar la edición
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comensales, setComensales] = useState("");
  const [fecha, setFecha] = useState("");

  // Función de reserva
  const crearReserva = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (!nombre || !email || !telefono || !comensales || !fecha) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Si los campos están completos, crear reserva
    await addDoc(reservasCollectionRef, {
      nombre,
      email,
      telefono,
      comensales,
      fecha,
    });

    alert("Reserva exitosa");
  };

  // Estado y funciones para el formulario de inicio de sesión
  const [data, setData] = useState({
    email: "",
    password: "",
    nombre: "",
    telefono: "",
    comensales: "",
    fecha: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = async (event) => {
    event.preventDefault();

    // Lógica de validación
    // ...

    // Llama a la función apropiada para manejar la reserva
    await crearReserva(data);

    // Lógica adicional después de una reserva exitosa
    // ...
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={logowok} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reversa tú día!
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              sendData(e);
            }}
          >
            {/* ... (código existente para los campos del formulario de inicio de sesión) */}

            {/* Agrega campos adicionales para la reserva */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Tu nombre
              </label>
              <div className="mt-1">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="comensales"
                className="block text-sm font-medium text-gray-700"
              >
                Comensales
              </label>
              <div className="mt-1">
                <input
                  id="comensales"
                  name="comensales"
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="comensales"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha de Reserva
              </label>
              <div className="mt-1">
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* ... (campos adicionales para la reserva) */}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Realizar reserva
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
