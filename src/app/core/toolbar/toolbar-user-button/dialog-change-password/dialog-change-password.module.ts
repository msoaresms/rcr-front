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
  MatDividerModule
} from '@angular/material';
import { DialogChangePasswordComponent } from './dialog-change-password.component';
import {NgxMaskModule} from 'ngx-mask';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
import { from } from '../../../../../../node_modules/rxjs';

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
    DialogPanelModule
  ],
  declarations: [DialogChangePasswordComponent],
  entryComponents: [DialogChangePasswordComponent],
  exports: [DialogChangePasswordComponent]
})
export class DialogChangePasswordModule {}
