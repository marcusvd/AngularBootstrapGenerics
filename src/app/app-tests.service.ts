import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BackEnd } from "src/company/shared/services/back-end/back-end";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })

export class AppTestsService<T> extends BackEnd<T> {
  constructor(override http: HttpClient) {
    super(http, environment._CLIENTS)
  }
}



