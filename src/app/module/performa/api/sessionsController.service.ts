/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { AuthDTO } from '../model/authDTO';
import { EmployeeDTO } from '../model/employeeDTO';
import { SessionDTO } from '../model/sessionDTO';
import { UnlockEmployeeDTO } from '../model/unlockEmployeeDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SessionsControllerService {

    protected basePath = 'https://172.100.10.22:8082/ws-performa/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Login
     * 
     * @param authDTO auth
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authUsingPOST(authDTO: AuthDTO, observe?: 'body', reportProgress?: boolean): Observable<SessionDTO>;
    public authUsingPOST(authDTO: AuthDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SessionDTO>>;
    public authUsingPOST(authDTO: AuthDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SessionDTO>>;
    public authUsingPOST(authDTO: AuthDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authDTO === null || authDTO === undefined) {
            throw new Error('Required parameter authDTO was null or undefined when calling authUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<SessionDTO>(`${this.basePath}/sessions`,
            authDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Logout
     * 
     * @param employeeDTO session
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public logoutUsingPOST(employeeDTO: EmployeeDTO, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public logoutUsingPOST(employeeDTO: EmployeeDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public logoutUsingPOST(employeeDTO: EmployeeDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public logoutUsingPOST(employeeDTO: EmployeeDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (employeeDTO === null || employeeDTO === undefined) {
            throw new Error('Required parameter employeeDTO was null or undefined when calling logoutUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/sessions/logout`,
            employeeDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Unlock employee
     * 
     * @param unlockEmployeeDTO unlockEmployeeDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unlockEmployeeUsingPUT(unlockEmployeeDTO: UnlockEmployeeDTO, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unlockEmployeeUsingPUT(unlockEmployeeDTO: UnlockEmployeeDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unlockEmployeeUsingPUT(unlockEmployeeDTO: UnlockEmployeeDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unlockEmployeeUsingPUT(unlockEmployeeDTO: UnlockEmployeeDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (unlockEmployeeDTO === null || unlockEmployeeDTO === undefined) {
            throw new Error('Required parameter unlockEmployeeDTO was null or undefined when calling unlockEmployeeUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/sessions/unlock-employee`,
            unlockEmployeeDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
