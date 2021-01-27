import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { InquireService } from 'src/app/services/inquire.service';
import { AddApplication, AddApplicationSuccess, ADD_APPLICATION, LoadApplications, LoadApplicationsSuccess, LOAD_APPLICATIONS } from '../actions/application.action';

 
@Injectable({
    providedIn: 'root'
})
export class ApplicationEffects {
    
    constructor(
        private actions$: Actions,
        private inquireService: InquireService
      ) {}

    @Effect()
    loadApplications$ = this.actions$
        .pipe(
            ofType<LoadApplications>(LOAD_APPLICATIONS),
            mergeMap(() => this.inquireService.getApplication()
                .pipe(
                    map(data => new LoadApplicationsSuccess(data))
                ),
                // catchError(error => of(new LoadApplicationsFailed(error)))
            )
        )


    @Effect()
    addApplication$ = this.actions$
        .pipe(
            ofType<AddApplication>(ADD_APPLICATION),
            mergeMap((app => this.inquireService.addRequest(app.payload)
                    .pipe(
                        map(() => new AddApplicationSuccess(app.payload))
                    )
            ))

        )
        

    // @Effect()
    // updateApplication$ = this.actions$
    //     .pipe(
    //         ofType<UpdateApplication>(UPDATE_APPLICATION),
    //         mergeMap((app => this.inquireService.updateRequest(1, app.payload)
    //                 .pipe(
    //                     map(() => new UpdateApplicationSuccess('1',app.payload))
    //                 )
    //         ))

    //     )
    // @Effect()
    // updateApplication$ = this.actions$.ofType(UPDATE_APPLICATION)
    // .pipe(
    //     map((action: UpdateApplication) => action.payload),
    //     switchMap((app => {
    //         return this.inquireService.updateRequest(app)
    //             .pipe(
    //                 map(app => new UpdateApplicationSuccess('4', app))
    //             )
    //     } ))
    // )
}