export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    placeholder: any;
    order: number;
    disabled: boolean;
    controlType: string;
    type: string;
    options: {key: string, value: string}[];
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        placeholder?: any;
        order?: number;
        disabled?: boolean;
        controlType?: string;
        type?: string;
        options?: {key: string, value: string}[];
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.placeholder = options.placeholder || '';
      this.order = options.order === undefined ? 1 : options.order;
      this.disabled = options.disabled || false;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || [];
    }
  }