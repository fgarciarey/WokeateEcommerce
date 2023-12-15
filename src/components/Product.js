import React, { useContext, useEffect } from "react";
import ProductContext from "./../context/Product/ProductContext";
import UserContext from "./../context/User/UserContext";
import { Link, useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();
  const { productId } = params;

  const ctxProduct = useContext(ProductContext);
  const { wok, getWok, getPreferenceCheckoutMP } = ctxProduct;
  const { nombre, precio, imagen, descripcion, desclarga } = wok[0];

  const ctxUser = useContext(UserContext);
  const { user } = ctxUser;

  useEffect(() => {
    const fetchWok = async () => {
      const res = await getWok(productId);

      // MANEJO DE MERCADOPAGO.COM, SOLO SI HAY USUARIO
      if (user) {
        const id = await getPreferenceCheckoutMP({
          items: [
            {
              title: res.nombre,
              quantity: 1,
              currency_id: "CLP",
              unit_price: res.precio,
              picture_url: res.imagen
            }
          ],
          payer: {
            name: user.name,
            email: user.email
          }
        })

        const script = document.createElement('script');

        script.type = 'text/javascript';
        script.src = 'https://sdk.mercadopago.com/js/v2';

        script.addEventListener('load', () => { addCheckout(id) });
        return document.body.appendChild(script);
      }
    }

    fetchWok();
  }, [productId, user, getWok, getPreferenceCheckoutMP]);

  // Mover la función addCheckout fuera del bloque useEffect
  const addCheckout = (id) => {
    const mp = new window.MercadoPago(process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY, {
      locale: "es-CL",
    });

    mp.checkout({
      preference: {
        id: id,
      },
      render: {
        container: `#payment-form`,
        label: "Pagar",
      },
    });
  };

  return (
    <div className="bg-white">
      {wok.length === 0 ? null : (
        <>
          <div className="pt-6">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <li>
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      Catálogo
                    </a>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-4 h-5 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li className="text-sm">
                  <a
                    href="#"
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {nombre}
                  </a>
                </li>
              </ol>
            </nav>
            <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className="w-full rounded-lg overflow-hidden lg:block" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={imagen}
                  alt="Two each of gray, white, and black shirts laying flat."
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>

            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {nombre}
                </h1>
              </div>

              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="text-3xl font-extrabold text-gray-400">
                  Características
                </h2>

                <p className="text-base text-gray-900 mt-6">
                  <b>Precio</b>: ${precio} CLP
                </p>

                <p className="text-base text-gray-900 mb-6">
                  <b>Descripción</b>: {descripcion}
                </p>

                {user?.email ? (
                  <div className="mt-10" id="payment-form"></div>
                ) : (
                  <Link to="/crear-cuenta">
                    <button
                      type="button"
                      className="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Para adquirir, regístrate primero
                    </button>
                  </Link>
                )}
                
              </div>

              <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {desclarga}
                    </p>
                  </div>
                </div>

                

                
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
