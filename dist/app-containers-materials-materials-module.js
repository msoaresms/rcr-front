(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-containers-materials-materials-module"],{

/***/ "./src/app/containers/materials/material-create-update/material-create-update.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/containers/materials/material-create-update/material-create-update.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fury-dialog-panel>\n    <div class=\"form-content\">\n        <div class=\"form-title\">\n            <span>Cadastrar Materiais</span>\n        </div>\n        <div class=\"form-fields\">\n            <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n                <mat-step [stepControl]=\"firstFormGroup\">\n                    <form [formGroup]=\"firstFormGroup\">\n                        <ng-template matStepLabel>Preencha o Nome e o Endereço do Material</ng-template>\n                        <div>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Nome do Material\" pattern=\"^(?!\\s*$).+\" formControlName=\"name\"\n                                    id=\"name\" required maxlength=\"255\" />\n                            </mat-form-field>\n                        </div>\n                        <div>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Endereço\" pattern=\"^(?!\\s*$).+\" formControlName=\"address\"\n                                    id=\"address\" required maxlength=\"255\" />\n                            </mat-form-field>\n                        </div>\n                        <div>\n                            <button mat-button matStepperNext>Próximo</button>\n                        </div>\n                    </form>\n                </mat-step>\n                <mat-step [stepControl]=\"secondFormGroup\">\n                    <form [formGroup]=\"secondFormGroup\">\n                        <ng-template matStepLabel>Selecione as Opções</ng-template>\n                        <div>\n                            <mat-form-field>\n                                <mat-select placeholder=\"Selecione o Segmento\" formControlName=\"idSegment\" id=\"idSegment\" required>\n                                    <mat-option *ngFor=\"let segment of segments\" [value]=\"segment.id\">\n                                        {{segment.name}}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                        <div>\n                            <mat-form-field>\n                                <mat-select placeholder=\"Selecione o Fabricante\" (selectionChange)=\"loadModels(secondFormGroup.get('idFabricator').value)\"\n                                    formControlName=\"idFabricator\" id=\"idFabricator\" required>\n                                    <mat-option *ngFor=\"let fabricator of fabricators\" [value]=\"fabricator.id\">\n                                        {{fabricator.name}}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                        <div>\n                            <mat-form-field>\n                                <mat-select placeholder=\"Selecione o Modelo\" formControlName=\"idModel\" id=\"idModel\" required>\n                                    <mat-option *ngFor=\"let model of models\" [value]=\"model.id\">\n                                        {{model.name}}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                        <div>\n                            <mat-form-field>\n                                <mat-select placeholder=\"Selecione o Setor\" formControlName=\"idSector\" id=\"idSector\"\n                                    required>\n                                    <mat-option *ngFor=\"let sector of sectors\" [value]=\"sector.id\">\n                                        {{sector.name}}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div>\n                            <button mat-button matStepperPrevious>Voltar</button>\n                            <button mat-button matStepperNext>Próximo</button>\n                        </div>\n                    </form>\n                </mat-step>\n                <mat-step [stepControl]=\"thirdFormGroup\">\n                    <form [formGroup]=\"thirdFormGroup\">\n                        <ng-template matStepLabel>Preencha as Quantidades</ng-template>\n                        <div>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Quantidade Real\" pattern=\"^(?!\\s*$).+\" formControlName=\"realQuantity\" integer\n                                    id=\"realQuantity\" required maxlength=\"255\" />\n                            </mat-form-field>\n                        </div>\n                        <div>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Quanitdade Máxima\" pattern=\"^(?!\\s*$).+\" formControlName=\"maximumQuantity\" integer\n                                    id=\"maximumQuantity\" required maxlength=\"255\" />\n                            </mat-form-field>\n                        </div>\n                        <div>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Quanitdade Mínima\" pattern=\"^(?!\\s*$).+\" formControlName=\"minimumQuantity\" integer\n                                    id=\"minimumQuantity\" required maxlength=\"255\" />\n                            </mat-form-field>\n                        </div>\n\n                        <div>\n                            <button mat-button matStepperPrevious>Voltar</button>\n                            <button mat-button matStepperNext>Próximo</button>\n                        </div>\n                    </form>\n                </mat-step>\n                <mat-step [stepControl]=\"fourthFormGroup\">\n                    <form [formGroup]=\"fourthFormGroup\">\n                        <ng-template matStepLabel>Preencha as Informações Sobre o Sinergi</ng-template>\n                        <div>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Código Sinergi\" pattern=\"^(?!\\s*$).+\" formControlName=\"sinergiCode\"\n                                    id=\"sinergiCode\" required maxlength=\"255\" />\n                            </mat-form-field>\n\n                        </div>\n                        <div>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Valor no Sinergi\" pattern=\"^(?!\\s*$).+\" formControlName=\"sinergiValue\"\n                                    id=\"sinergiValue\" required maxlength=\"255\" currency/>\n                            </mat-form-field>\n                        </div>\n                        <div>\n                            <button mat-button matStepperPrevious>Voltar</button>\n                        </div>\n                    </form>\n                </mat-step>\n            </mat-vertical-stepper>\n\n\n        </div>\n    </div>\n\n    <div class=\"footer-content\" footer-content>\n        <button *ngIf=\"isCreateMode()\" mat-raised-button [disabled]=\"!(firstFormGroup.valid && secondFormGroup.valid && thirdFormGroup.valid && fourthFormGroup.valid)\" class=\"btn-rounded btn-save\"\n            (click)=\"save()\" color=\"primary\">SALVAR</button>\n        <button *ngIf=\"isUpdateMode()\" mat-raised-button [disabled]=\"!(firstFormGroup.valid && secondFormGroup.valid && thirdFormGroup.valid && fourthFormGroup.valid)\" class=\"btn-rounded btn-save\"\n            color=\"primary\" (click)=\"save()\">ATUALIZAR</button>\n    </div>\n\n\n</fury-dialog-panel>"

/***/ }),

