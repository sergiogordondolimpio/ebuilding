import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FORM_CONFIG } from 'src/app/data/form-login-config';
import { FormConfigService } from 'src/app/services/form-config.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

  loginForm = new FormGroup({});

  formElements = FORM_CONFIG;


  constructor (private formService: FormConfigService) {
    this.loginForm = this.formService.createGroup(this.formElements);
  }

  isValid(key: string): boolean { 
    return this.formService.isValid(key, this.loginForm); 
  }

  getErrorMessage(key: string): string {
    return this.formService.getErrorMessage(key, this.loginForm); 
  }

  isFormNotValid(): boolean {
    return this.formService.isFormNotValid(this.loginForm); 
  }
  

  onSubmit() {
    console.warn(this.loginForm.value);
  }

}
