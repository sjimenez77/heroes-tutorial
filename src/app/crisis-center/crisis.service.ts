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

  update(crisis: Crisis): Promise<Crisis> {
    const url = `${this.crisesUrl}/${crisis.id}`;
    return this.http
      .put(url, JSON.stringify(crisis), {headers: this.headers})
      .toPromise()
      .then(() => crisis)
      .catch(this.handleError);
  }

  create(name: string): Promise<Crisis> {
    return this.http
      .post(this.crisesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Crisis)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.crisesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
