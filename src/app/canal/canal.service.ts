import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CanalService {
  private urlApi: string = environment.urlApi;

  public currentCanal: BehaviorSubject<any> = new BehaviorSubject<any>(0);

  private updatedCollection$: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);
  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  refreshCollection() {
    return this.http.get<[]>(`${this.urlApi}/messages`).subscribe((data) => {
      this.updatedCollection$.next(data);
    });
  }

  get collection(): Observable<any> {
    this.refreshCollection();
    //return this.http.get(`${this.urlApi}/messages`);
    return this.updatedCollection$;
  }

  postCanal(obj: any): Observable<any> {
    return this.http.post(`${this.urlApi}/messages`, obj).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  postMessage(canal: any, obj: any): Observable<any> {
    return this.http
      .patch(`${this.urlApi}/messages/${canal.id}`, {
        id: `${canal.id}`,
        messages: [obj],
      })
      .pipe(
        tap(() => {
          this.refreshCollection();
        })
      );
  }

  getCanalById(id: any): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/messages/${id}`);
  }

  deleteCanal(obj: any): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/messages/${obj.id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
}
