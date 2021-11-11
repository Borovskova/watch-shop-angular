import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public isActive: string = 'home';
  constructor() { }

  ngOnInit(): void {
  }
  public scrollFn(el: HTMLElement, name: string) {
    el.scrollIntoView({ behavior: 'smooth' });
    this.isActive = name;
  }
}
