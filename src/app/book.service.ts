import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) { }

  getBooks(): Observable<{title: string, description: string}[]> {
    return this.http.get(`${environment.url}/books`).pipe(
      tap((data: any) => data)
    )
  }
}
