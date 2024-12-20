const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    numOfCake: 10
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfCake--
        },
        restoke: (state, action) => {
            state.numOfCake += action.payload
        }
    }
})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;