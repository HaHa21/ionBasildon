import { Component, OnInit } from "@angular/core";
import { LangService } from "src/app/shared/services/lang.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.page.html",
  styleUrls: ["./registration.page.scss"]
})
export class RegistrationPage implements OnInit {
  public registerForm: FormGroup;

  constructor(public lang: LangService, public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      userName: ["", Validators.required],
      passWord: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", Validators.required],
      postCode: ["", Validators.required]
    });
  }

  ngOnInit() {}
}
