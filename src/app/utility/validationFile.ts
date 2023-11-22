import { AbstractControl, ValidatorFn } from "@angular/forms"



function autocompleteObjectValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (typeof control.value === 'string') {
        return { 'invalidAutocompleteObject': { value: control.value } }
      }
      return null  /* valid option selected */
    }
  }
  
  function autocompleteStringValidator(validOptions: Array<string>): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (validOptions.indexOf(control.value) !== -1) {
        return null  /* valid option selected */
      }
      return { 'invalidAutocompleteString': { value: control.value } }
    }
  }


  export function forbiddenNamesValidator(names: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // below findIndex will check if control.value is equal to one of our options or not
      const index = names.findIndex((name) => {
        return new RegExp('^' + name + '$').test(control.value);
      });
      return index < 0 ? { forbiddenNames: { value: control.value } } : null;
    };
  }

  // this.myControl.setValidators(forbiddenNamesValidator(this.options));