import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  createNewProject(title: string, category: string, description: string, difficulty: string, steps: string[]) {
    var newProject: Project = new Project(title, category, description, difficulty, steps);
    console.log(newProject);
  }


  
  constructor() { }

  ngOnInit() {
  }

}
