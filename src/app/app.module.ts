
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { MdbCalendarModule } from 'mdb-calendar';
import { MdbColorPickerModule } from 'mdb-color-picker';
import { MdbDraggableModule } from 'mdb-draggable';
import { MdbFileUploadModule } from 'mdb-file-upload';
import { MdbSortableModule } from 'mdb-sortable';
import { MdbTableEditorModule } from 'mdb-table-editor';
import { MdbWysiwygModule } from 'mdb-wysiwyg';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConvocatoriaunoComponent } from './convocatoriauno/convocatoriauno.component';
import { AppRoutingModule } from './app-routing.module';
import { ConvocatoridosComponent } from './convocatoridos/convocatoridos.component';
import { BraileComponent } from './braile/braile.component';
import { ScrollTopComponent } from './componentes/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ConvocatoriaunoComponent,
    ConvocatoridosComponent,
    BraileComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    MdbCalendarModule,
    MdbColorPickerModule,
    MdbDraggableModule,
    MdbFileUploadModule,
    MdbSortableModule,
    MdbTableEditorModule,
    MdbWysiwygModule,
    AppRoutingModule,
  ],
  providers: [MDBSpinningPreloader,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
