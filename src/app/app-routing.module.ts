import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './register/registration-form/registration-form.component';

const routes: Routes = [
  { path: 'register', component: RegistrationFormComponent },
];

@NgModule({
 exports: [RouterModule],
 imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
