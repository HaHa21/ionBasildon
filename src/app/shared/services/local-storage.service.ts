import { Injectable } from "@angular/core";
import * as localForage from "localforage";
import { EnvironmentService } from "./environment.service";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  constructor(private environmentService: EnvironmentService) {
    localForage.config({
      name: this.environmentService.get("locale")
    });
  }

  async clear(): Promise<void> {
    localForage.clear();
  }

  async set(key: String, value: any): Promise<void> {
    localForage.setItem(" ", value);
  }

  async get(key: String): Promise<any> {
    localForage.getItem("");
  }
}
