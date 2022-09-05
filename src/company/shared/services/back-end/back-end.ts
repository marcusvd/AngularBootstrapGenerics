import { HttpClient } from "@angular/common/http";
import { Observable, take } from "rxjs";
import { environment } from "src/environments/environment";
import { ibackEnd } from "./iback-end";

export class BackEnd<T> implements ibackEnd<T, number> {

  constructor(
    protected http: HttpClient,
    private url: string
  ) {
  }


  //environment._CLIENTS
  loadAllAsync(): Observable<T> {
    return this.http.get<T>(this.url).pipe(take(1));
  }
  loadByIdAsync(id:number): Observable<any> {
    return this.http.get<T>(`${this.url}/${id}`).pipe(take(1));
  }

}
