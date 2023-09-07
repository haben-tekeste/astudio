// context
import createContext from "./createContext";

// api
import dummyApi from "../api/api"

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_products":
      return {
        data:action.payload,
        isLoading:false,
        error:false,
        search:[]
      } 
    case "error":
      return {
        data : [],
        isLoading: false,
        error: action.payload,
        search: [],
      }
  }
}


const fetchProducts = (dispatch) => {
return async (nbr=5) => {
  try {
    
    const { data } = await dummyApi.get(`/products?limit=${nbr}`);
    dispatch({
      type: "fetch_products",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type:"error"
    })
  }
  }
}


export const { Context, Provider } = createContext(
  reducer,
  { fetchProducts },
  {
    isLoading: false,
    data: [],
    error: false
  }
);