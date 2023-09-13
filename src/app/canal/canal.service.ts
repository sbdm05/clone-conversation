import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Canal } from '../core/models/canal';

@Injectable({
  providedIn: 'root',
})
export class CanalService {
  private urlApi: string = environment.urlApi;

  public currentCanal: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private updatedCollection$: BehaviorSubject<Canal[]> = new BehaviorSubject<Canal[]>([]);

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  refreshCollection() {
    return this.http.get<Canal[]>(`${this.urlApi}/canals`).subscribe((data) => {
      this.updatedCollection$.next(data);
    });
  }

  get collection(): Observable<Canal[]> {
    this.refreshCollection();
    //return this.http.get(`${this.urlApi}/messages`);
    return this.updatedCollection$;
  }

  postCanal(obj: Canal): Observable<Canal> {
    return this.http.post<Canal>(`${this.urlApi}/canals`, obj).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  postMessage(canal: Canal, obj: any){
    return this.http.get(`${this.urlApi}/canals/${canal.id}`).pipe(
      map((contentCanal: any) => {
        const updatedMessages = contentCanal.messages || [];
        //console.log(updatedMessages)
        updatedMessages.push(obj);

        return {
          id: `${canal.id}`,
          messages: updatedMessages,
        };
      }),
      concatMap((updatedData: any) => {
        console.log(updatedData);

        return this.http.patch(
          `${this.urlApi}/canals/${canal.id}`,
          updatedData
        );
      }),
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  getCanalById(id: number): Observable<Canal> {
    return this.http.get<Canal>(`${this.urlApi}/canals/${id}`);
  }

  deleteCanal(obj: Canal): Observable<Canal> {
    return this.http.delete<Canal>(`${this.urlApi}/canals/${obj.id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
}
