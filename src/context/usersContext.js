// context
import createContext from "./createContext";

// api
import dummyApi from "../api/api"

const reducer = (state, action) => {
  switch(action.type){
    case "fetch_users":
      return {
        data : action.payload,
        isLoading: false,
        error: false,
        search: [],
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


const fetchUsers = (dispatch) => {
  return async () => {
    try {
      
      const { data } = await dummyApi.get("/users");
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




export const { Context, Provider } = createContext(
  reducer,
  { fetchUsers },
  {
    isLoading:false,
    data:[],
    search:[],
    error:false
  }
);