/***/ "./src/app/containers/materials/material-create-update/material-create-update.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/containers/materials/material-create-update/material-create-update.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content .form-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .dialog-content .form-content .form-title {\n    font-size: 150%;\n    color: #3f4ade;\n    font-weight: bold;\n    text-align: center;\n    height: 20%;\n    align-items: center;\n    display: flex;\n    justify-content: center; }\n  .dialog-content .form-content .form-fields {\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    height: 80%; }\n  .dialog-content .form-content .form-fields form {\n      height: 100%;\n      width: 100%; }\n  .dialog-content .form-content .form-fields form .row {\n        display: flex;\n        padding-left: 10px;\n        padding-right: 10px;\n        flex-wrap: wrap; }\n  .dialog-content .form-content .form-fields form .field {\n        display: flex;\n        justify-content: center;\n        flex: 1 .5;\n        margin-right: 10px;\n        margin-left: 10px; }\n  .dialog-content .form-content .form-fields form #sinergiValue {\n        text-align: right; }\n  .dialog-content .form-content .form-fields form .name,\n      .dialog-content .form-content .form-fields form .address,\n      .dialog-content .form-content .form-fields form .idSegment,\n      .dialog-content .form-content .form-fields form .idFabricator,\n      .dialog-content .form-content .form-fields form .idModel,\n      .dialog-content .form-content .form-fields form .idSector,\n      .dialog-content .form-content .form-fields form .realQuantity,\n      .dialog-content .form-content .form-fields form .maximumQuantity,\n      .dialog-content .form-content .form-fields form .minimumQuantity,\n      .dialog-content .form-content .form-fields form .sinergiCode,\n      .dialog-content .form-content .form-fields form .sinergiValue {\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  .dialog-content .form-content .form-fields form .name mat-form-field,\n        .dialog-content .form-content .form-fields form .address mat-form-field,\n        .dialog-content .form-content .form-fields form .idSegment mat-form-field,\n        .dialog-content .form-content .form-fields form .idFabricator mat-form-field,\n        .dialog-content .form-content .form-fields form .idModel mat-form-field,\n        .dialog-content .form-content .form-fields form .idSector mat-form-field,\n        .dialog-content .form-content .form-fields form .realQuantity mat-form-field,\n        .dialog-content .form-content .form-fields form .maximumQuantity mat-form-field,\n        .dialog-content .form-content .form-fields form .minimumQuantity mat-form-field,\n        .dialog-content .form-content .form-fields form .sinergiCode mat-form-field,\n        .dialog-content .form-content .form-fields form .sinergiValue mat-form-field {\n          flex: 1 1 auto; }\n  .dialog-panel {\n  box-shadow: unset !important; }\n  .dialog-footer {\n  display: flex;\n  padding-right: 24px; }\n  .dialog-footer .footer-content {\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: flex-end; }\n  .dialog-footer .footer-content .btn-save {\n      flex: .2 1 0%;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n      font-size: 100%;\n      font-weight: lighter; }\n  @media screen and (max-height: 400px) {\n  .btn-save {\n    line-height: 24px !important; } }\n  @media screen and (max-width: 600px), (max-height: 600px) {\n  .area-panel {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9tYXRlcmlhbHMvbWF0ZXJpYWwtY3JlYXRlLXVwZGF0ZS9tYXRlcmlhbC1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFyY3VzLmp1bmlvci9Eb2N1bWVudG9zL1RyYW5zaXJlL0dpdC9yY3Ivc3JjL3N0eWxlcy9fY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRVEsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBK0RmO0VBbkVMO0lBT1ksZ0JBQWU7SUFDZixlQzJCSztJRDFCTCxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLHdCQUF1QixFQUMxQjtFQWZUO0lBa0JZLGVBQWM7SUFDZCxvQkFBbUI7SUFDbkIsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYixZQUFXLEVBNENkO0VBbEVUO01BeUJnQixhQUFZO01BQ1osWUFBVyxFQXVDZDtFQWpFYjtRQTZCb0IsY0FBYTtRQUNiLG1CQUFrQjtRQUNsQixvQkFBbUI7UUFDbkIsZ0JBQWUsRUFDbEI7RUFqQ2pCO1FBb0NvQixjQUFhO1FBQ2Isd0JBQXVCO1FBQ3ZCLFdBQVU7UUFDVixtQkFBa0I7UUFDbEIsa0JBQWlCLEVBQ3BCO0VBekNqQjtRQTJDb0Isa0JBQWlCLEVBQ3BCO0VBNUNqQjs7Ozs7Ozs7Ozs7UUF3RG9CLGNBQWE7UUFDYix3QkFBdUI7UUFDdkIsb0JBQW1CLEVBTXRCO0VBaEVqQjs7Ozs7Ozs7Ozs7VUE4RHdCLGVBQWMsRUFDakI7RUFPckI7RUFDSSw2QkFBNEIsRUFDL0I7RUFFRDtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFldEI7RUFqQkQ7SUFLUSxjQUFhO0lBQ2IsZUFBYztJQUNkLG9CQUFtQjtJQUNuQiwwQkFBeUIsRUFRNUI7RUFoQkw7TUFXWSxjQUFhO01BQ2IseUNBQXdDO01BQ3hDLGdCQUFlO01BQ2YscUJBQW9CLEVBQ3ZCO0VBSVQ7RUFDSTtJQUNJLDZCQUE0QixFQUMvQixFQUFBO0VBR0w7RUFFSTtJQUNJLDRCQUEyQjtJQUMzQix1QkFBc0I7SUFDdEIsd0JBQXVCLEVBQzFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL21hdGVyaWFscy9tYXRlcmlhbC1jcmVhdGUtdXBkYXRlL21hdGVyaWFsLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4kY29sb3ItZm9udDogbWFwLWdldCgkbWFwOiAkbWF0LXNnbS1wcmltYXJ5LCAka2V5OiA1MDApO1xuXG4uZGlhbG9nLWNvbnRlbnQge1xuICAgIC5mb3JtLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgLmZvcm0tdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1mb250O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1maWVsZHMge1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG5cbiAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZmllbGQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAuNTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3NpbmVyZ2lWYWx1ZXtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYW1lLFxuICAgICAgICAgICAgICAgIC5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIC5pZFNlZ21lbnQsXG4gICAgICAgICAgICAgICAgLmlkRmFicmljYXRvcixcbiAgICAgICAgICAgICAgICAuaWRNb2RlbCxcbiAgICAgICAgICAgICAgICAuaWRTZWN0b3IsXG4gICAgICAgICAgICAgICAgLnJlYWxRdWFudGl0eSxcbiAgICAgICAgICAgICAgICAubWF4aW11bVF1YW50aXR5LFxuICAgICAgICAgICAgICAgIC5taW5pbXVtUXVhbnRpdHksXG4gICAgICAgICAgICAgICAgLnNpbmVyZ2lDb2RlLFxuICAgICAgICAgICAgICAgIC5zaW5lcmdpVmFsdWUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbi5kaWFsb2ctcGFuZWx7XG4gICAgYm94LXNoYWRvdzogdW5zZXQgIWltcG9ydGFudDtcbn1cbiAgICBcbi5kaWFsb2ctZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG5cbiAgICAuZm9vdGVyLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAuYnRuLXNhdmUge1xuICAgICAgICAgICAgZmxleDogLjIgMSAwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQwMHB4KSB7XG4gICAgLmJ0bi1zYXZlIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSxcbihtYXgtaGVpZ2h0IDogNjAwcHgpIHtcbiAgICAuYXJlYS1wYW5lbCB7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4iLCIvLyAkbWF0LXNnbS1wcmltYXJ5OiAoXG4vLyAgICAgNTAgOiAjZTVlN2ViLFxuLy8gICAgIDEwMCA6ICNiZWM0Y2MsXG4vLyAgICAgMjAwIDogIzkzOWRhYixcbi8vICAgICAzMDAgOiAjNjg3Njg5LFxuLy8gICAgIDQwMCA6ICM0NzU4NmYsXG4vLyAgICAgNTAwIDogIzI3M2I1Nixcbi8vICAgICA2MDAgOiAjMjMzNTRmLFxuLy8gICAgIDcwMCA6ICMxZDJkNDUsXG4vLyAgICAgODAwIDogIzE3MjYzYyxcbi8vICAgICA5MDAgOiAjMGUxOTJiLFxuLy8gICAgIEExMDAgOiAjNjk5YmZmLFxuLy8gICAgIEEyMDAgOiAjMzY3OWZmLFxuLy8gICAgIEE0MDAgOiAjMDM1N2ZmLFxuLy8gICAgIEE3MDAgOiAjMDA0ZWU5LFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgODAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgOTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTcwMCA6ICNmZmZmZmYsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20tcHJpbWFyeTogKFxuICAgIDUwIDogI2U4ZTlmYixcbiAgICAxMDAgOiAjYzVjOWY1LFxuICAgIDIwMCA6ICM5ZmE1ZWYsXG4gICAgMzAwIDogIzc5ODBlOCxcbiAgICA0MDAgOiAjNWM2NWUzLFxuICAgIDUwMCA6ICMzZjRhZGUsXG4gICAgLy81MDAgOiAjMDAwMDAwLFxuICAgIDYwMCA6ICMzOTQzZGEsXG4gICAgNzAwIDogIzMxM2FkNSxcbiAgICA4MDAgOiAjMjkzMmQxLFxuICAgIDkwMCA6ICMxYjIyYzgsXG4gICAgQTEwMCA6ICNmZGZkZmYsXG4gICAgQTIwMCA6ICNjYWNjZmYsXG4gICAgQTQwMCA6ICM5NzliZmYsXG4gICAgQTcwMCA6ICM3ZTgyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWF0LXNnbS1hY2NlbnQ6IChcbiAgICA1MCA6ICNlN2VjZWEsXG4gICAgMTAwIDogI2MyY2VjYixcbiAgICAyMDAgOiAjOTlhZWE5LFxuICAgIDMwMCA6ICM3MDhlODcsXG4gICAgNDAwIDogIzUyNzU2ZCxcbiAgICA1MDAgOiAjMzM1ZDUzLFxuICAgIDYwMCA6ICMyZTU1NGMsXG4gICAgNzAwIDogIzI3NGI0MixcbiAgICA4MDAgOiAjMjA0MTM5LFxuICAgIDkwMCA6ICMxNDMwMjksXG4gICAgQTEwMCA6ICM3MWZmZGEsXG4gICAgQTIwMCA6ICMzZWZmY2QsXG4gICAgQTQwMCA6ICMwYmZmYmYsXG4gICAgQTcwMCA6ICMwMGYxYjIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4vLyAkbWF0LXNnbS13YXJuOiAoXG4vLyAgICAgNTAgOiAjZjVmN2Y4LFxuLy8gICAgIDEwMCA6ICNlNmVhZWQsXG4vLyAgICAgMjAwIDogI2Q2ZGRlMixcbi8vICAgICAzMDAgOiAjYzZjZmQ2LFxuLy8gICAgIDQwMCA6ICNiOWM0Y2QsXG4vLyAgICAgNTAwIDogI2FkYmFjNCxcbi8vICAgICA2MDAgOiAjYTZiM2JlLFxuLy8gICAgIDcwMCA6ICM5Y2FiYjYsXG4vLyAgICAgODAwIDogIzkzYTNhZixcbi8vICAgICA5MDAgOiAjODM5NGEyLFxuLy8gICAgIEExMDAgOiAjZmZmZmZmLFxuLy8gICAgIEEyMDAgOiAjZmRmZWZmLFxuLy8gICAgIEE0MDAgOiAjYzllN2ZmLFxuLy8gICAgIEE3MDAgOiAjYjBkYmZmLFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgODAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgOTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20td2FybjogKFxuICAgIDUwIDogI2ZlZThlNyxcbiAgICAxMDAgOiAjZmJjNmMzLFxuICAgIDIwMCA6ICNmOWExOWIsXG4gICAgMzAwIDogI2Y3N2I3MixcbiAgICA0MDAgOiAjZjU1ZTU0LFxuICAgIDUwMCA6ICNmMzQyMzYsXG4gICAgNjAwIDogI2YxM2MzMCxcbiAgICA3MDAgOiAjZWYzMzI5LFxuICAgIDgwMCA6ICNlZDJiMjIsXG4gICAgOTAwIDogI2VhMWQxNixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZThlNyxcbiAgICBBNDAwIDogI2ZmYjZiNCxcbiAgICBBNzAwIDogI2ZmOWQ5YixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbiRtZC1jYWxlbmRhcjogKFxuICAgIDUwIDogI2VmZjFmMyxcbiAgICAxMDAgOiAjZDhkY2UxLFxuICAgIDIwMCA6ICNiZWM0Y2QsXG4gICAgMzAwIDogI2E0YWNiOCxcbiAgICA0MDAgOiAjOTE5YmE5LFxuICAgIDUwMCA6ICM3ZDg5OWEsXG4gICAgNjAwIDogIzc1ODE5MixcbiAgICA3MDAgOiAjNmE3Njg4LFxuICAgIDgwMCA6ICM2MDZjN2UsXG4gICAgOTAwIDogIzRkNTk2YyxcbiAgICBBMTAwIDogI2NmZTFmZixcbiAgICBBMjAwIDogIzljYzFmZixcbiAgICBBNDAwIDogIzY5YTFmZixcbiAgICBBNzAwIDogIzUwOTJmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/materials/material-create-update/material-create-update.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/containers/materials/material-create-update/material-create-update.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MaterialCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialCreateUpdateComponent", function() { return MaterialCreateUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_module_segments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/module/segments */ "./src/app/module/segments/index.ts");
/* harmony import */ var app_module_fabricators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/module/fabricators */ "./src/app/module/fabricators/index.ts");
/* harmony import */ var app_module_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/module/models */ "./src/app/module/models/index.ts");
/* harmony import */ var app_module_companies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/module/companies */ "./src/app/module/companies/index.ts");
/* harmony import */ var app_module_materials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/module/materials */ "./src/app/module/materials/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var MaterialCreateUpdateComponent = /** @class */ (function () {
    function MaterialCreateUpdateComponent(defaults, dialogRef, apiSegment, apiFabricator, apiModel, apiSector, apiMaterial, snackBar, fb) {
        var _this = this;
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.apiSegment = apiSegment;
        this.apiFabricator = apiFabricator;
        this.apiModel = apiModel;
        this.apiSector = apiSector;
        this.apiMaterial = apiMaterial;
        this.snackBar = snackBar;
        this.fb = fb;
        this.mode = 'create';
        this.isLinear = false;
        // load the segments
        this.apiSegment.getAllUsingGET().
            subscribe(function (seg) {
            _this.segments = seg;
        });
        // load the segments
        // O ID È FIXO PQ AINDA NÂO TEM LOGIN
        this.apiFabricator.getFabricatorWithModelUsingGET(1).
            subscribe(function (fab) {
            _this.fabricators = fab;
        });
        // load the segments
        this.apiSector.getAllUsingGET3().
            subscribe(function (sec) {
            _this.sectors = sec;
        });
        // instance the form group for mode Update and Create
        this.firstFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idCompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1),
        });
        this.secondFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            idSegment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idFabricator: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idSector: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.thirdFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            realQuantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            maximumQuantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            minimumQuantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.fourthFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sinergiCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            sinergiValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    MaterialCreateUpdateComponent.prototype.ngOnInit = function () {
        if (this.defaults) { // <-- do you have data from the main screen?
            this.mode = 'update';
            this.loadModels(this.defaults.fabricator.id);
            this.firstFormGroup = this.fb.group({
                id: [this.defaults.id || null],
                name: [this.defaults.name],
                address: [this.defaults.address],
                idCompany: [this.defaults.company.id],
            });
            this.secondFormGroup = this.fb.group({
                idSegment: [this.defaults.segment.id],
                idFabricator: [this.defaults.fabricator.id],
                idModel: [this.defaults.model.id],
                idSector: [this.defaults.sector.id],
            });
            this.thirdFormGroup = this.fb.group({
                realQuantity: [this.defaults.realQuantity],
                maximumQuantity: [this.defaults.maximumQuantity],
                minimumQuantity: [this.defaults.minimumQuantity],
            });
            this.fourthFormGroup = this.fb.group({
                sinergiCode: [this.defaults.sinergiCode],
                sinergiValue: [this.defaults.sinergiValue],
            });
        }
        else { // <-- don't have data :( = Mode Create
            this.defaults = {}; // takes blank :)
        }
    };
    MaterialCreateUpdateComponent.prototype.loadModels = function (idFabricator) {
        var _this = this;
        this.apiModel.getByFabricatorUsingGET(idFabricator).subscribe(function (models) {
            _this.models = models;
        });
    };
    MaterialCreateUpdateComponent.prototype.createOrUpdate = function () {
        if (this.mode === 'create') {
            this.createMaterial();
        }
        else if (this.mode === 'update') {
            this.updateMaterial();
        }
    };
    MaterialCreateUpdateComponent.prototype.save = function () {
        var _this = this;
        // troca ',' por '.'
        var sinergiValue = this.fourthFormGroup.get('sinergiValue').value;
        sinergiValue = sinergiValue.toString().replace(',', '.');
        this.fourthFormGroup.get('sinergiValue').setValue(sinergiValue);
        this.verifyName().then(function (_success) {
            if (_success && _success.length) {
                _this.firstFormGroup.get('name').setErrors({ 'invalid': true });
                _this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
                    duration: 10000
                });
            }
            else {
                _this.createOrUpdate();
            }
        }).catch(function (_error) {
            console.log(_error);
        });
    };
    MaterialCreateUpdateComponent.prototype.createMaterial = function () {
        var form1 = this.firstFormGroup.value;
        var form2 = this.secondFormGroup.value;
        var form3 = this.thirdFormGroup.value;
        var form4 = this.fourthFormGroup.value;
        var material = Object.assign(form1, form2, form3, form4);
        this.dialogRef.close(material);
    };
    MaterialCreateUpdateComponent.prototype.updateMaterial = function () {
        var form1 = this.firstFormGroup.value;
        var form2 = this.secondFormGroup.value;
        var form3 = this.thirdFormGroup.value;
        var form4 = this.fourthFormGroup.value;
        var material = Object.assign(form1, form2, form3, form4);
        material.id = this.defaults.id;
        this.dialogRef.close(material);
    };
    MaterialCreateUpdateComponent.prototype.isCreateMode = function () {
        return this.mode === 'create';
    };
    MaterialCreateUpdateComponent.prototype.isUpdateMode = function () {
        return this.mode === 'update';
    };
    MaterialCreateUpdateComponent.prototype.verifyName = function () {
        var name = this.firstFormGroup.get('name').value;
        // se estiver nulo, volta
        if (!name) {
            return Promise.reject();
        }
        // se for igual ao anterior, volta também
        if (name === this.defaults.name) {
            return Promise.resolve(true);
        }
        var data = {
            name: name,
            idCompany: this.firstFormGroup.get('idCompany').value,
            idModel: this.secondFormGroup.get('idModel').value,
            idSector: this.secondFormGroup.get('idSector').value,
            idSegment: this.secondFormGroup.get('idSegment').value,
        };
        var promise = this.apiMaterial.getByNameUsingPOST(data).
            toPromise();
        return promise;
    };
    MaterialCreateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-material-create-update',
            template: __webpack_require__(/*! ./material-create-update.component.html */ "./src/app/containers/materials/material-create-update/material-create-update.component.html"),
            styles: [__webpack_require__(/*! ./material-create-update.component.scss */ "./src/app/containers/materials/material-create-update/material-create-update.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            app_module_segments__WEBPACK_IMPORTED_MODULE_3__["SegmentControllerService"],
            app_module_fabricators__WEBPACK_IMPORTED_MODULE_4__["FabricatorControllerService"],
            app_module_models__WEBPACK_IMPORTED_MODULE_5__["ModelControllerService"],
            app_module_companies__WEBPACK_IMPORTED_MODULE_6__["SectorControllerService"],
            app_module_materials__WEBPACK_IMPORTED_MODULE_7__["MaterialControllerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MaterialCreateUpdateComponent);
    return MaterialCreateUpdateComponent;
}());



/***/ }),

