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

import { Notice } from '../model/notice';
import { NoticeDTO } from '../model/noticeDTO';
import { PageNotice } from '../model/pageNotice';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class NoticeControllerService {

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
     * Cria um Aviso
     * 
     * @param notice Notice
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST(notice: NoticeDTO, observe?: 'body', reportProgress?: boolean): Observable<NoticeDTO>;
    public createUsingPOST(notice: NoticeDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoticeDTO>>;
    public createUsingPOST(notice: NoticeDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoticeDTO>>;
    public createUsingPOST(notice: NoticeDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (notice === null || notice === undefined) {
            throw new Error('Required parameter notice was null or undefined when calling createUsingPOST.');
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

        return this.httpClient.post<NoticeDTO>(`${this.basePath}/notices`,
            notice,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deleta um Aviso por ID
     * 
     * @param id ID do Aviso
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<Notice>;
    public deleteUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Notice>>;
    public deleteUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Notice>>;
    public deleteUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE.');
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

        return this.httpClient.delete<Notice>(`${this.basePath}/notices/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna um aviso pelo ID
     * 
     * @param id Id do Aviso
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Notice>;
    public findUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Notice>>;
    public findUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Notice>>;
    public findUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findUsingGET.');
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

        return this.httpClient.get<Notice>(`${this.basePath}/notices/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Lista todos os avisos com paginação
     * 
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<PageNotice>;
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageNotice>>;
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageNotice>>;
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', <any>count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', <any>order);
        }
        if (sort !== undefined) {
            queryParameters = queryParameters.set('sort', <any>sort);
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

        return this.httpClient.get<PageNotice>(`${this.basePath}/notices/pagination`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Lista todos os avisos
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Notice>>;
    public getAllUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Notice>>>;
    public getAllUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Notice>>>;
    public getAllUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Notice>>(`${this.basePath}/notices/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna avisos pelo ID da Companhia
     * 
     * @param id Id da Companhia
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByCompanyIdUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Notice>>;
    public getByCompanyIdUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Notice>>>;
    public getByCompanyIdUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Notice>>>;
    public getByCompanyIdUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getByCompanyIdUsingGET.');
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

        return this.httpClient.get<Array<Notice>>(`${this.basePath}/notices/bycompany/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Atualiza um Aviso
     * 
     * @param notice Aviso
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT(notice: NoticeDTO, observe?: 'body', reportProgress?: boolean): Observable<NoticeDTO>;
    public updateUsingPUT(notice: NoticeDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoticeDTO>>;
    public updateUsingPUT(notice: NoticeDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoticeDTO>>;
    public updateUsingPUT(notice: NoticeDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (notice === null || notice === undefined) {
            throw new Error('Required parameter notice was null or undefined when calling updateUsingPUT.');
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

        return this.httpClient.put<NoticeDTO>(`${this.basePath}/notices`,
            notice,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
