import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
  providers: [ProjectService]
})
export class ViewProjectComponent implements OnInit {
  projectId: number;
  projectToDisplay: Project;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = parseInt(urlParameters['id']);
    });
    // this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

}
