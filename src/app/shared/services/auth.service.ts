import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async submitUserDetails(data: Registration): Promise<void> {
    await this.http.post("/api/register", data).toPromise();
  }
}

export class Registration {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  address: string;
  email: string;
  postcode: string;
  date: Date;
  gender: string;
}
