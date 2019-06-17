import { Component, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  @Output() sendProject = new EventEmitter();

  createNewProject(title: string, category: string, description: string, difficulty: string, numberOfSteps: number, steps: string[], id: number) {
    let newProject: Project = new Project(title, category, description, difficulty, numberOfSteps, steps, id);
    this.sendProject.emit(newProject);
  }


  
  constructor() { }

  ngOnInit() {
  }

}
