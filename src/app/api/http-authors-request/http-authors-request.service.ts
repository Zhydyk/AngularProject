import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorList } from 'src/app/models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthorsRequestService {
  public baseUrl = 'http://localhost:3004';
  constructor(private httpRequest: HttpClient) { }

  public getAuthors(): Observable<AuthorList[]> {
    return this.httpRequest.get<AuthorList[]>(`${this.baseUrl}/authors`);
  }
}
