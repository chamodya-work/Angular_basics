import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ContentComponent } from './components/header/content/content.component';

import { Component } from '@angular/core';
@Component({ standalone: true, template: '' }) class HomeComponent { }
@Component({ standalone: true, template: '<p>Fuel Type Page</p>' }) class FuelTypeComponent { }
@Component({ standalone: true, template: '<p>Reservation Page</p>' }) class ReservationComponent { }
@Component({ standalone: true, template: '<p>Reports Page</p>' }) class ReportsComponent { }

export const routes: Routes = [
    {
        path: '', component: ContentComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'cars', component: CarComponent },
            { path: 'fuel-type', component: FuelTypeComponent },
            { path: 'reservation', component: ReservationComponent },
            { path: 'reports', component: ReportsComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];