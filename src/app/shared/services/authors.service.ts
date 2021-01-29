import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpAuthorsRequestService } from 'src/app/api/http-authors-request/http-authors-request.service';
import { AuthorList } from 'src/app/models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpAuthorsService: HttpAuthorsRequestService) { }

  public getAuthors(): Observable<AuthorList[]> {
    return this.httpAuthorsService.getAuthors();
  }
}