/***/ "./src/app/containers/materials/material-create-update/material-create-update.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/containers/materials/material-create-update/material-create-update.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: MaterialCreateUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialCreateUpdateModule", function() { return MaterialCreateUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _material_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-create-update.component */ "./src/app/containers/materials/material-create-update/material-create-update.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/common/dialog-panel/dialog-panel.module */ "./src/app/core/common/dialog-panel/dialog-panel.module.ts");
/* harmony import */ var app_core_common_dialog_no_panel_dialog_no_panel_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/core/common/dialog-no-panel/dialog-no-panel.module */ "./src/app/core/common/dialog-no-panel/dialog-no-panel.module.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_module_materials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/module/materials */ "./src/app/module/materials/index.ts");
/* harmony import */ var app_module_segments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/module/segments */ "./src/app/module/segments/index.ts");
/* harmony import */ var app_module_fabricators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/module/fabricators */ "./src/app/module/fabricators/index.ts");
/* harmony import */ var app_module_models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/module/models */ "./src/app/module/models/index.ts");
/* harmony import */ var app_module_companies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/module/companies */ "./src/app/module/companies/index.ts");
/* harmony import */ var app_directives_directive_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/directives/directive.module */ "./src/app/directives/directive.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MaterialCreateUpdateModule = /** @class */ (function () {
    function MaterialCreateUpdateModule() {
    }
    MaterialCreateUpdateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__["DialogPanelModule"],
                app_core_common_dialog_no_panel_dialog_no_panel_module__WEBPACK_IMPORTED_MODULE_8__["DialogNoPanelModule"],
                app_directives_directive_module__WEBPACK_IMPORTED_MODULE_15__["DirectiveModule"],
            ],
            declarations: [_material_create_update_component__WEBPACK_IMPORTED_MODULE_5__["MaterialCreateUpdateComponent"]],
            entryComponents: [_material_create_update_component__WEBPACK_IMPORTED_MODULE_5__["MaterialCreateUpdateComponent"]],
            exports: [_material_create_update_component__WEBPACK_IMPORTED_MODULE_5__["MaterialCreateUpdateComponent"]],
            providers: [
                { provide: app_module_materials__WEBPACK_IMPORTED_MODULE_10__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].origin.materials },
                { provide: app_module_segments__WEBPACK_IMPORTED_MODULE_11__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].origin.segments },
                { provide: app_module_fabricators__WEBPACK_IMPORTED_MODULE_12__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].origin.fabricators },
                { provide: app_module_models__WEBPACK_IMPORTED_MODULE_13__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].origin.models },
                { provide: app_module_companies__WEBPACK_IMPORTED_MODULE_14__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].origin.companies },
                app_module_materials__WEBPACK_IMPORTED_MODULE_10__["MaterialControllerService"],
                app_module_segments__WEBPACK_IMPORTED_MODULE_11__["SegmentControllerService"],
                app_module_fabricators__WEBPACK_IMPORTED_MODULE_12__["FabricatorControllerService"],
                app_module_models__WEBPACK_IMPORTED_MODULE_13__["ModelControllerService"],
                app_module_companies__WEBPACK_IMPORTED_MODULE_14__["SectorControllerService"]
            ]
        })
    ], MaterialCreateUpdateModule);
    return MaterialCreateUpdateModule;
}());



