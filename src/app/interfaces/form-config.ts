import { ValidatorFn, Validators } from "@angular/forms";

export interface FormConfig {
    key: string,
    value: string,
    label: string,
    placeholder: string,
    validators: ValidatorFn[]
}