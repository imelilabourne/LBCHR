import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { QuestionBase } from '../components/shared/question-base';
import { DropdownQuestion } from '../components/shared/question-dropdown';
import { TextboxQuestion } from '../components/shared/question-textbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // }),

      new TextboxQuestion({
        key: 'applicationNo',
        label: 'Application No.',
        value: 'PA00000000001',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'name',
        label: 'Name',
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email Address',
        type: 'email',
        order: 3
      }),

      new TextboxQuestion({
        key: 'mobileNumber',
        label: 'Mobile No.',
        type: 'number',
        order: 4
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}