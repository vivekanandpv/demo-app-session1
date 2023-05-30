import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { IfCloneDirective } from './if-clone.directive';

@NgModule({
  declarations: [AppComponent, DemoComponent, IfCloneDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
