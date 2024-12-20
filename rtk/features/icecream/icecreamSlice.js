const { createSlice } = require('@reduxjs/toolkit')
const { cakeActions } = require('../cake/cakeSlice')

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

module.exports = icecreamSlice.reducer;
module.exports.icecreamAction = icecreamSlice.actions;