import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "scoped-child",
  templateUrl: "./scoped-child.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScopedChildComponent {}
