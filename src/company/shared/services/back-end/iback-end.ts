import { Observable } from "rxjs";

export interface ibackEnd<T, ID> {
  loadAllAsync(): Observable<T>;


  loadByIdAsync(ID): Observable<T>

}
