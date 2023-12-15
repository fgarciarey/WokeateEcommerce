const reducer = (globalState, action) => {

    switch (action.type) {

        case "GET_WOKS":
            return {
                ...globalState,
                woks: action.payload,
                wok: [{
                    id_: "",
                    nombre: "",
                    descripcion: "",
                    precio: "",
                    imagen: ""
                }]
            }

        case "GET_WOK":
            return {
                ...globalState,
                wok: [action.payload]
            }

        default: 
            return globalState

    }


}

export default reducer