import { combineReducers } from '@reduxjs/toolkit'
import auth from "src/feature/auth/authSlice"

const rootReducer = combineReducers({
    auth
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
