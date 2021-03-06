import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "angular-app",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
