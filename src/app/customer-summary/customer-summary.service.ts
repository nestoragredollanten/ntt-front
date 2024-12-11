import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerSummaryService {

  private readonly apiUrl = 'http://localhost:8090/api/customer';
  private readonly http: HttpClient

  constructor(http: HttpClient) {
    this.http = http;
  }

  getCustomer(type: string, number: string): Observable<Customer> {
    console.log('service ' + type + ' ' + number)
    return this.http.get<Customer>(`${this.apiUrl}?type=${type}&number=${number}`);
  }
}
