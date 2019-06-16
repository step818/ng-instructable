import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {
  @Input() childUser: User;
  @Output() clickedValidate = new EventEmitter();

  validateProfile() {
    this.clickedValidate.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
