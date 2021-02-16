import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ScopedChildComponent } from "./components/scoped-child/scoped-child.component";
// import { LeakyChildComponent } from "./components/leaky-child/leaky-child.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ScopedChildComponent,
    // LeakyChildComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
