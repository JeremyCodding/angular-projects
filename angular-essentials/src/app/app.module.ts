import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [HeaderComponent, UserComponent, TaskComponent, BrowserModule],
})
export class AppModule {}
