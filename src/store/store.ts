import { configureStore } from "@reduxjs/toolkit";
import { getprofile } from "../services/getprofile";

export const store = configureStore({
	//input reducer from services here
	reducer: {
		[getprofile.reducerPath]: getprofile.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(getprofile.middleware),
});

// State global (called RootState)
export type RootState = ReturnType<typeof store.getState>;

// Dispatch that can read all dispatches that we have (called AppDispatch)
export type AppDispatch = typeof store.dispatch;
