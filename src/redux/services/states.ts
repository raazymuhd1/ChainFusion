import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    showModal: false,
    showBorrowModal: false
};


const statesSlice = createSlice({
    name: "states",
    initialState,
    reducers: {
        handleModal: (state, action: PayloadAction<{ kind: string, status: boolean }>) => {
            if(action.payload.kind == "supply") {
                state.showModal = action.payload.status;
            } else if(action.payload.kind == "borrow") {
                state.showBorrowModal = action.payload.status;
            }
        },
        handleBorrowModal: (state, action: PayloadAction<boolean>) => {
            state.showModal = action.payload;
        }
    }
})


export const { handleModal, handleBorrowModal } = statesSlice.actions
export default statesSlice.reducer