/***/ }),

/***/ "./src/app/containers/materials/materials-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/containers/materials/materials-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: MaterialsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsRoutingModule", function() { return MaterialsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _materials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materials.component */ "./src/app/containers/materials/materials.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _materials_component__WEBPACK_IMPORTED_MODULE_2__["MaterialsComponent"]
    }
];
var MaterialsRoutingModule = /** @class */ (function () {
    function MaterialsRoutingModule() {
    }
    MaterialsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MaterialsRoutingModule);
    return MaterialsRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/materials/materials.component.html":
/*!***************************************************************!*\
  !*** ./src/app/containers/materials/materials.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background-material\">\n  <div id=\"conteiner\">\n    <div id=\"card\">\n      <div id=\"table-component\">\n        <!-- TABLE FILTER -->\n        <div id=\"tfilter\">\n          <div id=\"title\">\n            <span>Materiais</span>\n          </div>\n          <div id=\"input-filter\">\n            <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\"\n              fxLayout=\"row\"></fury-list>\n          </div>\n          <div id=\"add\">\n            <button mat-mini-fab color=\"primary\" matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\"\n              id=\"create\">\n              <mat-icon aria-label=\"Adicionar\">add</mat-icon>\n            </button>\n          </div>\n        </div>\n        <!-- TABLE HEADER -->\n        <!-- The header is separate so you do not lose the filters or the sorting and keep the layout-->\n        <div id=\"tmaster\">\n          <div id=\"thead\" matSort>\n            <div class=\"table-header\">\n              <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\"\n                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                {{column.name | uppercase}}\n              </div>\n            </div>\n          </div>\n          <!-- TABLE BODY -->\n          <div id=\"tbody\">\n            <!-- Note: Mat-table does not compile without mat-cell -->\n            <mat-table #table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>\n              <!-- fullName Column -->\n              <ng-container *ngFor=\"let column of columns\">\n                <ng-container *ngIf=\"column.isModelProperty\" [matColumnDef]=\"column.property\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> {{ column.name }}</mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">\n                    <!-- <span class=\"fury-mobile-label\">{{ column.name }}</span> -->\n                    {{ extractValue(row,column.cellContent,column.property) }}\n                  </mat-cell>\n                </ng-container>\n              </ng-container>\n\n              <ng-container matColumnDef=\"expandedDetail\">\n                <mat-cell *matCellDef=\"let row\" [attr.colspan]=\"visibleColumns.length\">\n                  <div class=\"image\">\n                    <div class=\"element-detail\">\n                      <div class=\"picture\">\n                        <!-- <img [src]=\"urlImg(row.picture)\" *ngIf=\"urlImg\"> -->\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"fields\">\n                    <div class=\"element-detail\">\n                      <label>Id:</label>\n                      <span>{{ row.id }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Nome do Material:</label>\n                      <span>{{ row.name }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Endereço:</label>\n                      <span>{{ row.address }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Segmento:</label>\n                      <span>{{ row.segment.name }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Fabricante:</label>\n                      <span>{{ row.fabricator.name }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Modelo:</label>\n                      <span>{{ row.model.name }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Setor:</label>\n                      <span>{{ row.sector.name }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Quantidade Real:</label>\n                      <span>{{ row.realQuantity }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Quantidade Máxima:</label>\n                      <span>{{ row.maximumQuantity }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Quantidade Mínima:</label>\n                      <span>{{ row.minimumQuantity }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Código do Sinergi:</label>\n                      <span>{{ row.sinergiCode }}</span>\n                    </div>\n                    <div class=\"element-detail\">\n                      <label>Valor no Sinergi:</label>\n                      <span>{{ row.sinergiValue| currency:'BRL':'symbol':'1.2-2' }}</span>\n                    </div>\n                  </div>\n                </mat-cell>\n              </ng-container>\n\n              <!-- actions Column -->\n              <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef fxLayoutAlign=\"center\"> AÇÕES </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">\n                  <button matTooltip=\"Editar Item\" [matTooltipPosition]=\"'above'\" (click)=\"update(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                    <mat-icon aria-label=\"Editar\">edit</mat-icon>\n                  </button>\n                  <button matTooltip=\"Deletar Item\" [matTooltipPosition]=\"'above'\" (click)=\"delete(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                    <mat-icon aria-label=\"Deletar\">delete</mat-icon>\n                  </button>\n                </mat-cell>\n              </ng-container>\n\n              <!-- <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: visibleColumns;\" class=\"clickable\"></mat-row> -->\n\n              <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: visibleColumns;\" matRipple class=\"element-row\" [class.expanded]=\"expandedElement == row\"\n                (click)=\"toggleRow(row)\">\n              </mat-row>\n              <mat-row *matRowDef=\"let row; columns: ['expandedDetail'];\" [@detailExpand]=\"row == expandedElement ? 'expanded' : 'collapsed'\"\n                style=\"overflow: hidden\">\n              </mat-row>\n\n            </mat-table>\n          </div>\n        </div>\n        <!-- TABLE FOOTER -->\n        <div id=\"tfooter\">\n          <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" color=\"primary\"></mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/containers/materials/materials.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/containers/materials/materials.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-material, #background-material #conteiner #card #table-component #tfilter, #background-material #conteiner #card #table-component #tfilter #input-filter, #background-material #conteiner #card #table-component #tfilter #add, #background-material #conteiner #card #table-component #tmaster #thead, #background-material #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .id, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .id {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id button, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id button {\n    margin: 5px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .name, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .name {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name button, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name button {\n    margin: 5px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .fabricator, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .fabricator {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-fabricator, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-fabricator {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-fabricator button, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-fabricator button {\n    margin: 5px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .model, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .model {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-model, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-model {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-model button, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-model button {\n    margin: 5px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .address, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .address {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-address, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-address {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-address button, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-address button {\n    margin: 5px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .realQuantity, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .realQuantity {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-realQuantity, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-realQuantity {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-realQuantity button, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-realQuantity button {\n    margin: 5px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\n#background-material {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-material #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-material #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-material #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-material #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n          color: #3f4ade;\n          z-index: 2; }\n\n#background-material #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 150%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 15%;\n            border-right: 1px #707070 solid; }\n\n#background-material #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-material #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 76.5%; }\n\n#background-material #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-material #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-material #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-material #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-material #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-material #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 8.5%; }\n\n#background-material #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-material #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-material #conteiner #card #table-component #tmaster #thead {\n            text-align: center;\n            min-height: 35px; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-material #conteiner #card #table-component #tmaster #thead .table-header {\n              width: 100%;\n              color: #3f4ade;\n              display: inline-flex;\n              font-weight: bold;\n              /* HEADER */ }\n\n#background-material #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* TABLE EXPANDED */\n              /* BODY */ }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                display: none; }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(63, 74, 222, 0.08); }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #3f4ade !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 100%; }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail {\n                box-shadow: inset 0px 18px 10px -18px rgba(0, 0, 0, 0.2); }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail {\n                  padding: 5px;\n                  text-align: left; }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail label {\n                    font-weight: 500;\n                    margin-right: 5px; }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail span {\n                    font-weight: 300; }\n\n#background-material #conteiner #card #table-component #tmaster #tbody mat-table .element-row {\n                position: relative; }\n\n#background-material #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-material #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #3f4ade;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  #title {\n    font-size: 100% !important; }\n  .fury-filter-input {\n    width: 140px; }\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title, #tfilter #input-filter, #tfilter #add {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #add {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-name {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-fabricator {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-model {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-address {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-realQuantity {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9tYXRlcmlhbHMvbWF0ZXJpYWxzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFyY3VzLmp1bmlvci9Eb2N1bWVudG9zL1RyYW5zaXJlL0dpdC9yY3Ivc3JjL3N0eWxlcy9fY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCQTtFQUNJLGNBQWE7RUFDYixlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFDdEI7O0FBT087RUFuQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUF5Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBZ0NuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBTXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWRUO0VBbkJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBeUJuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQWdDbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU1yQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFkVDtFQW5CSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQXlCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUFnQ25CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFNckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBZFQ7RUFuQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUF5Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBZ0NuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBTXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWRUO0VBbkJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBeUJuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQWdDbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU1yQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFkVDtFQW5CSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQXlCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUFnQ25CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFNckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBZFQ7RUFuQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUF5Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBZ0NuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBTXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQU1qQjs7RUFFSSxhQUFZO0VBQ1osWUFBVztFQUNYLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsdUJBQXNCO0VBRXRCLGdCQUFlLEVBbUtsQjs7QUF4S0Q7SUFPUSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLGtCQUFpQjtJQUNqQix5QkFBd0I7SUFDeEIscUJBQW9CO0lBQ3BCLHVCQUFzQjtJQUN0QixZQUFXO0lBQ1gsV0FBVSxFQXlKYjs7QUF2S0w7TUFnQlksZUFBYztNQUNkLGNBQWE7TUFDYixnQkFBZSxFQW9KbEI7O0FBdEtUO1FBcUJnQixlQUFjO1FBQ2QsY0FBYTtRQUNiLHVCQUFzQixFQThJekI7O0FBcktiO1VBMEJvQixjQUFhO1VBQ2IsaUJBQWdCO1VBQ2hCLDRDQUFtQztVQUNuQyxlQ3ZESDtVRHdERyxXQUFVLEVBMENiOztBQXhFakI7WUFnQ3dCLG1CQUFrQjtZQUNsQixnQkFBZTtZQUNmLGtCQUFpQjtZQUNqQixjQUFhO1lBQ2IsZUFBYztZQUNkLGVBQWM7WUFDZCxnQ0FBK0IsRUFJbEM7O0FBMUNyQjtjQXdDNEIsZUFBYyxFQUNqQjs7QUF6Q3pCO1lBNkN3QixpQkFBZ0IsRUFrQm5COztBQS9EckI7Y0ErQzRCLGVBQWMsRUFlakI7O0FBOUR6QjtnQkFpRGdDLGVBQWMsRUFZakI7O0FBN0Q3QjtrQkFtRG9DLGNBQWEsRUFDaEI7O0FBcERqQztrQkFzRG9DLGdDQUErQjtrQkFDL0IsNkJBQTRCLEVBSy9COztBQTVEakM7b0JBeUR3QywrQkFBOEI7b0JBQzlCLG1DQUFrQyxFQUNyQzs7QUEzRHJDO1lBaUV3QixjQUFhO1lBQ2IsZ0JBQWUsRUFLbEI7O0FBdkVyQjtjQXFFNEIsNENBQW1DLEVBQ3RDOztBQXRFekI7VUEwRW9CLGNBQWE7VUFDYixnQkFBZTtVQUNmLHVCQUFzQixFQThFekI7O0FBMUpqQjtZQStFd0IsbUJBQWtCO1lBQ2xCLGlCQUFnQixFQWFuQjs7QUE3RnJCO2NBa0Y0QixjQUFhO2NBQ2IsbUNBQWtDLEVBQ3JDOztBQXBGekI7Y0FzRjRCLFlBQVc7Y0FDWCxlQ2pIWDtjRGtIVyxxQkFBb0I7Y0FDcEIsa0JBQWlCO2NBQ2pCLFlBQVksRUFFZjs7QUE1RnpCO1lBK0Z3QixnQkFBZTtZQUNmLHdCQUF1QjtZQUN2QixtQkFBa0I7WUFDbEIsY0FBYTtZQUNiLDRDQUFtQztZQUNuQyxXQUFVO1lBQ1YsZUFBYztZQUNkLFVBQVMsRUFtRFo7O0FBekpyQjtjQXdHNEIsWUFBVztjQW9CWCxvQkFBb0I7Y0EwQnBCLFVBQVUsRUFFYjs7QUF4SnpCO2dCQTBHZ0MsY0FBYSxFQUNoQjs7QUEzRzdCO2dCQTZHZ0MsK0JBQThCLEVBQ2pDOztBQTlHN0I7Z0JBZ0hnQyxnQ0FBK0IsRUFDbEM7O0FBakg3QjtnQkFtSGdDLDBDQzdJZixFRDhJWTs7QUFwSDdCO2dCQXNIZ0MsMEJBQW1DO2dCQUNuQywrQkFBOEI7Z0JBQzlCLCtCQUE4QjtnQkFDOUIsZ0NBQStCO2dCQUMvQixnQkFBZSxFQUNsQjs7QUEzSDdCO2dCQWlJZ0MseURBQXFELEVBZ0J4RDs7QUFqSjdCO2tCQW9Jb0MsYUFBWTtrQkFDWixpQkFBZ0IsRUFXbkI7O0FBaEpqQztvQkF3SXdDLGlCQUFnQjtvQkFDaEIsa0JBQWlCLEVBRXBCOztBQTNJckM7b0JBOEl3QyxpQkFBZ0IsRUFDbkI7O0FBL0lyQztnQkFvSmdDLG1CQUFrQixFQUNyQjs7QUFySjdCO1VBNkpvQixtQkFBa0I7VUFDbEIsaUJBQWdCLEVBTW5COztBQXBLakI7WUFnS3dCLFlBQVc7WUFDWCxlQzNMUDtZRDRMTyxnQkFBZSxFQUNsQjs7QUFRckI7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSTtJQUNJLDJCQUF5QixFQUM1QixFQUFBOztBQUdMO0VBQ0k7SUFDSSwyQkFBMEIsRUFDN0I7RUFDRDtJQUNJLGFBQVksRUFDZjtFQUNEO0lBQ0kseUJBQXdCLEVBQzNCLEVBQUE7O0FBR0w7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0IsNEJBQTJCO0lBQzNCLHdCQUF1QixFQUMxQjtFQUNEO0lBS1EsK0JBQThCLEVBQ2pDO0VBRUw7SUFDSSx5QkFBd0IsRUFDM0I7RUFDRDtJQUNJLHVCQUFzQixFQUN6QjtFQUNHO0lBOVFKLDRCQWlSa0Q7SUFoUmxELDRCQWdSa0Q7SUEvUWxELHdCQStRa0QsRUFDekM7RUFKTDtJQTlRSiw0QkFpUmtEO0lBaFJsRCw0QkFnUmtEO0lBL1FsRCx3QkErUWtELEVBQ3pDO0VBSkw7SUE5UUosNEJBaVJrRDtJQWhSbEQsNEJBZ1JrRDtJQS9RbEQsd0JBK1FrRCxFQUN6QztFQUpMO0lBOVFKLDRCQWlSa0Q7SUFoUmxELDRCQWdSa0Q7SUEvUWxELHdCQStRa0QsRUFDekM7RUFKTDtJQTlRSiw0QkFpUmtEO0lBaFJsRCw0QkFnUmtEO0lBL1FsRCx3QkErUWtELEVBQ3pDO0VBSkw7SUE5UUosNEJBaVJrRDtJQWhSbEQsNEJBZ1JrRDtJQS9RbEQsd0JBK1FrRCxFQUN6QztFQUpMO0lBOVFKLDRCQWlSa0Q7SUFoUmxELDRCQWdSa0Q7SUEvUWxELHdCQStRa0QsRUFDekM7RUFKTDtJQVFJLGtCQUFpQixFQUNwQjtFQUVMO0lBQ0ksMEJBQXlCLEVBQzVCO0VBQ0Q7SUFDSSx5QkFBd0I7SUFDeEIsMEJBQXlCLEVBSTVCO0lBTkQ7TUFJUSx5QkFBd0IsRUFDM0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvbWF0ZXJpYWxzL21hdGVyaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCBcIl9jdXN0b21fY29sb3Jfc2NoZW1lLnNjc3NcIjtcbiR0aGVtZS1iYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXA6ICRtYXQtc2dtLXByaW1hcnksICRrZXk6IDUwMCk7XG5cbi8vIExpc3RhIGRlIGNhbXBvc1xuJGZpZWxkczogKCdpZCcsXG4nbmFtZScsXG4nZmFicmljYXRvcicsXG4nbW9kZWwnLFxuJ2FkZHJlc3MnLFxuJ3JlYWxRdWFudGl0eScsXG4nYWN0aW9ucydcbik7XG5cbi8vIFBhZHJvbml6YSBvIHRhbWFuaG8gZG9zIGNhbXBvc1xuJGxlbmd0aDogMTAwL2xlbmd0aCgkZmllbGRzKSoxJTtcblxuXG5AbWl4aW4gY29sdW1uLXdpZHRoKCRwcm9wZXJ0eSkge1xuICAgIG1heC13aWR0aDogJHByb3BlcnR5O1xuICAgIG1pbi13aWR0aDogJHByb3BlcnR5O1xuICAgIHdpZHRoOiAkcHJvcGVydHk7ICAgIFxufVxuXG4vLyBjZW50cmFsaXplcyBhbGwgY29udGFpbmVyIGl0ZW1zXG4lZmxleC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIENvbmZpZ3VyYcOnw7VlcyBuw6NvIHBhZHLDtWVzIHBhcmEgYXMgY29sdW5hc1xuJXRhYmxlLWNvbHVtbnMge1xuXG4gICAgQGVhY2ggJGhlYWRpbmcgaW4gJGZpZWxkcyB7XG5cbiAgICAgICAgLiN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGNvbHVtbi13aWR0aCgkbGVuZ3RoKTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4OyAvLyBzb3J0aW5nIGFycm93IGRpc2NvdW50XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNvbHVtbi0jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgoJGxlbmd0aCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIEBpZiAjeyRoZWFkaW5nfT09YWN0aW9ucyB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNiYWNrZ3JvdW5kLW1hdGVyaWFsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwJTsgLy9iYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAjY29udGVpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgIGhlaWdodDogOTElO1xuICAgICAgICB3aWR0aDogOTElO1xuICAgICAgICAjY2FyZCB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAjdGFibGUtY29tcG9uZW50IHtcbiAgICAgICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICMyNzNCNTY7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICN0ZmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAjdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1JTsgLy9iYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCAjNzA3MDcwIHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2lucHV0LWZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzYuNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdXJ5LWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mdXJ5LWxpc3QtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNhZGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOC41JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4yNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3RtYXN0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMiAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICN0aGVhZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhFQURFUiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI3Rib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEwIDEgYXV0bzsgLy8gYmFja2dyb3VuZDogYnJvd247XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4xNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXJvdzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWJhY2tncm91bmQsIC4wOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFRBQkxFIEVYUEFOREVEICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1jb2x1bW4tZXhwYW5kZWREZXRhaWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMThweCAxMHB4IC0xOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMThweCAxMHB4IC0xOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVsZW1lbnQtZGV0YWlsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudC1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJPRFkgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0YWJsZS1jb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICN0Zm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgLnBhZ2luYXRvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY2FwdGlvbiBmb3JtYXR0aW5nXG4uY2lyY2xlLXNtYWxsIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgLnBhZ2luYXRvcntcbiAgICAgICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgI3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mdXJ5LWZpbHRlci1pbnB1dHtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgIH1cbiAgICAubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgJXVuc2V0LXdpZHRoe1xuICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICN0ZmlsdGVyIHtcbiAgICAgICAgI3RpdGxlLCAjaW5wdXQtZmlsdGVyLCAjYWRke1xuICAgICAgICAgICAgQGV4dGVuZCAldW5zZXQtd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgI2FkZHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjdGhlYWQge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICN0Ym9keXtcbiAgICAgICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDsgLy8gZml4IGxheW91dCBpbiB0aGUgZmlyZWZveFxuICAgIH1cbiAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgQGVhY2ggJGhlYWRpbmcgaW4gJGZpZWxkcyB7XG4gICAgICAgICAgICAubWF0LWNvbHVtbi0jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgY29sdW1uLXdpZHRoKHVuc2V0ICFpbXBvcnRhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZnVyeS1saXN0LXRhYmxlIC5mdXJ5LWxpc3QtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAuZnVyeS1jb2x1bW4tZmlsdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiLy8gJG1hdC1zZ20tcHJpbWFyeTogKFxuLy8gICAgIDUwIDogI2U1ZTdlYixcbi8vICAgICAxMDAgOiAjYmVjNGNjLFxuLy8gICAgIDIwMCA6ICM5MzlkYWIsXG4vLyAgICAgMzAwIDogIzY4NzY4OSxcbi8vICAgICA0MDAgOiAjNDc1ODZmLFxuLy8gICAgIDUwMCA6ICMyNzNiNTYsXG4vLyAgICAgNjAwIDogIzIzMzU0Zixcbi8vICAgICA3MDAgOiAjMWQyZDQ1LFxuLy8gICAgIDgwMCA6ICMxNzI2M2MsXG4vLyAgICAgOTAwIDogIzBlMTkyYixcbi8vICAgICBBMTAwIDogIzY5OWJmZixcbi8vICAgICBBMjAwIDogIzM2NzlmZixcbi8vICAgICBBNDAwIDogIzAzNTdmZixcbi8vICAgICBBNzAwIDogIzAwNGVlOSxcbi8vICAgICBjb250cmFzdDogKFxuLy8gICAgICAgICA1MCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDMwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDQwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDUwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDYwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDcwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDgwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDkwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTQwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEE3MDAgOiAjZmZmZmZmLFxuLy8gICAgIClcbi8vICk7XG5cbiRtYXQtc2dtLXByaW1hcnk6IChcbiAgICA1MCA6ICNlOGU5ZmIsXG4gICAgMTAwIDogI2M1YzlmNSxcbiAgICAyMDAgOiAjOWZhNWVmLFxuICAgIDMwMCA6ICM3OTgwZTgsXG4gICAgNDAwIDogIzVjNjVlMyxcbiAgICA1MDAgOiAjM2Y0YWRlLFxuICAgIC8vNTAwIDogIzAwMDAwMCxcbiAgICA2MDAgOiAjMzk0M2RhLFxuICAgIDcwMCA6ICMzMTNhZDUsXG4gICAgODAwIDogIzI5MzJkMSxcbiAgICA5MDAgOiAjMWIyMmM4LFxuICAgIEExMDAgOiAjZmRmZGZmLFxuICAgIEEyMDAgOiAjY2FjY2ZmLFxuICAgIEE0MDAgOiAjOTc5YmZmLFxuICAgIEE3MDAgOiAjN2U4MmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogI2ZmZmZmZixcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuJG1hdC1zZ20tYWNjZW50OiAoXG4gICAgNTAgOiAjZTdlY2VhLFxuICAgIDEwMCA6ICNjMmNlY2IsXG4gICAgMjAwIDogIzk5YWVhOSxcbiAgICAzMDAgOiAjNzA4ZTg3LFxuICAgIDQwMCA6ICM1Mjc1NmQsXG4gICAgNTAwIDogIzMzNWQ1MyxcbiAgICA2MDAgOiAjMmU1NTRjLFxuICAgIDcwMCA6ICMyNzRiNDIsXG4gICAgODAwIDogIzIwNDEzOSxcbiAgICA5MDAgOiAjMTQzMDI5LFxuICAgIEExMDAgOiAjNzFmZmRhLFxuICAgIEEyMDAgOiAjM2VmZmNkLFxuICAgIEE0MDAgOiAjMGJmZmJmLFxuICAgIEE3MDAgOiAjMDBmMWIyLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogI2ZmZmZmZixcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuLy8gJG1hdC1zZ20td2FybjogKFxuLy8gICAgIDUwIDogI2Y1ZjdmOCxcbi8vICAgICAxMDAgOiAjZTZlYWVkLFxuLy8gICAgIDIwMCA6ICNkNmRkZTIsXG4vLyAgICAgMzAwIDogI2M2Y2ZkNixcbi8vICAgICA0MDAgOiAjYjljNGNkLFxuLy8gICAgIDUwMCA6ICNhZGJhYzQsXG4vLyAgICAgNjAwIDogI2E2YjNiZSxcbi8vICAgICA3MDAgOiAjOWNhYmI2LFxuLy8gICAgIDgwMCA6ICM5M2EzYWYsXG4vLyAgICAgOTAwIDogIzgzOTRhMixcbi8vICAgICBBMTAwIDogI2ZmZmZmZixcbi8vICAgICBBMjAwIDogI2ZkZmVmZixcbi8vICAgICBBNDAwIDogI2M5ZTdmZixcbi8vICAgICBBNzAwIDogI2IwZGJmZixcbi8vICAgICBjb250cmFzdDogKFxuLy8gICAgICAgICA1MCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDMwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDQwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDUwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDYwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDcwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDgwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDkwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuLy8gICAgIClcbi8vICk7XG5cbiRtYXQtc2dtLXdhcm46IChcbiAgICA1MCA6ICNmZWU4ZTcsXG4gICAgMTAwIDogI2ZiYzZjMyxcbiAgICAyMDAgOiAjZjlhMTliLFxuICAgIDMwMCA6ICNmNzdiNzIsXG4gICAgNDAwIDogI2Y1NWU1NCxcbiAgICA1MDAgOiAjZjM0MjM2LFxuICAgIDYwMCA6ICNmMTNjMzAsXG4gICAgNzAwIDogI2VmMzMyOSxcbiAgICA4MDAgOiAjZWQyYjIyLFxuICAgIDkwMCA6ICNlYTFkMTYsXG4gICAgQTEwMCA6ICNmZmZmZmYsXG4gICAgQTIwMCA6ICNmZmU4ZTcsXG4gICAgQTQwMCA6ICNmZmI2YjQsXG4gICAgQTcwMCA6ICNmZjlkOWIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWQtY2FsZW5kYXI6IChcbiAgICA1MCA6ICNlZmYxZjMsXG4gICAgMTAwIDogI2Q4ZGNlMSxcbiAgICAyMDAgOiAjYmVjNGNkLFxuICAgIDMwMCA6ICNhNGFjYjgsXG4gICAgNDAwIDogIzkxOWJhOSxcbiAgICA1MDAgOiAjN2Q4OTlhLFxuICAgIDYwMCA6ICM3NTgxOTIsXG4gICAgNzAwIDogIzZhNzY4OCxcbiAgICA4MDAgOiAjNjA2YzdlLFxuICAgIDkwMCA6ICM0ZDU5NmMsXG4gICAgQTEwMCA6ICNjZmUxZmYsXG4gICAgQTIwMCA6ICM5Y2MxZmYsXG4gICAgQTQwMCA6ICM2OWExZmYsXG4gICAgQTcwMCA6ICM1MDkyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuIl19 */"

