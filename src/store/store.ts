import { configureStore } from "@reduxjs/toolkit";
import { JsonPlaceHolderApi } from "../services/jsonplaceholder";

export const store = configureStore({
	//input reducer from services here
	reducer: {
		[JsonPlaceHolderApi.reducerPath]: JsonPlaceHolderApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(JsonPlaceHolderApi.middleware),
});

// State global (called RootState)
export type RootState = ReturnType<typeof store.getState>;

// Dispatch that can read all dispatches that we have (called AppDispatch)
export type AppDispatch = typeof store.dispatch;
