import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
  providers: [ProjectService]
})
export class AllProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }


  // goToProjectPage(clickedProject: Project) {
  //   this.router.navigate(['projects', clickedProject.id]);
  // };
  

}
