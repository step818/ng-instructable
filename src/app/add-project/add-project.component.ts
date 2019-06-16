import { Component, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  @Output() sendProject = new EventEmitter();

  

  constructor() { }

  ngOnInit() {
  }

}
