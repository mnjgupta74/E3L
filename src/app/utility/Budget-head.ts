import {Directive,HostListener} from '@angular/core'

@Directive({
selector: '[mobMask]'
})
export class MobDirective {

@HostListener('input', ['$event'])
onKeyDown(event: KeyboardEvent) {
  
const input = event.target as HTMLInputElement;

let trimmed = input.value.replace(/\s+/g, '');

if (trimmed.length > 17) {
  
  trimmed = trimmed.substr(0, 17);
}


trimmed = trimmed.replace(/-/g,'');

 let numbers = [];
 
 numbers.push(trimmed.substr(0,4));
 if(trimmed.substr(4,1)!=="")
 numbers.push(trimmed.substr(4,2));
 if(trimmed.substr(6,2)!="")
 numbers.push(trimmed.substr(6,3));
 if(trimmed.substr(9,1)!="")
 numbers.push(trimmed.substr(9,2));
 if(trimmed.substr(11,1)!="")
 numbers.push(trimmed.substr(11,2));
input.value = numbers.join('-');
console.log("hi");

  }
}