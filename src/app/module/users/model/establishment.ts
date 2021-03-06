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
import { Country } from './country';


export interface Establishment {
    banner?: string;
    briefDescription?: string;
    cnpj?: string;
    color?: string;
    configVenda?: number;
    country?: Country;
    createdAt?: Date;
    ctrlReserva?: number;
    days?: number;
    email?: string;
    history?: string;
    icon?: string;
    id?: number;
    kids?: number;
    mission?: string;
    msgReserva?: string;
    name?: string;
    phone?: number;
    status?: number;
    timeEnd?: Date;
    timeInitial?: Date;
    updatedAt?: Date;
}
