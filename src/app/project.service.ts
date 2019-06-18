import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { PROJECTS } from './mock-project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects() {
    return PROJECTS;
  }

  getProjectById(projectId: number) {
    for (var i = 0; i <= PROJECTS.length - 1; i++) {
      if (PROJECTS[i].id === projectId) {
        return PROJECTS[i];
      }
    }
  }
}