/***/ }),

/***/ "./src/app/containers/materials/materials.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/containers/materials/materials.component.ts ***!
  \*************************************************************/
/*! exports provided: MaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsComponent", function() { return MaterialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/route.animation */ "./src/app/core/common/route.animation.ts");
/* harmony import */ var _material_create_update_material_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-create-update/material-create-update.component */ "./src/app/containers/materials/material-create-update/material-create-update.component.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.component */ "./src/app/core/common/dialog-delete/dialog-delete.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var app_module_materials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/module/materials */ "./src/app/module/materials/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MaterialsComponent = /** @class */ (function () {
    function MaterialsComponent(dialog, snackBar, apiMaterial) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.apiMaterial = apiMaterial;
        this.subject$ = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.pageSize = 10;
        // this component is useful for the filter and show colums in table
        this.columns = [
            { name: 'Id', property: 'id', visible: true, isModelProperty: true },
            { name: 'MATERIAIS', property: 'name', visible: true, isModelProperty: true },
            { name: 'Fabricante', property: 'fabricator', cellContent: "fabricator.name", visible: true, isModelProperty: true },
            { name: 'Modelo', property: 'model', cellContent: "model.name", visible: true, isModelProperty: true },
            { name: 'Endereço', property: 'address', visible: true, isModelProperty: true },
            { name: 'Quantidade', property: 'realQuantity', visible: true, isModelProperty: true },
            { name: 'Ações', property: 'actions', visible: true }
        ];
    }
    Object.defineProperty(MaterialsComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    MaterialsComponent.prototype.loadData = function () {
        var _this = this;
        this.apiMaterial.getAllUsingGET()
            .subscribe(function (materials) {
            _this.materials = materials;
            _this.dataSource.data = materials;
            _this.paginator.firstPage();
        }, function (error) {
            if (error.status === 0 || error.status === 404) {
                _this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
            }
        });
    };
    MaterialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        // loads the data from the main table
        this.loadData();
        // apply filters
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (materials) {
            _this.materials = materials;
            _this.dataSource.data = materials;
        });
    };
    MaterialsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    MaterialsComponent.prototype.create = function () {
        var _this = this;
        this.dialog.open(_material_create_update_material_create_update_component__WEBPACK_IMPORTED_MODULE_5__["MaterialCreateUpdateComponent"], {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (material) {
            if (material) {
                _this.apiMaterial.createUsingPOST(material).
                    subscribe(function (success) {
                    _this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
                        duration: 10000
                    });
                    // Reload the table after the post
                    _this.loadData();
                }, function (error) {
                    _this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.', 'OK', {
                        duration: 10000
                    });
                });
            }
        });
    };
    MaterialsComponent.prototype.update = function (material) {
        var _this = this;
        this.dialog.open(_material_create_update_material_create_update_component__WEBPACK_IMPORTED_MODULE_5__["MaterialCreateUpdateComponent"], {
            data: material,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (_material) {
            if (_material) {
                _this.apiMaterial.updateUsingPUT(_material).
                    subscribe(function (success) {
                    _this.snackBar.open('Item atualizado com sucesso!', 'OK', {
                        duration: 10000
                    });
                    // Reload the table after the post
                    _this.loadData();
                }, function (error) {
                    _this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.', 'OK', {
                        duration: 10000
                    });
                });
            }
        });
    };
    MaterialsComponent.prototype.delete = function (material) {
        var _this = this;
        this.dialog.open(_core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"], {
            data: { id: material.id, displayName: material.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe(function (_material) {
            if (_material && _material.id) {
                _this.apiMaterial.deleteUsingDELETE(_material.id).
                    subscribe(function (success) {
                    _this.snackBar.open('Item deletado com sucesso!', 'OK', {
                        duration: 10000
                    });
                    // Reload the table after the post
                    _this.loadData();
                }, function (error) {
                    _this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.', 'OK', {
                        duration: 10000
                    });
                });
            }
        });
    };
    MaterialsComponent.prototype.ngOnDestroy = function () {
    };
    MaterialsComponent.prototype.onFilterChange = function (filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    MaterialsComponent.prototype.extractValue = function (_row, _cell, _property) {
        if (typeof (_cell) === 'undefined') {
            return _row[_property];
        }
        // console.log(_row, _cell);
        var result = _row;
        var properties = _cell.split('.');
        properties.forEach(function (p) {
            result = result[p] ? result[p] : result;
        });
        return result;
    };
    /**
    * expand collapse a row
    * @param row
    */
    MaterialsComponent.prototype.toggleRow = function (row) {
        if (this.expandedElement === row) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = row;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialsComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MaterialsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MaterialsComponent.prototype, "sort", void 0);
    MaterialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-materials',
            template: __webpack_require__(/*! ./materials.component.html */ "./src/app/containers/materials/materials.component.html"),
            styles: [__webpack_require__(/*! ./materials.component.scss */ "./src/app/containers/materials/materials.component.scss")],
            animations: [_core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOutAnimation"],
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            app_module_materials__WEBPACK_IMPORTED_MODULE_8__["MaterialControllerService"]])
    ], MaterialsComponent);
    return MaterialsComponent;
}());



