import { Action } from "@ngrx/store";

export const LOAD_APPLICATIONS  = "[Application] LOAD";
export const LOAD_APPLICATIONS_SUCCESS  = "[Application] LOAD_SUCCESS";
export const ADD_APPLICATION = "[Application] ADD";
export const ADD_APPLICATION_SUCCESS = "[Application] ADD_SUCCESS";
export const UPDATE_APPLICATION = "[Application] UPDATE";
export const UPDATE_APPLICATION_SUCCESS = "[Application] UPDATE_SUCCESS";

export class LoadApplications implements Action{
    readonly type  =  LOAD_APPLICATIONS;
}

export class LoadApplicationsSuccess implements Action{
    readonly type  =  LOAD_APPLICATIONS_SUCCESS;

    constructor(public payload){}
}

export class AddApplication implements Action{
    readonly type = ADD_APPLICATION; 
}

export class AddApplicationSuccess implements Action{
    readonly type = ADD_APPLICATION_SUCCESS;

    constructor(public payload){}
}

export class UpdateApplication implements Action{
    readonly type = UPDATE_APPLICATION;

    constructor(public payload){}
}

export class UpdateApplicationSuccess implements Action{
    readonly type = UPDATE_APPLICATION_SUCCESS;

    constructor(public payload){}
}

export type ApplicationsActions = 
        LoadApplications 
    |   LoadApplicationsSuccess 
    |   AddApplication 
    |   AddApplicationSuccess
    |   UpdateApplication
    |   UpdateApplicationSuccess;