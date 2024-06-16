// import { ADD_ADDPRODUCTS, DELETE_ADDPRODUCTS, EDIT_ADDPRODUCTS, ERROR_ADDPRODUCTS, GET_ADDPRODUCTS, LOADING_ADDPRODUCTS } from "../ActionType"


// const initialState = {
//     products: [],
//     isLoading: false,
//     error: null
// }

// export const addproductsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ERROR_ADDPRODUCTS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 error: action.payload
//             }
//         case LOADING_ADDPRODUCTS:
//             return {
//                 ...state,
//                 isLoading: true,
//                 error: null
//             }
//         case GET_ADDPRODUCTS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 products: action.payload,
//                 error: null
//             }
//         case DELETE_ADDPRODUCTS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 products: state.products.filter((item) => item.id !== action.payload),
//                 error: null
//             }
//         case EDIT_ADDPRODUCTS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 products : state.products.map((v) => {
//                     if (v.id === action.payload.id) {
//                         return action.payload
//                     } else {
//                         return v
//                     }
//                 }),
//                 error: null
//             }
//         case ADD_ADDPRODUCTS:
//             return {

//                 ...state,
//                 isLoading: false,
//                 products: state.products.concat(action.payload),
//                 error: null
//             }
//         default:
//             return state
//     }
// }


import { ADD_ADDPRODUCTS, DELETE_ADDPRODUCTS, EDIT_ADDPRODUCTS, ERROR_ADDPRODUCTS, GET_ADDPRODUCTS, LOADING_ADDPRODUCTS } from "../ActionType";

const initialState = {
    products: [],
    isLoading: false,
    error: null
};

export const addproductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_ADDPRODUCTS:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case LOADING_ADDPRODUCTS:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_ADDPRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                error: null
            };
        case DELETE_ADDPRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: state.products.filter((item) => item.id !== action.payload),
                error: null
            };
        case EDIT_ADDPRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: state.products.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return v;
                    }
                }),
                error: null
            };
        case ADD_ADDPRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: state.products.concat(action.payload),
                error: null
            };
        default:
            return state;
    }
};
