import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
  providers: [ProjectService]
})
export class AllProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }


  goToProjectPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.id]);
  };
  

}
