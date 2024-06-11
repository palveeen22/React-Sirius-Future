import { useDispatch, useSelector } from "react-redux";
import { type TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "./store";


// - useAppDispatch for dispatching action which would call reducer func
export const useAppDispatch: () => AppDispatch = useDispatch;


// - useAppSelector for choose and take state that would read ore use by our components
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

