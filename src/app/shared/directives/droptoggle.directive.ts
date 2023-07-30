import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDroptoggle]'
})
export class DroptoggleDirective {

  constructor() { }
@HostListener("click",["$event"])
  onClick(eve:Event){
    let ele=eve.target as HTMLElement


    ele.closest("div")?.classList.remove("show")
  }



}
