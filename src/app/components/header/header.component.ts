import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isActive: string = 'home';
  @Output() onScroll: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  public scrollFn(elemID: any, name: string) {
    this.isActive = name;
    this.onScroll.emit(elemID);
  }
}
