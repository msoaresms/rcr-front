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
import { DowntimeTypeReasonDTO } from './downtimeTypeReasonDTO';
import { Pageable } from './pageable';
import { Sort } from './sort';


export interface SliceDowntimeTypeReasonDTO {
    content?: Array<DowntimeTypeReasonDTO>;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    pageable?: Pageable;
    size?: number;
    sort?: Sort;
}
