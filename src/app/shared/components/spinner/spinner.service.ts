import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SpinnerService {
  private isLoading = new BehaviorSubject<boolean>(false);

  public isVisible(): Observable<boolean> {
    return this.isLoading;
  }

  public showSpinner(): void {
    this.isLoading.next(true);
  }

  public hideSpinner(): void {
    this.isLoading.next(false);
  }
}