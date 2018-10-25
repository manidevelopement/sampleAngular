import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<String>{
    return of("test");
  }
  addUser(userJson: JSON) : Observable<JSON>{
    return this.http.post<JSON>("http://localhost:8081/addUser", userJson, httpOptions).pipe(
      tap((result: JSON) => {
        console.log("JSONresult": result);
      }),
      catchError(this.handleError<JSON>('addHero'))
    );
  }
}
