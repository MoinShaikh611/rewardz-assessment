import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}