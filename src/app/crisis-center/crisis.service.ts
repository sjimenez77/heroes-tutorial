import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Crisis } from './crisis';

@Injectable()
export class CrisisService {
  private crisesUrl = 'api/crises';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCrises(): Promise<Crisis[]> {
    return this.http.get(this.crisesUrl)
               .toPromise()
               .then(response => response.json().data as Crisis[])
               .catch(this.handleError);
  }

  getCrisis(id: number): Promise<Crisis> {
    const url = `${this.crisesUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data as Crisis)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
