import { Component } from '@angular/core';
import { Project } from './models/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'How-To You Do';

  masterProjectList: Project[] = [];
}
