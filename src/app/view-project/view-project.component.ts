import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent {
  @Input() childProjectList: Project[];
  @Output() clickSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
