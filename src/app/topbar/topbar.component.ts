import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  llamar() {
    window.location.href = "tel:+57 313 3066579";
  }
  cotizar() {
    const numero = "573214513037"; // Número en formato internacional (sin +)
    const mensaje = encodeURIComponent("¡Hola! Quisiera recibir una cotización.");
    window.location.href = `https://wa.me/${numero}?text=${mensaje}`;
  }
}
