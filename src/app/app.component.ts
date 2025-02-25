import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'jfrsn';

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('show');
        }
      });
    });
    window.addEventListener('load', () => {
      const video = document.querySelector('video');
      if (video) {
        video.play().catch(error => console.log('Autoplay bloqueado:', error));
      }
    });
    const elements = Array.from(document.querySelectorAll('.hidden-left, .hidden-right')) as HTMLElement[];
    elements.forEach(element => observer.observe(element));
  }
}

