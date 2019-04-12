import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginPage } from "./login.page";
import { SharedModule } from "src/app/shared/shared.module";
import { ForgotPasswordPage } from "../forgot-password/forgot-password.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: LoginPage
      },
      {
        path: "forgotpassword",
        component: ForgotPasswordPage
      }
    ]),
    SharedModule
  ],
  declarations: [LoginPage, ForgotPasswordPage]
})
export class LoginPageModule {}
