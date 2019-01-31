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

import { DowntimeReasonDTO } from '../model/downtimeReasonDTO';
import { SliceDowntimeReasonDTO } from '../model/sliceDowntimeReasonDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DowntimeReasonControllerService {

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
     * Create new downtime reason
     * 
     * @param downtimeReasonDTO downtimereason
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST7(downtimeReasonDTO: DowntimeReasonDTO, observe?: 'body', reportProgress?: boolean): Observable<DowntimeReasonDTO>;
    public createUsingPOST7(downtimeReasonDTO: DowntimeReasonDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DowntimeReasonDTO>>;
    public createUsingPOST7(downtimeReasonDTO: DowntimeReasonDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DowntimeReasonDTO>>;
    public createUsingPOST7(downtimeReasonDTO: DowntimeReasonDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (downtimeReasonDTO === null || downtimeReasonDTO === undefined) {
            throw new Error('Required parameter downtimeReasonDTO was null or undefined when calling createUsingPOST7.');
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

        return this.httpClient.post<DowntimeReasonDTO>(`${this.basePath}/downtime-reasons`,
            downtimeReasonDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete downtime reason
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE7(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsingDELETE7(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsingDELETE7(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsingDELETE7(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE7.');
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
        ];

        return this.httpClient.delete<any>(`${this.basePath}/downtime-reasons/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find downtime reason by id
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdUsingGET8(id: number, observe?: 'body', reportProgress?: boolean): Observable<DowntimeReasonDTO>;
    public findByIdUsingGET8(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DowntimeReasonDTO>>;
    public findByIdUsingGET8(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DowntimeReasonDTO>>;
    public findByIdUsingGET8(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET8.');
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
        ];

        return this.httpClient.get<DowntimeReasonDTO>(`${this.basePath}/downtime-reasons/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all downtime reasons
     * 
     * @param idEmployee Employee Id
     * @param page 
     * @param count 
     * @param order 
     * @param sortProperty 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET8(idEmployee: number, page: number, count?: number, order?: string, sortProperty?: string, observe?: 'body', reportProgress?: boolean): Observable<SliceDowntimeReasonDTO>;
    public getAllUsingGET8(idEmployee: number, page: number, count?: number, order?: string, sortProperty?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SliceDowntimeReasonDTO>>;
    public getAllUsingGET8(idEmployee: number, page: number, count?: number, order?: string, sortProperty?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SliceDowntimeReasonDTO>>;
    public getAllUsingGET8(idEmployee: number, page: number, count?: number, order?: string, sortProperty?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET8.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET8.');
        }

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
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', <any>sortProperty);
        }

        let headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }

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
        ];

        return this.httpClient.get<SliceDowntimeReasonDTO>(`${this.basePath}/downtime-reasons`,
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
     * Update downtime reason
     * 
     * @param id id
     * @param downtimeReasonDTO downtimereason
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT7(id: number, downtimeReasonDTO: DowntimeReasonDTO, observe?: 'body', reportProgress?: boolean): Observable<DowntimeReasonDTO>;
    public updateUsingPUT7(id: number, downtimeReasonDTO: DowntimeReasonDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DowntimeReasonDTO>>;
    public updateUsingPUT7(id: number, downtimeReasonDTO: DowntimeReasonDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DowntimeReasonDTO>>;
    public updateUsingPUT7(id: number, downtimeReasonDTO: DowntimeReasonDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT7.');
        }
        if (downtimeReasonDTO === null || downtimeReasonDTO === undefined) {
            throw new Error('Required parameter downtimeReasonDTO was null or undefined when calling updateUsingPUT7.');
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

        return this.httpClient.put<DowntimeReasonDTO>(`${this.basePath}/downtime-reasons/${encodeURIComponent(String(id))}`,
            downtimeReasonDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
