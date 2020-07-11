import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  // isDropdownOpen: boolean = false;
  @HostBinding('class.open') isDropdownOpen: boolean = false;

  constructor() { }

  @HostListener('click') toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}