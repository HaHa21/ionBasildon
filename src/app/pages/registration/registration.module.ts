import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { RegistrationPage } from "./registration.page";
import { SharedModule } from "src/app/shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "src/app/shared/services/auth.service";

const routes: Routes = [
  {
    path: "",
    component: RegistrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule
  ],
  declarations: [RegistrationPage],
  providers: [AuthService]
})
export class RegistrationPageModule {}
