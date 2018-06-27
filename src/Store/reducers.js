import { initialState } from './selectors'
import { OPERATORS_LIST_READ_SUCCESS } from './actions'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPERATORS_LIST_READ_SUCCESS:
      return { ...state, list: action.payload }

    default:
      return state
  }
}

export default reducer
