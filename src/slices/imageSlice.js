import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
    name: 'image',
    initialState: {
        images: []
    },
    reducers: {
        addimage: (state, action) => {
            state.images.push(action.payload);
        }
    }
})

// Action creators are generated for each case reducer function
export const { addimage } = imageSlice.actions

export default imageSlice.reducer