import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'odd'
})
export class OddPipe implements PipeTransform {

  transform(value: string, num: number, isTrue: boolean): string {
    return (isTrue)? this.isOdd(value, num): this.isEven(value, num);
  }

  /* 
    Return the value if the number is odd,
    call for transform if isTrue is true
  */
 isOdd(value: string, num: number): string {
   return (num % 2 !== 0)? value : '';
  }
  
  /* 
    Return the value if the number is even,
    call for transform if isTrue is false
  */
  isEven(value: string, num: number): string {
    return (num % 2 === 0)? value : '';
  }

}
