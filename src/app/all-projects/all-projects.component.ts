import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent  {

  constructor(private router: Router) {}

  projects: Project[] = [
    new Project("Hand-sewn wallet", "living", "basic waller made of fabric", "simple", 5, ["gather supplies", "cut fabric", "thread needle", "stitch fabric together", "cut string"], 1),
    new Project("grow your own tomatoes", "outdoor", "never have to buy tomatoes again!", "simple", 3, ["put a few seeds in the ground", "put pot by window with sunlight", "water every other day"], 2)
  ];


  goToProjectPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.id]);
  };

  

  ngOnInit() {
  }

}
