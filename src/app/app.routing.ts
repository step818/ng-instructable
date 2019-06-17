import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'publish',
    component: AddProjectComponent
  },
  {
    path: 'projects/:id',
    component: ViewProjectComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);