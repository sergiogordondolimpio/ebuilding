import { Validators } from "@angular/forms";
import { FormConfig } from "../interfaces/form-config";

export const FORM_CONFIG: FormConfig[] = [
    {
      key: 'email',
      value: '',
      label: 'Enter your email',
      placeholder: 'pat@example.com',
      validators: [Validators.required, Validators.email]
    },
    {
      key: 'password',
      value: '',
      label: 'Enter your password',
      placeholder: '',
      validators: [Validators.required]
    }
  ]