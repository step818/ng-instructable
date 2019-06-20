import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { PROJECTS } from './mock-project';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  // getProjectById(projectId: number) {
  //   for (var i = 0; i <= PROJECTS.length - 1; i++) {
  //     if (PROJECTS[i].id === projectId) {
  //       return PROJECTS[i];
  //     }
  //   }
  // }
}
