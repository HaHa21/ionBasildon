import { Injectable } from "@angular/core";
import en from "../../i18n/en";
import de from "../../i18n/de";
import { EnvironmentService } from "./environment.service";

@Injectable({
  providedIn: "root"
})
export class LangService {
  i18n = en;
  constructor(private environmentService: EnvironmentService) {
    this.changeLocale(this.environmentService.get("locale"));
  }

  changeLocale(lang: String) {
    switch (lang) {
      case "de":
        this.i18n = de;
        break;
      case "en":
      default:
        this.i18n = en;
        break;
    }

    this.environmentService.set("locale", this.i18n.locale);
  }
}
