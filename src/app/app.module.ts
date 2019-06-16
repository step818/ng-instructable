import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProjectComponent } from './search-project/search-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { LogInComponent } from './log-in/log-in.component';
import { EditProjectComponent } from './viewapp/edit-project/edit-project.component';
import { ViewCommentsComponent } from './viewapp/view-comments/view-comments.component';
import { LeaveCommentComponent } from './viewapp/leave-comment/leave-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchProjectComponent,
    AddProjectComponent,
    ViewProjectComponent,
    LogInComponent,
    EditProjectComponent,
    ViewCommentsComponent,
    LeaveCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
