import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainOptionsComponent } from './components/main-options/main-options.component';
import { SgcIsoComponent } from './components/sgc-iso/sgc-iso.component';

const routes: Routes = [
    {
        path: '',
        component: MainOptionsComponent,
    },
    {
        path: 'sgcIso',
        component: SgcIsoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OptionsRoutingModule { }