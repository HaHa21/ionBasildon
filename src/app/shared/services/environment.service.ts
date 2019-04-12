import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class EnvironmentService {
  constructor() {}

  get(key: keyof EnvironmentData): any {
    return environment[key];
  }

  set(key: keyof EnvironmentData, value: any) {
    environment[key] = value;
  }
}

export interface EnvironmentData {
  production: boolean;
  locale: String;
  localStorageName: String;
}
