
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatTableModule
} from '@angular/material';
import { ProfileCreateUpdateComponent } from './profile-create-update.component';
import {NgxMaskModule} from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
    MatSidenavModule,
    MatDividerModule,
    DialogPanelModule,
    MatCardModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatTableModule
  ],
  declarations: [ProfileCreateUpdateComponent],
  entryComponents: [ProfileCreateUpdateComponent],
  exports: [ProfileCreateUpdateComponent]
})
export class ProfileCreateUpdateModule {}

