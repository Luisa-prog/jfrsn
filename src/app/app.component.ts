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
    const video = document.getElementById("video-bg") as HTMLVideoElement;

    if (video){
      video.play().catch(error =>{
        console.log("el navegador no permite la reproduccion del video automatico");
        setTimeout(() => video.play(),1000);
      })
    }
  
    const elements = Array.from(document.querySelectorAll('.hidden-left, .hidden-right')) as HTMLElement[];
    elements.forEach(element => observer.observe(element));
  }
}

