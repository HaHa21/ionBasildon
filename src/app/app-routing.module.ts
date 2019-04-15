import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: "src/app/pages/login/login.module#LoginPageModule"
  },
  {
    path: "forgot-password",
    loadChildren:
      "./pages/forgot-password/forgot-password.module#ForgotPasswordPageModule"
  },  { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
