import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() options?: HeaderOptions;
  showMenu: boolean = false;
  constructor(public router: Router) {}

  ngOnInit() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  goToLogin() {
    this.router.navigate(["/login"]);
  }
}

export interface HeaderOptions {
  title?: string;
  color?: "transparent" | "solid";
  showMenu?: boolean;
}
