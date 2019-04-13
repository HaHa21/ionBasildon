import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LangService } from "../../shared/services/lang.service";

@Component({
  selector: "app-login",
  templateUrl: "login.page.html",
  styleUrls: ["login.page.scss"]
})
export class LoginPage {
  private loginForm: FormGroup;

  constructor(public lang: LangService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      passWord: ["", Validators.required]
    });
  }
}
