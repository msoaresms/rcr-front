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

import { Department } from '../model/department';
import { DepartmentDTO } from '../model/departmentDTO';
import { PageDepartment } from '../model/pageDepartment';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DepartmentControllerService {

    protected basePath = 'http://172.100.10.134:8082/ws-sgm-companies/api';
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
     * Cria um Departamento
     * 
     * @param department Department
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST2(department: DepartmentDTO, observe?: 'body', reportProgress?: boolean): Observable<DepartmentDTO>;
    public createUsingPOST2(department: DepartmentDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DepartmentDTO>>;
    public createUsingPOST2(department: DepartmentDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DepartmentDTO>>;
    public createUsingPOST2(department: DepartmentDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (department === null || department === undefined) {
            throw new Error('Required parameter department was null or undefined when calling createUsingPOST2.');
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

        return this.httpClient.post<DepartmentDTO>(`${this.basePath}/departments`,
            department,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deleta um Departamento por ID
     * 
     * @param id ID do Departamento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE2(id: number, observe?: 'body', reportProgress?: boolean): Observable<Department>;
    public deleteUsingDELETE2(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Department>>;
    public deleteUsingDELETE2(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Department>>;
    public deleteUsingDELETE2(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE2.');
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

        return this.httpClient.delete<Department>(`${this.basePath}/departments/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna um departamento pelo ID
     * 
     * @param id Id do Departamento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUsingGET2(id: number, observe?: 'body', reportProgress?: boolean): Observable<Department>;
    public findUsingGET2(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Department>>;
    public findUsingGET2(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Department>>;
    public findUsingGET2(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findUsingGET2.');
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

        return this.httpClient.get<Department>(`${this.basePath}/departments/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Lista todos os departamentos com paginação
     * 
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllPageOrdersUsingGET2(page?: number, count?: number, order?: string, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<PageDepartment>;
    public getAllPageOrdersUsingGET2(page?: number, count?: number, order?: string, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageDepartment>>;
    public getAllPageOrdersUsingGET2(page?: number, count?: number, order?: string, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageDepartment>>;
    public getAllPageOrdersUsingGET2(page?: number, count?: number, order?: string, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<PageDepartment>(`${this.basePath}/departments/pagination`,
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
     * Lista todos os departamentos
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET2(observe?: 'body', reportProgress?: boolean): Observable<Array<Department>>;
    public getAllUsingGET2(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Department>>>;
    public getAllUsingGET2(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Department>>>;
    public getAllUsingGET2(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Department>>(`${this.basePath}/departments/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna departamentos  pelo ID da Area
     * 
     * @param id Id da Area
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByAreaIdUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Department>>;
    public getByAreaIdUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Department>>>;
    public getByAreaIdUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Department>>>;
    public getByAreaIdUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getByAreaIdUsingGET.');
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

        return this.httpClient.get<Array<Department>>(`${this.basePath}/departments/byarea/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna departamentos pelo nome
     * 
     * @param name Nome do Departamento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByNameUsingGET1(name: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Department>>;
    public getByNameUsingGET1(name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Department>>>;
    public getByNameUsingGET1(name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Department>>>;
    public getByNameUsingGET1(name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getByNameUsingGET1.');
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

        return this.httpClient.get<Array<Department>>(`${this.basePath}/departments/byname/${encodeURIComponent(String(name))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Atualiza um Departamento
     * 
     * @param department Department
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT2(department: DepartmentDTO, observe?: 'body', reportProgress?: boolean): Observable<DepartmentDTO>;
    public updateUsingPUT2(department: DepartmentDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DepartmentDTO>>;
    public updateUsingPUT2(department: DepartmentDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DepartmentDTO>>;
    public updateUsingPUT2(department: DepartmentDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (department === null || department === undefined) {
            throw new Error('Required parameter department was null or undefined when calling updateUsingPUT2.');
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

        return this.httpClient.put<DepartmentDTO>(`${this.basePath}/departments`,
            department,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
