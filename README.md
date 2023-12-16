# Proyecto 5: Wokeate Ecommerce

Penultimo proyecto para el Bootcamp Fullstack Web. Impartido por la Universidad del Desarrollo

## Tecnologías Incorporadas

- **create-react-app (React.js):** Desarrollo del frontend.
- **Tailwind CSS:** Manejo de estilos para una interfaz atractiva.
- **Express.js (Node):** Implementación del servidor backend.
- **MongoDB:** Base de datos para almacenar y gestionar los datos.

## Instalación

1. Clona o haz un fork de este repositorio.

2. Abre dos terminales: una para trabajar con create-react-app y otra para express.js.

### Terminal 1 (Cliente)

```bash
$ cd client
$ npm install
$ npm run start.


Terminal 2

$ cd server
$ npm install
$ npm run dev
Una vez hecho esto en cada uno, deberás crear las variables de entorno en cada carpeta.

./client/.env

REACT_APP_BACKEND_URL="http://localhost:3005"
REACT_APP_MERCADO_PAGO_PUBLIC_KEY='TU-NÚMERO-DE-MERCADOPAGO-PARA-ACTIVAR-PAGOS'
./server/.env

PORT=3005
MONGODB_URI='mongodb://localhost:27017/proyecto-final-guitarras'
SECRET=PALABRASECRETADEBESCAMBIARLA
PROD_ACCESS_TOKEN='TU-NÚMERO-DE-MERCADOPAGO-PARA-ACTIVAR-PAGOS'
