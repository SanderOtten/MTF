import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './modules/about/about.component';
import { ApplicationsComponent } from './modules/applications/applications.component';
import { DownloadsComponent } from './modules/downloads/downloads.component';
import { LabelsComponent } from './modules/labels/labels.component';
import { LanguagesComponent } from './modules/languages/languages.component';
import { PageNotFoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { TranslationsComponent } from './modules/translations/translations.component';
import { UploadComponent } from './modules/upload/upload.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'labels', component: LabelsComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'translations', component: TranslationsComponent },
  { path: 'upload', component: UploadComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
