import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'watch-shop';

  public onScroll(elemID: any) {
    let element = document.querySelector(elemID)
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
