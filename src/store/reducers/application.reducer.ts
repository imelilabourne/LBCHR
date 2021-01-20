import {
    ADD_APPLICATION, ADD_APPLICATION_SUCCESS,

    ApplicationsActions, LOAD_APPLICATIONS,

    LOAD_APPLICATIONS_SUCCESS,
    UPDATE_APPLICATION_SUCCESS
} from "../actions/application.action";

export interface Application {

  list:any[]
}

const initialState: Application = {
    list:[]
};

export function applicationReducer(
  state: Application = initialState,
  action: ApplicationsActions
) {
  switch (action.type) {
    case LOAD_APPLICATIONS:
      return {
        ...state,
      };
    case LOAD_APPLICATIONS_SUCCESS:
      return {
          list: [...action.payload]
      }

    case ADD_APPLICATION:
      return {
        ...state,
      };

    case ADD_APPLICATION_SUCCESS:
    case UPDATE_APPLICATION_SUCCESS:
        {
        return{
            list: [...state.list, {requestNo: 1, ...action.payload}]
        }
    }  
  return state;

  }
}
