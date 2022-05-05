import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            return { value: state.value + 1 }
        },
        decrement: (state) => {
            return { value: state.value - 1 }
        },
        incrementByFive: (state) => {
            return { value: state.value + 5}
        },
        decrementByFive: (state) => {
            return { value: state.value - 5}
        },
        incrementByAmount: (state, action) => {
            return { value: state.value + action.payload }
        }
    }
})

export const { increment, decrement, incrementByFive, decrementByFive, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer