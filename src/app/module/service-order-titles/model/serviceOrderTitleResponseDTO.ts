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
import { SegmentResponseDTO } from './segmentResponseDTO';
import { SlaDTO } from './slaDTO';


export interface ServiceOrderTitleResponseDTO {
    id?: number;
    idCompany?: number;
    name?: string;
    segment?: SegmentResponseDTO;
    sla?: SlaDTO;
}
