import { Link } from "react-router-dom";
import BackgroundJumbotron from "./../assets/fondonosotros.jpg";

export default function Main() {
  return (
    <>
      <main className="mt-10">
        <div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={BackgroundJumbotron}
                    alt=""
                  />
                  <div
                    className="absolute inset-0 bg-gray-800 mix-blend-multiply"
                    style={{ opacity: 0.7 }}
                  ></div>
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">En Wokeate tenemos</span>
                    <span className="block text-white">
                      dos grandes pasiones,
                    </span>
                    <span className="block text-white">
                      la buena comida y los viajes.
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                    <br />
                    Llegamos hasta el Lejano Oriente para explorar un nuevo
                    mundo de colores y sabores,recetas elaboradas con sabiduría
                    milenaria para satisfacer cuerpo y alma.
                    <br />
                    <br />
                    El final del viaje nos trajo no sólo los secretos de la
                    preparación de nuestros platos favoritos, sino también el
                    deseo de compartirlos con ustedes.
                    <br />
                    <br />
                    En nuestros locales hemos recreado las mismas emociones que
                    los mercados en Bangkok,Hong Kong, Hanoi, Singapur y Tokio
                    nos entregaron cuando empezamos la búsqueda de especias y
                    sabores que utilizamos actualmente para la preparación de
                    nuestros productos. Acá te ofrecemos un nuevo concepto de
                    comida rica, rápida, saludable y al paso cocinada al WOK.
                    <br />
                    <br />
                    Solo eliges los ingredientes y una salsa de elaboración
                    propia, en unos minutos obtienes tu plato de WOK preparado
                    mientras recorres uno de los lugares más íconico de
                    Santiago, el Persa Bio-Bio.
                    <br />
                    <br />Y nuestro nuevo local en Avenida Vitacura.
                  </p>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                    Acá te ofrecemos un nuevo concepto de comida rica, rápida,
                    saludable y al paso cocinada al WOK.
                  </p>

                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none flex justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
                      <Link to="/catalogo">
                        <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-white font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-300 sm:px-8">
                          Ver Menú
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
