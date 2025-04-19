import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ContentComponent } from './components/header/content/content.component';

import { Component } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
@Component({ standalone: true, template: '' }) class DefaultComponent { }
@Component({ standalone: true, template: '<p>Fuel Type Page</p>' }) class FuelTypeComponent { }
@Component({ standalone: true, template: '<p>Reservation Page</p>' }) class ReservationComponent { }
@Component({ standalone: true, template: '<p>Reports Page</p>' }) class ReportsComponent { }

export const routes: Routes = [
    {
        path: '', component: ContentComponent, children: [
            { path: '', component: DefaultComponent },
            { path: 'cars', component: CarComponent },
            { path: 'fuel-type', component: FuelTypeComponent },
            { path: 'reservation', component: ReservationComponent },
            { path: 'reports', component: ReportsComponent },
            { path: 'home', component: HomeComponent },
            { path: 'admin', component: AdminComponent },
            { path: 'user', component: UserComponent },
            { path: 'login', component: LoginComponent },
            { path: 'forbidden', component: ForbiddenComponent },


        ]
    },
    { path: '**', redirectTo: '' }
];