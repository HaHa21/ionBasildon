import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() options? : HeaderOptions;
  showMenu : boolean = false;
  constructor() { }

  ngOnInit() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

export interface HeaderOptions{
   title? : string;
   color?: 'transparent' | 'solid';
   showMenu? : boolean;
}