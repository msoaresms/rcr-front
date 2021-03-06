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
import { CompanyDTO } from './companyDTO';
import { EmployeeDTO } from './employeeDTO';
import { ModuleFunctionDTO } from './moduleFunctionDTO';


export interface ProfileDTO {
    company?: CompanyDTO;
    employeeDTOList?: Array<EmployeeDTO>;
    idProfile?: number;
    moduleFunctions?: Array<ModuleFunctionDTO>;
    name?: string;
}
