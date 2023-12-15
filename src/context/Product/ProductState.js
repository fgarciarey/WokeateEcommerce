import { useReducer } from 'react';

import axiosClient from './../../config/axios';

import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';

const ProductState = (props) => {
  const initialState = {
    woks: [],
    wok: [
      {
        id_: '',
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: '',
      },
    ],
  };

  const [globalState, dispatch] = useReducer(ProductReducer, initialState);

  const getWok = async (id) => {
    const res = await axiosClient.get(`/obtener-pwok/${id}`)
    const wok = res.data.wok

    dispatch({
      type: 'GET_WOK',
      payload: wok
    })

    return wok
  }

  const getWoks = async () => {
    const res = await axiosClient.get('/obtener-pwoks')
    dispatch({
      type: 'GET_WOKS',
      payload: res.data.woks
    })
  }

  const getPreferenceCheckoutMP = async (dataform) => {
    console.log("dataform:", dataform)
    const res = await axiosClient.post('/mercadopago', dataform)
    return res.data.checkoutId
  }

  return (
    <ProductContext.Provider
      value={{
        woks: globalState.woks,
        wok: globalState.wok,
        getWok,
        getWoks,
        getPreferenceCheckoutMP,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;