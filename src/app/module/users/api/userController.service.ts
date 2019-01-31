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

import { Address } from '../model/address';
import { Administrator } from '../model/administrator';
import { AdministratorCustom} from '../model/administratorCustom';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { environment } from 'environments/environment.dev';
import { User } from 'app/models/users/users.model';


@Injectable()
export class UserControllerService {

    protected basePath = 'http://172.100.10.22:8081/ws-users/api';
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
     * Cria um novo usuário
     * 
     * @param user Salva um usuário no banco de dados
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST(user: User, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public createUsingPOST(user: User, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public createUsingPOST(user: User, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public createUsingPOST(user: User, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling createUsingPOST.');
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

        return this.httpClient.post<User>(`${this.basePath}/user`,
            user,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove um usuário
     * 
     * @param id ID do usuário
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public deleteUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public deleteUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
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

        return this.httpClient.delete<boolean>(`${this.basePath}/user/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Carrega os 5 últimos endereços utilizados por um usuário
     * 
     * @param id ID do usuário
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAddressesUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Address>>;
    public findAddressesUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Address>>>;
    public findAddressesUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Address>>>;
    public findAddressesUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findAddressesUsingGET.');
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

        return this.httpClient.get<Array<Address>>(`${this.basePath}/user/address/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Lista todos os usuários
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<User>>;
    public findAllUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<User>>>;
    public findAllUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<User>>>;
    public findAllUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<User>>(`${this.basePath}/user`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Carrega um usuário pelo CPF
     * 
     * @param cpf CPF do usuário
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByCpfUsingGET(cpf: string, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public findByCpfUsingGET(cpf: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public findByCpfUsingGET(cpf: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public findByCpfUsingGET(cpf: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (cpf === null || cpf === undefined) {
            throw new Error('Required parameter cpf was null or undefined when calling findByCpfUsingGET.');
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

        return this.httpClient.get<User>(`${this.basePath}/user/check/${encodeURIComponent(String(cpf))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Carrega um usuário pelo telefone
     * 
     * @param phone Telefone do usuário
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByPhoneUsingGET(phone: string, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public findByPhoneUsingGET(phone: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public findByPhoneUsingGET(phone: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public findByPhoneUsingGET(phone: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (phone === null || phone === undefined) {
            throw new Error('Required parameter phone was null or undefined when calling findByPhoneUsingGET.');
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

        return this.httpClient.get<User>(`${this.basePath}/user/phone/${encodeURIComponent(String(phone))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Carrega um usuário pelo ID
     * 
     * @param id ID do usuário
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByPkUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public findByPkUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public findByPkUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public findByPkUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByPkUsingGET.');
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

        return this.httpClient.get<User>(`${this.basePath}/user/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Autentica um usuário por login e senha
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAdminAllUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Administrator>>;
    public getAdminAllUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Administrator>>>;
    public getAdminAllUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Administrator>>>;
    public getAdminAllUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Administrator>>(`${this.basePath}/user/user/administrator/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Autentica um usuário por login e senha
     * 
     * @param login Login do admin
     * @param senha Senha do admin
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loginAdminUsingGET(login: string, senha: string, observe?: 'body', reportProgress?: boolean): Observable<Administrator>;
    public loginAdminUsingGET(login: string, senha: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Administrator>>;
    public loginAdminUsingGET(login: string, senha: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Administrator>>;
    public loginAdminUsingGET(login: string, senha: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling loginAdminUsingGET.');
        }
        if (senha === null || senha === undefined) {
            throw new Error('Required parameter senha was null or undefined when calling loginAdminUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (login !== undefined) {
            queryParameters = queryParameters.set('login', <any>login);
        }
        if (senha !== undefined) {
            queryParameters = queryParameters.set('senha', <any>senha);
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

        return this.httpClient.get<Administrator>(`${this.basePath}/user/user/administrator/login`,
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
     * Autentica um usuário por login e senha
     * 
     * @param login Login do usuário
     * @param senha Senha do usuário
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loginUsingPOST(login: string, senha: string, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public loginUsingPOST(login: string, senha: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public loginUsingPOST(login: string, senha: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public loginUsingPOST(login: string, senha: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling loginUsingPOST.');
        }
        if (senha === null || senha === undefined) {
            throw new Error('Required parameter senha was null or undefined when calling loginUsingPOST.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (login !== undefined) {
            queryParameters = queryParameters.set('login', <any>login);
        }
        if (senha !== undefined) {
            queryParameters = queryParameters.set('senha', <any>senha);
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

        return this.httpClient.post<User>(`${this.basePath}/user/login`,
            null,
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
     * Atualiza um usuário
     * 
     * @param user Usuário
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT(user: User, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public updateUsingPUT(user: User, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public updateUsingPUT(user: User, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public updateUsingPUT(user: User, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling updateUsingPUT.');
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

        return this.httpClient.put<User>(`${this.basePath}/user`,
            user,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public loginUsingPOSTCustom(login: string, senha: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling loginAdminUsingGET.');
        }
        if (senha === null || senha === undefined) {
            throw new Error('Required parameter senha was null or undefined when calling loginAdminUsingGET.');
        }

        let username = 'aVgjhEBcnN-ytRrewsWJrSpoKnh'
        let password = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj'  
      
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(`${username}:${password}`)
            }),
        };


        const formData = new URLSearchParams();
        // append your data
        formData.set('username', <any>login);
        formData.set('password', <any>senha);
        formData.set('grant_type', 'password');
        
        console.log(formData.getAll);
        console.log(formData.toString());
        
        return this.httpClient.post<AdministratorCustom>('https://lupa-v1.herokuapp.com/v1/oauth2/token',formData.toString(), httpOptions,
        );
    }

    public createNewUser(login: string, senha: string, name:string, registration:string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling loginAdminUsingGET.');
        }
        if (senha === null || senha === undefined) {
            throw new Error('Required parameter senha was null or undefined when calling loginAdminUsingGET.');
        }

        let username = 'aVgjhEBcnN-ytRrewsWJrSpoKnh'
        let password = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj'  
      
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(`${username}:${password}`)
            }),
        };


        const formData = new URLSearchParams();
        // append your data
        formData.set('name', <any>name);
        formData.set('email', <any>login);
        formData.set('password', <any>senha);
        formData.set('registration', <any>registration);
        
        console.log(formData.getAll);
        console.log(formData.toString());
        
        return this.httpClient.post<AdministratorCustom>('https://lupa-v1.herokuapp.com/v1/oauth2/register',formData.toString(), httpOptions,
        );
    }

    public getUserProfile(): Observable<any> {
                
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };
        
        //https://lupa-v1.herokuapp.com/auth/v1/admin/allprofiles
        return this.httpClient.get<any>(environment.origin.transports + '/user/profile', httpOptions,);
    }

    public updateUserProfile(user: any): Observable<any> {
                
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };
        
        const formData = new URLSearchParams();
        // append your data
        formData.set('name', user.name);
        formData.set('email', user.email);
        formData.set('registration', user.registration);
        
        console.log(formData.toString());

        //https://lupa-v1.herokuapp.com/auth/v1/admin/allprofiles
        return this.httpClient.put<any>(environment.origin.users + '/user/profile', formData.toString(), httpOptions,);
    }

    public changeUserPassword(user: any): Observable<any> {
                
        let token = localStorage.getItem('token');
        
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };
        
        const formData = new URLSearchParams();
        // append your data
        formData.set('currentPassword', user.currentPassword);
        formData.set('password', user.newPassword);
        
        return this.httpClient.put<any>(environment.origin.users + '/user/password', formData.toString(), httpOptions,);
    }
}
