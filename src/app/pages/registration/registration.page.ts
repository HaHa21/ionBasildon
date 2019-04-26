import { Component, OnInit } from "@angular/core";
import { LangService } from "src/app/shared/services/lang.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  AuthService,
  Registration
} from "src/app/shared/services/auth.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.page.html",
  styleUrls: ["./registration.page.scss"]
})
export class RegistrationPage implements OnInit {
  public registerForm: FormGroup;
  genders = ["Male", "Female"];

  constructor(
    public lang: LangService,
    public formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", Validators.required],
      postcode: ["", Validators.required],
      date: ["", Validators.required],
      gender: ["", Validators.required]
    });
  }

  ngOnInit() {}

  async register() {
    const data: Registration = {
      username: this.registerForm.controls["username"].value,
      password: this.registerForm.controls["password"].value,
      firstname: this.registerForm.controls["firstname"].value,
      lastname: this.registerForm.controls["lastname"].value,
      address: this.registerForm.controls["address"].value,
      email: this.registerForm.controls["email"].value,
      postcode: this.registerForm.controls["postcode"].value,
      date: this.registerForm.controls["date"].value,
      gender: this.registerForm.controls["gender"].value
    };
    await this.authService.submitUserDetails(data);
    console.log("hi");
  }
}
