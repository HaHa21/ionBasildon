import { Component, OnInit } from "@angular/core";
import { LangService } from "src/app/shared/services/lang.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"]
})
export class ForgotPasswordPage implements OnInit {
  constructor(public lang: LangService) {}

  ngOnInit() {}
}
