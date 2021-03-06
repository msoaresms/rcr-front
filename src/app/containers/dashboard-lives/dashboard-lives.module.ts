import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { DashboardLivesRoutingModule } from './dashboard-lives-routing.module';
import { DashboardLivesComponent } from './dashboard-lives.component';
import { DashboardLiveCreateUpdateModule} from './dashboard-live-create-update/dashboard-live-create-update.module';
import { AgmCoreModule } from '@agm/core';
import { DashboardLiveMapButtonModule } from './dashboard-live-map-button/dashboard-live-map-button.module';
import { DashboardLiveMapButtonComponent } from './dashboard-live-map-button/dashboard-live-map-button.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DashboardLivesRoutingModule,
    DashboardLiveCreateUpdateModule,
    DashboardLiveMapButtonModule,
 

    //Calendar
    // CalendarModule.forRoot(),
    // SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule,
    AgmCoreModule,
    CalendarModule 
  ],
  declarations: [
    DashboardLivesComponent,
    DashboardLiveMapButtonComponent,
  ],
  exports: [DashboardLivesComponent]
})
export class DashboardLivesModule {}

