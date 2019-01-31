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
import { DefectDTO } from './defectDTO';
import { DepartmentDTO } from './departmentDTO';
import { EmployeeDTO } from './employeeDTO';
import { MaintenanceActionDTO } from './maintenanceActionDTO';
import { MovementHistoryDTO } from './movementHistoryDTO';
import { TechnicalActionsDTO } from './technicalActionsDTO';


export interface TechnicalAnalysisDTO {
    company?: CompanyDTO;
    dateTimeIn?: Date;
    dateTimeOut?: Date;
    defectOut?: DefectDTO;
    defectTechnical?: DefectDTO;
    departmentOut?: DepartmentDTO;
    employeeOut?: EmployeeDTO;
    employeeTechnical?: EmployeeDTO;
    idTechnicalAnalysis?: number;
    maintenanceAction?: MaintenanceActionDTO;
    movementHistory?: MovementHistoryDTO;
    note?: string;
    technicalActions?: TechnicalActionsDTO;
}
