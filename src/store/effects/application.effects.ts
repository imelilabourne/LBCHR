import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { InquireService } from 'src/app/services/inquire.service';
import { LoadApplications, LoadApplicationsSuccess, LOAD_APPLICATIONS, UpdateApplication, UpdateApplicationSuccess, UPDATE_APPLICATION } from '../actions/application.action';

 
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
                )
            )
        )

    @Effect()
    updateApplication$ = this.actions$.ofType(UPDATE_APPLICATION)
    .pipe(
        map((action: UpdateApplication) => action.payload),
        switchMap((app => {
            return this.inquireService.updateRequest(app)
                .pipe(
                    map(app => new UpdateApplicationSuccess(app))
                )
        } ))
    )
}