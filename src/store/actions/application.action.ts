import { Action } from "@ngrx/store";

export const LOAD_APPLICATIONS  = "[Application] LOAD";
export const LOAD_APPLICATIONS_SUCCESS  = "[Application] LOAD_SUCCESS";

export class LoadApplications implements Action{
    readonly type  =  LOAD_APPLICATIONS;
}

export class LoadApplicationsSuccess implements Action{
    readonly type  =  LOAD_APPLICATIONS_SUCCESS;

    constructor(public payload){}
}


export type ApplicationsActions = LoadApplications | LoadApplicationsSuccess