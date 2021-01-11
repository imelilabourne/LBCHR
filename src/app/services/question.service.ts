import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { QuestionBase } from '../components/shared/question-base';
import { DropdownQuestion } from '../components/shared/question-dropdown';
import { TextboxQuestion } from '../components/shared/question-textbox';

@Injectable()
export class QuestionService {

  getQuestions() {

    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'applicationNo',
        label: 'Application No.',
        value: 'PA00000000001',
        required: true,
        disabled: true,
        order: 1
      }),
      

      new TextboxQuestion({
        key: 'name',
        label: 'Name',
        order: 3
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email Address',
        type: 'email',
        order: 4
      }),

      new TextboxQuestion({
        key: 'mobileNumber',
        label: 'Mobile No.',
        type: 'number',
        order: 2
      }),

      new TextboxQuestion({
        key: 'dateFrom',
        label: 'Date From',
        type: 'date',
        order: 5
      }),

      new TextboxQuestion({
        key: 'dateTo',
        label: 'Date To',
        type: 'date',
        order: 6
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  getPersonalInfo(){
    const personalInfo: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'nameSuffix',
        options: [
          {key: 'sr',  value: 'SR'},
          {key: 'jr',  value: 'JR'},
          {key: 'i',   value: 'I'},
          {key: 'ii', value: 'II'},
          {key: 'iii', value: 'III'},
          {key: 'iv', value: 'IV'},
          {key: 'v', value: 'V'}
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'customerName',
        label: 'Name of Customer',
        placeholder: 'First Name',
        value: '',
        required: false,
        order: 1
      }),

      new TextboxQuestion({
        label: "",
        key: 'middleName',
        placeholder: 'Middle Name',
        order: 2
      }),

      new TextboxQuestion({
        key: 'lastName',
        placeholder: 'Last Name',
        order: 3
      }),

      new TextboxQuestion({
        key: 'birthDate',
        label: 'Date of Birth',
        placeholder: 'MM/DD/YYYY',
        type: "date",
        order: 5
      }),

      new DropdownQuestion({
        key: 'nationality',
        placeholder: 'Select Country',
        label: 'Nationality',
        options: [
          {key: 'ph',  value: 'Phillippines'},
          {key: 'jp',  value: 'Japan'},
          {key: 'i',   value: 'I'},
          {key: 'ii', value: 'II'},
          {key: 'iii', value: 'III'},
          {key: 'iv', value: 'IV'},
          {key: 'v', value: 'V'}
        ],
        order: 6
      }),

      new DropdownQuestion({
        key: 'sex',
        label: 'Sex',
        placeholder: 'Select',
        options: [
          {key: 'f',  value: 'Female'},
          {key: 'm',  value: 'Male'}
        ],
        order: 6
      }),

      new TextboxQuestion({
        key: 'birthPlace',
        label: 'Place of Birth',
        order: 7
      }),
      

      new DropdownQuestion({
        key: 'civilStatus',
        label: 'Civil Status',
        placeholder:'Select Civil Status',
        options: [
          {key: 'sin',  value: 'Single'},
          {key: 'mar',  value: 'Married'},
          {key: 'sep',  value: 'Separated'}
        ],
        order: 8
      }),

      new TextboxQuestion({
        key: 'motherName',
        label: 'Mother\'s Maiden Name',
        placeholder: 'First Name    Middle Name    Last Name',
        order: 9
      }),


      new TextboxQuestion({
        key: 'streetNo',
        label: 'No./Street',
        placeholder: 'No./Street',
        order: 10
      }),

      new TextboxQuestion({
        key: 'district1',
        label: 'Subd./Brgy./Dist1',
        placeholder: 'Subd./Brgy./Dist1',
        order: 11
      }),

      new TextboxQuestion({
        key: 'district2',
        label: 'Subd./Brgy./Dist2',
        placeholder: 'Subd./Brgy./Dist2',
        order: 12
      }),

      new TextboxQuestion({
        key: 'province',
        label: 'No./Street',
        placeholder: 'Province',
        order: 13
      }),

      new TextboxQuestion({
        key: 'city',
        label: 'City/Municipality',
        placeholder: 'Subd./Brgy./Dist1',
        order: 14
      }),

      new TextboxQuestion({
        key: 'nationality',
        label: 'Nationality',
        placeholder: 'Select Country',
        order: 15
      }),

      new TextboxQuestion({
        key: 'zipCode',
        label: 'Zip Code',
        placeholder: 'Zip Code',
        order: 16
      }),

      new TextboxQuestion({
        key: 'mobileNum',
        label: 'Primary Mobile No.',
        placeholder: 'Number',
        type: 'number',
        order: 17
      }),
      
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email Address',
        placeholder: 'myname@example.com',
        type: 'email',
        order: 18
      }),


      

    ];

    return of(personalInfo.sort((a, b) => a.order - b.order));
  }

  getValidID(){
    const validIdInfo: QuestionBase<string>[] = [
      
      new DropdownQuestion({
        key: 'idType',
        label: 'Type of ID',
        placeholder:'Select a Valid ID',
        options: [
          {key: 'sin',  value: 'Single'},
          {key: 'mar',  value: 'Married'},
          {key: 'sep',  value: 'Separated'}
        ],
        order: 1
      }),

      new TextboxQuestion({
        key: 'idNumber',
        label: 'ID Number',
        order: 2
      }),
    ]

    return of(validIdInfo.sort((a, b) => a.order - b.order));
  }
  getFinancialInfo(){
    const financialInfo: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'occupation',
        label: 'Occupation',
        placeholder:'Select Occupation',
        options: [
          {key: 'Emp',  value: 'Employed'},
          {key: 'sEmp',  value: 'Self-Employed'},
          {key: 'ofw',  value: 'OFW / Overseas Filipino'}
        ],
        order: 1
      }),

      new DropdownQuestion({
        key: 'fundSource',
        label: 'Primary Source of Funds',
        placeholder:'Select Source of Fund',
        options: [
          {key: 'sal',  value: 'Salary'},
          {key: 'int',  value: 'Interest'},
          {key: 'bus',  value: 'Business'}
        ],
        order: 2
      }),

      new DropdownQuestion({
        key: 'amountRange',
        label: 'Monthly Gross Income/Pension/Allowance',
        placeholder:'Select Amount Range',
        options: [
          {key: 's',  value: 'Php 30,000 & Below'},
          {key: 'm',  value: 'Php 30,000.01  - Php 50,000'},
        ],
        order: 3
      }),

      new DropdownQuestion({
        key: 'tinNumber',
        label: 'Tax Identification Number (TIN)',
        placeholder:'Select Occupation',
        options: [
          {key: 'far',  value: 'FARMER/FISHER'},
          {key: 'gen',  value: 'GENERAL SERVICES'},
          {key: 'min',  value: 'MINOR'}
        ],
        order: 4
      }),

    ]
    return of(financialInfo.sort((a, b) => a.order - b.order));
  }
}