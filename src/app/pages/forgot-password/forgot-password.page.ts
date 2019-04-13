import { Component, OnInit } from "@angular/core";
import { LangService } from "src/app/shared/services/lang.service";
import { NavController } from "@ionic/angular";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"]
})
export class ForgotPasswordPage implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(
    public lang: LangService,
    public navController: NavController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      forgotPassword: ["", Validators.required]
    });
  }
}
