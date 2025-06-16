import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    showModal: false
};


const statesSlice = createSlice({
    name: "states",
    initialState,
    reducers: {
        handleModal: (state, action: PayloadAction<boolean>) => {
            state.showModal = action.payload;
        }
    }
})


export const { handleModal } = statesSlice.actions
export default statesSlice.reducer