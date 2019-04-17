import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginPage } from "./login.page";
import { IonicModule, NavController } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";
import { NavControllerMock } from "src/app/mocks/navController.mock";

describe("LoginPage", () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule,
        ReactiveFormsModule,
        RouterTestingModule,
        SharedModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: NavController, useClass: NavControllerMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should navigate to ForgotPassword page", () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const forwardBtn: HTMLElement = nativeElement.querySelector(
      "div.w-100 div"
    );

    const navController: NavController = TestBed.get(NavController);
    const navForwardSpy: jasmine.Spy = spyOn(navController, "navigateForward");
    forwardBtn.click();
    fixture.detectChanges();

    expect(navForwardSpy).toHaveBeenCalledWith("/forgot-password");
  });
});
