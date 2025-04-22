import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = "http://localhost:8083";

  requestHeader = new HttpHeaders(
    {
      "No-Auth": "True"
    }
  );
  constructor(
    private httpClient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  public login(loginData: any) {
    return this.httpClient.post(this.BASE_URL + "/authenticate", loginData, { headers: this.requestHeader });
  }

  public roleEqual(allowRole: string[]): boolean {
    const userRoles = this.userAuthService.getRoles();

    if (userRoles != null) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowRole.length; j++) {
          if (userRoles[i].roleName === allowRole[j]) {
            return true;
          }
        }
      }
    }
    return false;

  }
}
