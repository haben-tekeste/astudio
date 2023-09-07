// context
import createContext from "./createContext";

// api
import dummyApi from "../api/api"

const reducer = (state, action) => {
  switch(action.type){
    case "fetch_users":
      return {
       ...state, data : action.payload
      }
    case "error":
      return {
        ...state, error: action.payload
      }
     case "update_search_term":
      return {
        ...state, searchTerm: action.payload
      }
      
      case "submit_search":
        return {
          ...state, searchTerm:"",search:action.payload
        }
    
  }

}


const fetchUsers = (dispatch) => {
  return async (nbr=5) => {
    try {
      
      const { data } = await dummyApi.get(`/users?limit=${nbr}`);
      dispatch({
        type: "fetch_users",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:"error"
      })
    }
    }
  }

const updateSearchTerm = (dispatch) => {
  return (value) => {
    dispatch({
      type:"update_search_term",
      payload: value
    })
  }
}

const submitSearch = (dispatch) => {
  return (data, term) => {
    if (
      !term 
    ) return;
    
    //
    const filtered = data.filter(item => {
      return Object.values(item).includes(term)
    })

    dispatch({
      type:"submit_search",
      payload: filtered
    })
  }
}


export const { Context, Provider } = createContext(
  reducer,
  { fetchUsers, updateSearchTerm,submitSearch },
  {
    isLoading:false,
    data:[],
    search:[],
    error:false,
    searchTerm:""
  }
);