/***/ }),

/***/ "./src/app/containers/materials/materials.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/containers/materials/materials.module.ts ***!
  \**********************************************************/
/*! exports provided: MaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsModule", function() { return MaterialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/breadcrumbs/breadcrumbs.module */ "./src/app/core/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
/* harmony import */ var _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/page/page.module */ "./src/app/core/common/page/page.module.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.module */ "./src/app/core/common/dialog-delete/dialog-delete.module.ts");
/* harmony import */ var _materials_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./materials-routing.module */ "./src/app/containers/materials/materials-routing.module.ts");
/* harmony import */ var _materials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./materials.component */ "./src/app/containers/materials/materials.component.ts");
/* harmony import */ var _material_create_update_material_create_update_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material-create-update/material-create-update.module */ "./src/app/containers/materials/material-create-update/material-create-update.module.ts");
/* harmony import */ var app_module_materials__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/module/materials */ "./src/app/module/materials/index.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var MaterialsModule = /** @class */ (function () {
    function MaterialsModule() {
    }
    MaterialsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _materials_routing_module__WEBPACK_IMPORTED_MODULE_8__["MaterialsRoutingModule"],
                _material_create_update_material_create_update_module__WEBPACK_IMPORTED_MODULE_10__["MaterialCreateUpdateModule"],
                // Core
                _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
                _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
                _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"],
                _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__["DialogDeleteModule"]
            ],
            declarations: [_materials_component__WEBPACK_IMPORTED_MODULE_9__["MaterialsComponent"]],
            exports: [_materials_component__WEBPACK_IMPORTED_MODULE_9__["MaterialsComponent"]],
            providers: [
                { provide: app_module_materials__WEBPACK_IMPORTED_MODULE_11__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].origin.materials },
                app_module_materials__WEBPACK_IMPORTED_MODULE_11__["MaterialControllerService"]
            ]
        })
    ], MaterialsModule);
    return MaterialsModule;
}());



