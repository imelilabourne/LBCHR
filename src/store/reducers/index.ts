import { ActionReducerMap } from "@ngrx/store";
import { applicationReducer } from "./application.reducer";

export const reducer: ActionReducerMap<any>  = {
    application: applicationReducer
}