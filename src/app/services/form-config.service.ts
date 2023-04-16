import { Injectable } from '@angular/core';
import { FormConfig } from '../interfaces/form-config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  constructor(private fb: FormBuilder) { }

  createGroup(formElements: FormConfig[]): FormGroup {
    let form = new FormGroup({});
    formElements.forEach( ele => {
      form.addControl(ele.key, this.fb.control(ele.value, ele.validators))
    })
    return form;
  }

  /* 
    Return if the element is invalid, so if it has errors
  */
  isValid(key: string, form: FormGroup): boolean { 
    return form.get(key)?.invalid || false; 
  }

  /* 
    Return the message depending of the error.
    this.loginForm.get(key)?.errors get the error dependig of the
    name of the element, in this case we need the first object,
    this object contains the name (key) and the value (true).
    With Object.keys()[0] get the first object.
    Validators.someValidator.name get the name of the validator.
    The switch compare the fist key with the name of the validator.
  */
  getErrorMessage(key: string, form: FormGroup): string {
    /* console.log(key, ': ', this.loginForm.get(key)?.errors)
    console.log(Validators.required.name) */
    switch (Object.keys(form.get(key)?.errors || {})[0]) {
      case Validators.required.name:
        return `${key} is required`
        break;
      case Validators.email.name:
        return `${key} is not the correct`
        break;
      default:
        return `${key} is required`
        break;
    }
  }

  isFormNotValid(form: FormGroup): boolean {
    return form.invalid;
  }
}
