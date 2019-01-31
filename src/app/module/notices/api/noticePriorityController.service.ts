/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
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

import { Observable }                                        from 'rxjs';

import { NoticePriority } from '../model/noticePriority';
import { NoticePriorityDTO } from '../model/noticePriorityDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class NoticePriorityControllerService {

    protected basePath = 'https://172.100.10.34:8080/ws-sgm-notices/api';
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
     * Cria uma prioridade
     * 
     * @param priority NoticePriority
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST1(priority: NoticePriorityDTO, observe?: 'body', reportProgress?: boolean): Observable<NoticePriorityDTO>;
    public createUsingPOST1(priority: NoticePriorityDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoticePriorityDTO>>;
    public createUsingPOST1(priority: NoticePriorityDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoticePriorityDTO>>;
    public createUsingPOST1(priority: NoticePriorityDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (priority === null || priority === undefined) {
            throw new Error('Required parameter priority was null or undefined when calling createUsingPOST1.');
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

        return this.httpClient.post<NoticePriorityDTO>(`${this.basePath}/priorities`,
            priority,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deleta uma prioridade por ID
     * 
     * @param id Id da prioridade
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE1(id: number, observe?: 'body', reportProgress?: boolean): Observable<NoticePriority>;
    public deleteUsingDELETE1(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoticePriority>>;
    public deleteUsingDELETE1(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoticePriority>>;
    public deleteUsingDELETE1(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE1.');
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

        return this.httpClient.delete<NoticePriority>(`${this.basePath}/priorities/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna uma prioridade pelo ID
     * 
     * @param id Id da Prioridade
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUsingGET1(id: number, observe?: 'body', reportProgress?: boolean): Observable<NoticePriority>;
    public findUsingGET1(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoticePriority>>;
    public findUsingGET1(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoticePriority>>;
    public findUsingGET1(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findUsingGET1.');
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

        return this.httpClient.get<NoticePriority>(`${this.basePath}/priorities/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Lista todas as prioridades
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET1(observe?: 'body', reportProgress?: boolean): Observable<Array<NoticePriority>>;
    public getAllUsingGET1(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<NoticePriority>>>;
    public getAllUsingGET1(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<NoticePriority>>>;
    public getAllUsingGET1(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<NoticePriority>>(`${this.basePath}/priorities/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna Prioridade de Avisos pelo Nome da Prioridade
     * 
     * @param id Id da Companhia
     * @param name Nome da Prioridade
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByCompanyAndNameUsingGET(id: number, name: string, observe?: 'body', reportProgress?: boolean): Observable<Array<NoticePriority>>;
    public getByCompanyAndNameUsingGET(id: number, name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<NoticePriority>>>;
    public getByCompanyAndNameUsingGET(id: number, name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<NoticePriority>>>;
    public getByCompanyAndNameUsingGET(id: number, name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getByCompanyAndNameUsingGET.');
        }
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getByCompanyAndNameUsingGET.');
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

        return this.httpClient.get<Array<NoticePriority>>(`${this.basePath}/priorities/companyid/${encodeURIComponent(String(id))}/name/${encodeURIComponent(String(name))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna Prioridade de Avisos pelo ID da Companhia
     * 
     * @param id Id da Companhia
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByCompanyIdUsingGET1(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<NoticePriority>>;
    public getByCompanyIdUsingGET1(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<NoticePriority>>>;
    public getByCompanyIdUsingGET1(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<NoticePriority>>>;
    public getByCompanyIdUsingGET1(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getByCompanyIdUsingGET1.');
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

        return this.httpClient.get<Array<NoticePriority>>(`${this.basePath}/priorities/bycompany/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Atualiza uma prioridade
     * 
     * @param priority NoticePriority
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT1(priority: NoticePriorityDTO, observe?: 'body', reportProgress?: boolean): Observable<NoticePriorityDTO>;
    public updateUsingPUT1(priority: NoticePriorityDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoticePriorityDTO>>;
    public updateUsingPUT1(priority: NoticePriorityDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoticePriorityDTO>>;
    public updateUsingPUT1(priority: NoticePriorityDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (priority === null || priority === undefined) {
            throw new Error('Required parameter priority was null or undefined when calling updateUsingPUT1.');
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

        return this.httpClient.put<NoticePriorityDTO>(`${this.basePath}/priorities`,
            priority,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