/***/ }),

/***/ "./src/app/core/common/dialog-no-panel/dialog-no-panel.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/core/common/dialog-no-panel/dialog-no-panel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\n  <div class=\"dialog-wrapper\">\n    <!-- <div class=\"dialog-panel\">\n      <div class=\"title\">\n        <span class=\"text\">SGM</span>\n      </div>\n      <div class=\"subtitle\">\n        <span class=\"text\">Sistema de Gerenciamento de Manutenção</span>\n      </div>\n    </div> -->\n    <div class=\"dialog-content-close\">\n      <button type=\"button\" class=\"mat-icon-button\" mat-dialog-close>\n        <span class=\"mat-button-wrapper\">\n          <mat-icon class=\"mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">close</mat-icon>\n        </span>\n      </button>\n    </div>\n    <div class=\"dialog-content\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"dialog-footer\">\n      <ng-content select=\"[footer-content]\"></ng-content>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/core/common/dialog-no-panel/dialog-no-panel.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/core/common/dialog-no-panel/dialog-no-panel.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n  margin: 0px; }\n\n.dialog-no-panel {\n  /* setting the default material styles */ }\n\n.dialog-no-panel .mat-dialog-container {\n    padding: unset; }\n\n.dialog-no-panel .dialog-container {\n    display: flex;\n    height: 100%; }\n\n.dialog-no-panel .dialog-container .dialog-wrapper {\n      display: grid;\n      flex: 1 1 auto;\n      grid-template-columns: repeat(10, 1fr); }\n\n.dialog-no-panel .dialog-container .dialog-wrapper .dialog-content-close {\n        grid-column-start: 10;\n        grid-column-end: 11;\n        grid-row-start: 1;\n        grid-row-end: 2;\n        z-index: 1;\n        align-items: flex-start;\n        justify-content: flex-end;\n        display: flex; }\n\n.dialog-no-panel .dialog-container .dialog-wrapper .dialog-content {\n        grid-column-start: 1;\n        grid-column-end: 11;\n        grid-row-start: 1;\n        grid-row-end: 10;\n        overflow: auto; }\n\n.dialog-no-panel .dialog-container .dialog-wrapper .dialog-footer {\n        grid-column-start: 1;\n        grid-column-end: 11;\n        grid-row-start: 10;\n        border-top: 1px solid #D3D3D3; }\n\n@media screen and (max-width: 400px) {\n  .dialog-wrapper .dialog-content {\n    grid-column-start: 1 !important; }\n  .dialog-wrapper .dialog-panel {\n    display: none !important; }\n  .dialog-wrapper .dialog-footer {\n    border-top: unset !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29yZS9jb21tb24vZGlhbG9nLW5vLXBhbmVsL2RpYWxvZy1uby1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxhQUFZO0VBQ1osWUFBVyxFQUNkOztBQUtEO0VBRUkseUNBQXlDLEVBcUY1Qzs7QUF2RkQ7SUFJUSxlQUFjLEVBQ2pCOztBQUxMO0lBUVEsY0FBYTtJQUNiLGFBQVksRUE2RWY7O0FBdEZMO01BWVksY0FBYTtNQUNiLGVBQWM7TUFDZCx1Q0FBNEMsRUF1RS9DOztBQXJGVDtRQTZEZ0Isc0JBQXFCO1FBQ3JCLG9CQWhFSjtRQWlFSSxrQkFBaUI7UUFDakIsZ0JBQWU7UUFDZixXQUFVO1FBQ1Ysd0JBQXVCO1FBQ3ZCLDBCQUF5QjtRQUN6QixjQUFhLEVBQ2hCOztBQXJFYjtRQXdFZ0IscUJBQW9CO1FBQ3BCLG9CQTNFSjtRQTRFSSxrQkFBaUI7UUFDakIsaUJBOUVQO1FBK0VPLGVBQWMsRUFDakI7O0FBN0ViO1FBZ0ZnQixxQkFBb0I7UUFDcEIsb0JBbkZKO1FBb0ZJLG1CQXJGUDtRQXNGTyw4QkFBNkIsRUFDaEM7O0FBS2I7RUFDSTtJQUVRLGdDQUErQixFQUNsQztFQUhMO0lBTVEseUJBQXdCLEVBQzNCO0VBUEw7SUFVUSw2QkFBNEIsRUFDL0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tbW9uL2RpYWxvZy1uby1wYW5lbC9kaWFsb2ctbm8tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4kcm93czogMTA7XG4kY29sdW1uczogMTA7XG5cbi5kaWFsb2ctbm8tcGFuZWwge1xuXG4gICAgLyogc2V0dGluZyB0aGUgZGVmYXVsdCBtYXRlcmlhbCBzdHlsZXMgKi9cbiAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiB1bnNldDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAuZGlhbG9nLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJGNvbHVtbnMsIDFmcik7XG4gICAgICAgICAgICAvLyBncmlkLWF1dG8tcm93czogMTAlO1xuXG4gICAgICAgICAgICAvLyAuZGlhbG9nLXBhbmVsIHtcbiAgICAgICAgICAgIC8vICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgIC8vICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgICAvLyAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAvLyAgICAgZ3JpZC1yb3ctZW5kOiAkcm93cysxO1xuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9iZy1kaWFsb2cucG5nKTtcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzNCNTY7XG4gICAgICAgICAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLy8gICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gICAgICAgICAgICAvLyAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZmxleDogMSAxIDUwJTsgLy9iYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICAgICAgLy8gICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIC8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAvLyAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vICAgICAgICAgbWluLWhlaWdodDogNjRweDtcblxuICAgICAgICAgICAgLy8gICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBmb250LXNpemU6IDM1MCU7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29sb3I6IHJnYmEoI0ZGRkZGRiwgMC44KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAgICAgLy8gICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZsZXg6IDEgMSA1MCU7IC8vYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgLy8gICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIC8vICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgLy8gICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29sb3I6IHJnYmEoI0ZGRkZGRiwgMC44KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLmRpYWxvZy1jb250ZW50LWNsb3NlIHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTA7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAkY29sdW1ucysxO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpYWxvZy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6ICRjb2x1bW5zKzE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAkcm93cztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpYWxvZy1mb290ZXIge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogJGNvbHVtbnMrMTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogJHJvd3M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEM0QzRDM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgLmRpYWxvZy13cmFwcGVyIHtcbiAgICAgICAgLmRpYWxvZy1jb250ZW50IHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZGlhbG9nLXBhbmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaWFsb2ctZm9vdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgIH1cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/common/dialog-no-panel/dialog-no-panel.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/common/dialog-no-panel/dialog-no-panel.component.ts ***!
  \**************************************************************************/
