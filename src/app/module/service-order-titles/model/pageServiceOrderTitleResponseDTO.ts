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
import { ServiceOrderTitleResponseDTO } from './serviceOrderTitleResponseDTO';
import { Sort } from './sort';


export interface PageServiceOrderTitleResponseDTO {
    content?: Array<ServiceOrderTitleResponseDTO>;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    size?: number;
    sort?: Sort;
    totalElements?: number;
    totalPages?: number;
}
