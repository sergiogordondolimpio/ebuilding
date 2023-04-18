import { Pipe, PipeTransform } from '@angular/core';
import { FormConfigService } from '../services/form-config.service';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'getErrorMessage'
})
export class GetErrorMessagePipe implements PipeTransform {

  constructor(
    private formService: FormConfigService
  ){}

  transform(message: string, key: string, form: FormGroup): string {
    return this.formService.getErrorMessage(key, form);
  }

}
