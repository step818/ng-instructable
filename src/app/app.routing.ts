import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddProjectComponent } from './add-project/add-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'publish',
    component: AddProjectComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);