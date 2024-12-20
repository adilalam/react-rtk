import { createSlice } from '@reduxjs/toolkit'
// import { cakeActions } from '../cake/cakeSlice'

const initialState = {
    numOfIcecream: 20
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIcecream--;
        },
        restoke: (state, action) => {
            state.numOfIcecream += action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(cakeActions.ordered, (state, action) => {
    //         state.numOfIcecream--
    //     })
    // }
})

export default icecreamSlice.reducer;
export const { ordered, restoke } = icecreamSlice.actions;