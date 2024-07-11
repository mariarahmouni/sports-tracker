import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthSlice {
    token: string | null;
}

const initialState: AuthSlice = {
    token: '743e905c14aa4348adba5456366800c0', //hard coded for now.. not sure if this is right
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        clearToken(state) {
            state.token = null;
        },
    },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;