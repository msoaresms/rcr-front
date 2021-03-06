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

import { RouteDTO } from '../model/routeDTO';
import { SliceRouteDTO } from '../model/sliceRouteDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RoutesControllerService {

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
     * Create new route
     * 
     * @param routeDTO route
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST18(routeDTO: RouteDTO, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<RouteDTO>;
    public createUsingPOST18(routeDTO: RouteDTO, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RouteDTO>>;
    public createUsingPOST18(routeDTO: RouteDTO, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RouteDTO>>;
    public createUsingPOST18(routeDTO: RouteDTO, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (routeDTO === null || routeDTO === undefined) {
            throw new Error('Required parameter routeDTO was null or undefined when calling createUsingPOST18.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST18.');
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
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<RouteDTO>(`${this.basePath}/routes`,
            routeDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete route
     * 
     * @param id id
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE16(id: number, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsingDELETE16(id: number, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsingDELETE16(id: number, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsingDELETE16(id: number, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE16.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE16.');
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

        return this.httpClient.delete<any>(`${this.basePath}/routes/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find route by id
     * 
     * @param id id
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdUsingGET18(id: number, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<RouteDTO>;
    public findByIdUsingGET18(id: number, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RouteDTO>>;
    public findByIdUsingGET18(id: number, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RouteDTO>>;
    public findByIdUsingGET18(id: number, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET18.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET18.');
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

        return this.httpClient.get<RouteDTO>(`${this.basePath}/routes/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all routes
     * 
     * @param idEmployee Employee Id
     * @param page 
     * @param modelName modelName
     * @param count 
     * @param order 
     * @param sortProperty 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET19(idEmployee: number, page: number, modelName?: string, count?: number, order?: string, sortProperty?: string, observe?: 'body', reportProgress?: boolean): Observable<SliceRouteDTO>;
    public getAllUsingGET19(idEmployee: number, page: number, modelName?: string, count?: number, order?: string, sortProperty?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SliceRouteDTO>>;
    public getAllUsingGET19(idEmployee: number, page: number, modelName?: string, count?: number, order?: string, sortProperty?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SliceRouteDTO>>;
    public getAllUsingGET19(idEmployee: number, page: number, modelName?: string, count?: number, order?: string, sortProperty?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET19.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET19.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (modelName !== undefined) {
            queryParameters = queryParameters.set('modelName', <any>modelName);
        }
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

        return this.httpClient.get<SliceRouteDTO>(`${this.basePath}/routes`,
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
     * Update route
     * 
     * @param id id
     * @param routeDTO route
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT17(id: number, routeDTO: RouteDTO, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<RouteDTO>;
    public updateUsingPUT17(id: number, routeDTO: RouteDTO, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RouteDTO>>;
    public updateUsingPUT17(id: number, routeDTO: RouteDTO, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RouteDTO>>;
    public updateUsingPUT17(id: number, routeDTO: RouteDTO, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT17.');
        }
        if (routeDTO === null || routeDTO === undefined) {
            throw new Error('Required parameter routeDTO was null or undefined when calling updateUsingPUT17.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT17.');
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
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<RouteDTO>(`${this.basePath}/routes/${encodeURIComponent(String(id))}`,
            routeDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
