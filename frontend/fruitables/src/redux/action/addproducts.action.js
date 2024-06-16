// import axios from 'axios';
// import { baseURL } from '../../Utils/baseURL';
// import { ADD_ADDPRODUCTS, DELETE_ADDPRODUCTS, EDIT_ADDPRODUCTS, ERROR_ADDPRODUCTS, GET_ADDPRODUCTS, LOADING_ADDPRODUCTS } from '../ActionType';

// const productLoading = () => async (dispatch) => {
//     dispatch({ type: LOADING_ADDPRODUCTS })
// }

// const productError = (error) => async (dispatch) => {
//     dispatch({ type: ERROR_ADDPRODUCTS, payload: error })
// }

// export const fetchProducts = (data) => (dispatch) => {
//     dispatch(productLoading())
//     try {
//         axios.get(baseURL + 'products')
//             .then((response) => {
//                 dispatch({
//                     type: GET_ADDPRODUCTS,
//                     payload: response.data
//                 })
//             })
//             .catch((error) => {
//                 dispatch(productError(error.message))
//             })
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const removeProducts = (data) => (dispatch) => {
//     dispatch(productLoading())
//     try {
//         axios.delete(baseURL + 'products/' + data)
//             .then((res) => {
//                 console.log(res);
//                 dispatch({ type: DELETE_ADDPRODUCTS, payload: data });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     } catch (error) {
//         console.log(error);
//     }
// };


// export const addProducts = (data) => (dispatch) => {
//     dispatch(productLoading())
//     try {
//         axios.post(baseURL + 'products', data)
//             .then((res) => {
//                 console.log(res);
//                 dispatch({ type: ADD_ADDPRODUCTS, payload: res.data })
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const editProducts = (data) => (dispatch) => {
//     dispatch(productLoading())
//     try {
//         axios.put(baseURL + 'products/' + data.id, data)
//             .then((res) => {
//                 console.log(res);
//                 dispatch({ type: EDIT_ADDPRODUCTS, payload: data })
//             })
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchProducts()


import axios from 'axios';
import { baseURL } from '../../Utils/baseURL';
import { ADD_ADDPRODUCTS, DELETE_ADDPRODUCTS, EDIT_ADDPRODUCTS, ERROR_ADDPRODUCTS, GET_ADDPRODUCTS, LOADING_ADDPRODUCTS } from '../ActionType';

const productLoading = () => ({ type: LOADING_ADDPRODUCTS });

const productError = (error) => ({ type: ERROR_ADDPRODUCTS, payload: error });

export const fetchProducts = () => async (dispatch) => {
    dispatch(productLoading());
    try {
        const response = await axios.get(baseURL + 'products');
        dispatch({
            type: GET_ADDPRODUCTS,
            payload: response.data
        });
    } catch (error) {
        dispatch(productError(error.message));
    }
};

export const removeProducts = (id) => async (dispatch) => {
    dispatch(productLoading());
    try {
        await axios.delete(baseURL + 'products/' + id);
        dispatch({ type: DELETE_ADDPRODUCTS, payload: id });
    } catch (error) {
        dispatch(productError(error.message));
    }
};

export const addProducts = (data) => async (dispatch) => {
    dispatch(productLoading());
    try {
        const response = await axios.post(baseURL + 'products', data);
        dispatch({ type: ADD_ADDPRODUCTS, payload: response.data });
    } catch (error) {
        dispatch(productError(error.message));
    }
};

export const editProducts = (data) => async (dispatch) => {
    dispatch(productLoading());
    try {
        await axios.put(baseURL + 'products/' + data.id, data);
        dispatch({ type: EDIT_ADDPRODUCTS, payload: data });
    } catch (error) {
        dispatch(productError(error.message));
    }
};
