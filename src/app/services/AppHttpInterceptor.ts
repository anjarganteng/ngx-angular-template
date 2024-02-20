import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('call intercept');
        // action interceptor
        // sample token
        // localStorage.setItem('dataSource', this.dataSource.length);
        // const idToken =
        //    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcmFzZXR5b2RoYW1hcjI3QGdtYWlsLmNvbSIsInJvbGVzIjoiQURNSU4iLCJleHAiOjE2MjQ2OTA4ODF9.MAAfDwvcKGq6OrVM9VAMF9JCHkTMUhaqQG41AzaKw-M';
        // if (idToken) {
        request = request.clone({
            headers: request.headers
            .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            // .set('Content-Type', 'application/json')
            // .set('Accept', 'application/json')
            // .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJTei1uOEJhY3Bya0s2QWZXOTlONUFfaF9paFVLeFM4WVdBcFB3NXJDay1FIn0.eyJleHAiOjE3MDE2NzE1MjEsImlhdCI6MTcwMTY3MTQ2MSwianRpIjoiNTZiZjRjZDUtM2IxNS00NzQxLWE3ZTYtYTY5NTQ3MmUxMWIwIiwiaXNzIjoiaHR0cDovLzEwLjE5Mi43OC4xODo4MDgwL3JlYWxtcy9tYXN0ZXIiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNmNjMWE1NWUtOThmMS00MzlhLThlN2UtMTkxNjYwMzgwMmZmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZmUtcHNhayIsInNlc3Npb25fc3RhdGUiOiJjNjQ0MzE5NS1kMGIyLTQ1NTAtOTc1NC05ZTZkYTRiZmFmYzgiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW1hc3RlciIsInNhay1hZG1pbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoidGVubmFudElkIG9wZW4taWQgZW1haWwgbWljcm9wcm9maWxlLWp3dCBhZGRyZXNzIGJyYW5jaENvZGUgcHJvZmlsZSIsInNpZCI6ImM2NDQzMTk1LWQwYjItNDU1MC05NzU0LTllNmRhNGJmYWZjOCIsImJyYW5jaENvZGUiOiIwMDEiLCJ1cG4iOiJiYW0tYWRtaW4xIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImFkZHJlc3MiOnt9LCJ0ZW5uYW50SWQiOiJCQU0iLCJuYW1lIjoiQkFNLUFETUlOMSBCQU0tTEFTVE5BTUUiLCJncm91cHMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJzYWstYWRtaW4iXSwicHJlZmVycmVkX3VzZXJuYW1lIjoiYmFtLWFkbWluMSIsImdpdmVuX25hbWUiOiJCQU0tQURNSU4xIiwiZmFtaWx5X25hbWUiOiJCQU0tTEFTVE5BTUUifQ.fCfC_mQZytTU2c4MsSlRrg41P_mRNZpHcA_vb6Wsdkn1ll6DwDDzcdq-VKDr281Rh3U3ZTs3cEfnVQPkk42inLbvTkR9LnTyG3BX3pSbUDa1LTZcicTtuyY-6lNin8_iVRs3MgPjyd7EA50QEpzxMX7WIF0ezCu4GGDBTI_1U_fh-yUZpjyjxSkhdBcmTPncQMDtupyIW-umBj96Nr-RL9EZ6JQgmrxOXqKaRWdeGPBeaOk625W3hEdAM4csFyhkhR73VnHtLaXRwxon158BrprBtJGuF6Eq3HC0rPnoC0VNc_I0L5C5LlShYFzzEl07VXaqvV3zCqvNqMU0V1Qbgw')
        });
        // }

        // console.log(request);
        return next.handle(request);
    }
}
