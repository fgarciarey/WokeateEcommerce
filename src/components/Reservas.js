import React, { useState } from "react";
import { db } from "./../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Input } from "./Input";
import "./Reservas.css";
import BackgroundJumbotron from "./../assets/fondonosotros.jpg";

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

  // Log para verificar la URL de la imagen
  console.log(BackgroundJumbotron);
  

  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" src={BackgroundJumbotron} alt="" />
            <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" style={{ opacity: 0.7 }}></div>
          </div>
        </div>

        <div className="reserva-page header">
          <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
            <div className="container mt-5">
              <div className="row">
                <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                  <div className="reserva-text-container">
                    <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reserva tu día!</h1>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-container p-4 rounded shadow mx-auto text-center">
                    <form onSubmit={crearReserva}>
                      <Input
                        nombre={nombre}
                        setNombre={setNombre}
                        email={email}
                        setEmail={setEmail}
                        telefono={telefono}
                        setTelefono={setTelefono}
                        comensales={comensales}
                        setComensales={setComensales}
                        fecha={fecha}
                        setFecha={setFecha}
                      />

                      <div className="d-grid gap-2 col-12 mt-3">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Agregar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};
