import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from '../help/help.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { DatasetDetailComponent } from '../dataset-detail/dataset-detail.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/catalog', pathMatch: 'full'},
  {path: 'help', component: HelpComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/datasets/:id', component: DatasetDetailComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
