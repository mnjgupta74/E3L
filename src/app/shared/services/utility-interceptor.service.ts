import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"; 
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class TokenInterceptorService implements HttpInterceptor {
    constructor() {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MTAiLCJVc2VySWQiOiI3MTAiLCJleHAiOjE2NzQ1MDUwNTYsIlVzZXJUeXBlIjoiMTAiLCJpYXQiOjE2NzM2MDUwNTZ9.UhPJrSAJXjpQLN_KF-rL_F4QR1QsLq3G4BsaBbO8JXZN6AzI6bdEjBt8JwkrLHyvf2sopIDVfE91pAL92dkoOQ';
        let jwttoken= req.clone({
            setHeaders: {
                Authorization: 'bearer ' + token
                // 'securitykey' : 'key123'
            }
        })
        return next.handle(jwttoken)
    }
}
