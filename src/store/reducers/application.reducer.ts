import { Action } from "@ngrx/store";
import { ApplicationsActions, LOAD_APPLICATIONS, LOAD_APPLICATIONS_SUCCESS } from "../actions/application.action";

export interface Application{ 
    applicationNo: number;
    name: string;
}

const defaultState: Application[] = [

]
export function applicationReducer(state: Application[] = defaultState, action: ApplicationsActions){
    switch(action.type){
        case LOAD_APPLICATIONS:
            return {
                ...state,
                loading: false
            }
        case LOAD_APPLICATIONS_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        default: return state
    }
}