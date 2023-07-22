import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showSearch: boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
}
