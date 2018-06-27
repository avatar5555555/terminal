import { initialState } from './selectors'
import {
  OPERATORS_LIST_READ_SUCCESS,
  OPERATORS_LIST_READ_REQUEST,
  OPERATORS_LIST_READ_FAILURE
} from './actions'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPERATORS_LIST_READ_REQUEST:
      return { ...state, isLoading: true }

    case OPERATORS_LIST_READ_SUCCESS:
      return { ...state, list: action.payload, isLoading: false }

    case OPERATORS_LIST_READ_FAILURE:
      return { ...state, isLoading: false }

    default:
      return state
  }
}

export default reducer
