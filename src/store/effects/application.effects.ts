import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { InquireService } from 'src/app/services/inquire.service';
import { LoadApplications, LoadApplicationsSuccess, LOAD_APPLICATIONS } from '../actions/application.action';

 
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


}