import { Action } from "@ngrx/store";
import { Application } from "../reducers/application.reducer";

export const LOAD_APPLICATIONS  = "[Application] LOAD";
export const LOAD_APPLICATIONS_SUCCESS  = "[Application] LOAD_SUCCESS";
export const LOAD_APPLICATION_FAILED = "[Application] LOAD_FAILED";

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


export class LoadApplicationsFailed implements Action{
    readonly type  =  LOAD_APPLICATION_FAILED;

    constructor(public payload:Error){}
}
export class AddApplication implements Action{
    readonly type = ADD_APPLICATION; 
    constructor(public payload){}
}

export class AddApplicationSuccess implements Action{
    readonly type = ADD_APPLICATION_SUCCESS;

    constructor(public payload){}
}

export class UpdateApplication implements Action{
    readonly type = UPDATE_APPLICATION;

    constructor(public id: string,
        public changes: Partial<Application>){}
}

export class UpdateApplicationSuccess implements Action{
    readonly type = UPDATE_APPLICATION_SUCCESS;

    constructor(
        public id: string,
        public changes: Partial<Application>
    ){}
}

export type ApplicationsActions = 
        LoadApplications 
    |   LoadApplicationsSuccess 
    |   LoadApplicationsFailed
    |   AddApplication 
    |   AddApplicationSuccess
    |   UpdateApplication
    |   UpdateApplicationSuccess;