import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements HttpInterceptor {
  urlBase = location.origin;
  urlMenu = '/menu/v1';
  urlProduct = '/trxProduct/v1';
  urlRefference = '/refference/v1';
  // headers : any;

  constructor(private http:HttpClient) {
    console.log(this.urlBase);
    
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // action interceptor
    console.log(request);
    return next.handle(request);
  }

  public post(url: string, body: any) {
    return this.http.post<any>(url, body);
  }

  public postAsync(url: string, body: any) {
    return this.http.post<any>(url, body).toPromise();
  }

  public postBlob(url: string, searchKey: string) {
    return this.http.post<Blob>(url, {searchKey}, {responseType: 'blob' as 'json' });
  }

  public get(url: string) {
    return this.http.get<any>(url);
  }




  // //Get all data Observe
  // getAllUsers() : Observable<any>{
  //   return this.http.get(this.apiUrl);
  // }

  // //Get single data Observe
  // getSingleUser(id:any) : Observable<any>{
  //   let ids = id;
  //   return this.http.get(this.createUrl+"/"+ids);
  // }

  // //Create Data
  // createData(data:any) : Observable<any>{
  //   return this.http.post(this.createUrl, data);
  // }

  // //Delete Data
  // deleteData(id:any) : Observable<any>{
  //   let ids = id;
  //   return this.http.delete(this.createUrl+"/"+ids);
  // }

  // //Update Data
  // updateData(data:any, id:any) : Observable<any>{
  //   let ids = id;
  //   return this.http.put((this.createUrl+"/"+ids), data);
  // }

  // //Get all menu
  // getAllMenu() : Observable<any>{
  //   return this.http.get(this.baseUrl+"/getallmenu");
  // }

}
