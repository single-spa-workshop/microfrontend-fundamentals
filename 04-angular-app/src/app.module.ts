import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmptyRouteComponent } from "./components/empty-route/empty-route.component";
import { AngularHomeComponent } from "./components/home/home.component";
import { AngularSubRouteComponent } from "./components/subroute/subroute.component";

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    AngularHomeComponent,
    AngularSubRouteComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
