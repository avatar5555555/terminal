export const initialState = {
  list: [],
  isLoading: false
}

export const getOperatorsList = (state = initialState) => state.list

export const getIsLoading = (state = initialState) => state.isLoading
