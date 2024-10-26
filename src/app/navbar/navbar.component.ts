import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdownOpen:boolean = false;
toggleDropdown(selected:boolean){
this.dropdownOpen = selected;
}
}
