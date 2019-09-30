import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routingmodule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from './core/customdirectives/datatable/datatable.module';
import { FilterPipe } from './core/customdirectives/filter/filterpipe'
import { FilterPipes } from './core/customdirectives/filter/filterpipes'

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './core/services/http.loader.factory';

import { AboutComponent } from './modules/about/about.component';
import { AppComponent } from './app.component';
import { ApplicationsComponent } from './modules/applications/applications.component';
import { ChangeLanguageComponent } from './modules/functionbar/functionbarmodules/changelanguage/changelanguage.component';
import { ClockComponent } from './modules/functionbar/functionbarmodules/clock/clock.component';
import { DownloadsComponent } from './modules/downloads/downloads.component';
import { FunctionbarComponent } from './modules/functionbar/functionbar.component';
import { LabelsComponent } from './modules/labels/labels.component';
import { LanguagesComponent } from './modules/languages/languages.component';
import { MenuComponent } from './modules/functionbar/functionbarmodules/menu/menu.component';
import { PageNotFoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { TranslationsComponent } from './modules/translations/translations.component';
import { UploadComponent } from './modules/upload/upload.component';

import { CurrentLanguage } from './core/services/currentlanguage';
import { DbService } from './core/services/db/db.service';
import { ApplicationDbService } from './core/services/db/application.db.services';
import { DataDbService } from './core/services/db/data.db.services';
import { LabelDbService } from './core/services/db/label.db.services';
import { LanguageDbService } from './core/services/db/language.db.services';
import { PollingDbService } from './core/services/db/polling.db.service';
import { TranslationDbService } from './core/services/db/translation.db.services';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ApplicationsComponent,
    ChangeLanguageComponent,
    ClockComponent,
    DownloadsComponent,
    FunctionbarComponent,
    LabelsComponent,
    LanguagesComponent,
    MenuComponent,
    PageNotFoundComponent,
    TranslationsComponent,
    UploadComponent,
    FilterPipe,
    FilterPipes,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    CurrentLanguage,
    DbService,
    HttpClient,
    ApplicationDbService,
    DataDbService,
    LabelDbService,
    LanguageDbService,
    PollingDbService,
    TranslationDbService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
