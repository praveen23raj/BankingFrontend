import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './account';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient ) { }

  private baseUrl="http://localhost:8080/api/accounts/all"

  private postUrl="http://localhost:8080/api/accounts"

  getAllAccounts(): Observable<Account[]>{

    return this.httpClient.get<Account[]>(`${this.baseUrl}`);
  };

  createAccount(account: Account): Observable<Account>{
    return this.httpClient.post<Account>(`${this.postUrl}`, account);
  };

  getAccountById(id:number): Observable<Account>{
    return this.httpClient.get<Account>(`${this.postUrl}/${id}`);
  }

  deposit(id:number,amount:number): Observable<Account>{
    const request={ amount }
    return this.httpClient.put<Account>(`${this.postUrl}/${id}/deposit`,request);
  }

  withdraw(id:number,amount:number): Observable<Account>{
    const request={ amount }
    return this.httpClient.put<Account>(`${this.postUrl}/${id}/withdrawl`,request);
  }

  delete(id:number): Observable<any>{
    return  this.httpClient.delete<any>(`${this.postUrl}/${id}`);
  }
 
    }
