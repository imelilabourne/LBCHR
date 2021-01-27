import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector } from "@ngrx/store";
import {
  ADD_APPLICATION,
  ADD_APPLICATION_SUCCESS,
  ApplicationsActions, LOAD_APPLICATIONS,
  LOAD_APPLICATIONS_SUCCESS,
  LOAD_APPLICATION_FAILED,
  UPDATE_APPLICATION,
  UPDATE_APPLICATION_SUCCESS
} from "../actions/application.action";

export interface Application {
  id:  string;
  projectName: string,
  requestNo: number,
  rcCode: 09439241298,
  city: string,
  firstName: string,
  lastName: string,
  middleName: string,
  birthday: string,
  nationality: string,
  sex: string,
  birthPlace: string,
  civilStatus: string,
  motherName: string,
  presentAddress: string ,
  permanentAddress: string,
  mobileNum: number,
  email: string
}

const defaultApplication = {
    ids: ['1'],
    entities: {
        1: {
          id: 1,
          requestNo: 1,
          projectName: "Eli Laboourne de Torres",
          rcCode: "09439241298",
          city: "juan_delacruz00@gmail.com",
          firstName: "Robert",
          lastName: "Santiago",
          middleName: "Perez",
          birthday: "07/17/1998",
          nationality: "ph",
          sex: "f",
          birthPlace: "batangas",
          civilStatus: "sin",
          motherName: "Angela Perez",
          presentAddress: "quezon city",
          permanentAddress: "quezon city",
          mobileNum: "09959143409",
          emai: "elilabourne.detorres@gmail.com"
        }
    }
};

export const applicationAdapter = createEntityAdapter<Application>({
  // selectId: (app) => app.requestNo
});
export  interface State extends EntityState<Application>{}

export const initialState: State = applicationAdapter.getInitialState(defaultApplication);

export function applicationReducer(
  state = initialState,
  action: ApplicationsActions
) {
  switch (action.type) {
    case LOAD_APPLICATIONS:
      return {
        ...state,
      };
    case LOAD_APPLICATIONS_SUCCESS:
      return applicationAdapter.addAll(action.payload, state)

    case LOAD_APPLICATION_FAILED:
      return {
        ...state
      } 

    case ADD_APPLICATION:
      return {...state}

    case ADD_APPLICATION_SUCCESS: return applicationAdapter.addOne(action.payload, state);
    case UPDATE_APPLICATION: return {...state}
    case UPDATE_APPLICATION_SUCCESS:
    {
      return applicationAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state)
    }
    default:
    return state;

  }
}


export const getApplicationState =  createFeatureSelector<State>('application');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = applicationAdapter.getSelectors(getApplicationState);