/*! exports provided: DialogNoPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogNoPanelComponent", function() { return DialogNoPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogNoPanelComponent = /** @class */ (function () {
    function DialogNoPanelComponent() {
    }
    DialogNoPanelComponent.prototype.ngAfterViewInit = function () {
    };
    DialogNoPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-dialog-no-panel',
            template: __webpack_require__(/*! ./dialog-no-panel.component.html */ "./src/app/core/common/dialog-no-panel/dialog-no-panel.component.html"),
            styles: [__webpack_require__(/*! ./dialog-no-panel.component.scss */ "./src/app/core/common/dialog-no-panel/dialog-no-panel.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], DialogNoPanelComponent);
    return DialogNoPanelComponent;
}());



/***/ }),

/***/ "./src/app/core/common/dialog-no-panel/dialog-no-panel.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/common/dialog-no-panel/dialog-no-panel.module.ts ***!
  \***********************************************************************/
/*! exports provided: DialogNoPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogNoPanelModule", function() { return DialogNoPanelModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _dialog_no_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-no-panel.component */ "./src/app/core/common/dialog-no-panel/dialog-no-panel.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DialogNoPanelModule = /** @class */ (function () {
    function DialogNoPanelModule() {
    }
    DialogNoPanelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _material_components_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
            ],
            declarations: [_dialog_no_panel_component__WEBPACK_IMPORTED_MODULE_4__["DialogNoPanelComponent"]],
            exports: [_dialog_no_panel_component__WEBPACK_IMPORTED_MODULE_4__["DialogNoPanelComponent"]]
        })
    ], DialogNoPanelModule);
    return DialogNoPanelModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-containers-materials-materials-module.js.map