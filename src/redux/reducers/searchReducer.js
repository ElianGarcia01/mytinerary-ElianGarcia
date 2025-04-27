import { createReducer } from "@reduxjs/toolkit"
import changeSearch from "../actions/searchAction"

const initialState = {
  search: "",
}

const searchReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeSearch, (state, action) => {
    state.search = action.payload
  })
})

export default searchReducer
