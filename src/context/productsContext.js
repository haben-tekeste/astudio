// context
import createContext from './createContext'

// api
import dummyApi from '../api/api'

const reducer = (
  state,
  action
) => {
  switch (action.type) {
    case 'fetch_products':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case 'error':
      return {
        data: [],
        isLoading: false,
        error:
          action.payload,
        search: [],
      }
    case 'set_entries':
      return {
        ...state,
        entries:
          action.payload,
      }

    case 'update_search_term':
      return {
        ...state,
        searchTerm:
          action.payload,
      }

    case 'submit_search':
      return {
        ...state,
        searchTerm: '',
        search:
          action.payload,
      }
  }
}

const fetchProducts = (
  dispatch
) => {
  return async (
    nbr = 5,
    skip = 0
  ) => {
    try {
      const { data } =
        await dummyApi.get(
          `/products?limit=${nbr}&skip=${skip}`
        )
      dispatch({
        type: 'fetch_products',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'error',
      })
    }
  }
}

const setEntries = (
  dispatch
) => {
  return (nbr) => {
    dispatch({
      type: 'set_entries',
      payload: nbr,
    })
  }
}

const updateSearchTerm =
  (dispatch) => {
    return (value) => {
      dispatch({
        type: 'update_search_term',
        payload: value,
      })
    }
  }


const submitSearch = (
  dispatch
) => {
  return (
    data,
    term
  ) => {
    console.log(term,"term");
    if (!term) return

    //
    const filtered =
      data.filter(
        (item) => {
          return Object.values(
            item
          ).includes(
            term
          )
        }
      )

    dispatch({
      type: 'submit_search',
      payload: filtered,
    })
  }
}

export const {
  Context,
  Provider,
} = createContext(
  reducer,
  {
    fetchProducts,
    setEntries,
    updateSearchTerm,
    submitSearch
  },
  {
    isLoading: false,
    data: [],
    error: false,
    entries: 5,
    search:null,
    searchTerm:'',
    filter:{
      title:"",
      brand:"",
      category:""
    }

  }
)
