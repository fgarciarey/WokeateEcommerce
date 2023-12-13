import React from 'react'

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px', // Espacio entre elementos
  };

export const Input = ({nombre, setNombre, email, setEmail, telefono, setTelefono, fecha, setFecha, comensales, setComensales}) => {
  return (
    <>
     <div className="container text-center" style={containerStyle}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id='nombre'
          type='string'
          placeholder='Ej: Felipe García'
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          id='email'
          type='email'
          placeholder='Ej: ejemplo@gmail.com'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          id='telefono'
          type='number'
          placeholder='Ej: +5695050505'
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
          required
        />
        <br />

        <label htmlFor="comensales">Comensales:</label>
        <input
          id='comensales'
          type='number'
          placeholder='Ej: 6'
          value={comensales}
          onChange={(event) => setComensales(event.target.value)}
          required
        />
        <br />

        <label htmlFor="fecha">Fecha:</label>
        <input
          id='fecha'
          type='datetime-local'
          placeholder='Fecha'
          value={fecha}
          onChange={(event) => setFecha(event.target.value)}
          required
        />
        <br />
      </div>
    </>
  )
}
