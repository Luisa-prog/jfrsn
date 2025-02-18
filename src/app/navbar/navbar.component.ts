import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMenuOpen = false;
  isSubmenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubmenu(event: Event) {
    event.preventDefault(); // Evita que el link recargue la página
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
}




