import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  submitProject(title: string, category: string, step1: string, step2: string, step3: string, step4: string) {
    var newProject: Project = new Project(title, category, step1, step2, step3, step4, this.imageSrc);
    this.projectService.addProject(newProject);
  }

  private imageSrc: string = '';
  

  ngOnInit() {
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }

}
