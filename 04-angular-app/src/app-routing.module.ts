import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AngularHomeComponent } from "./components/home/home.component";
import { AngularSubRouteComponent } from "./components/subroute/subroute.component";
import { EmptyRouteComponent } from "./components/empty-route/empty-route.component";

const routes: Routes = [
  { path: "angular", component: AngularHomeComponent },
  { path: "angular/subroute", component: AngularSubRouteComponent },
  { path: "**", component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
