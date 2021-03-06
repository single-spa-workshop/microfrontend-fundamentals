import { Component, ChangeDetectionStrategy } from "@angular/core";
import "./leaky-child.component.css";

@Component({
  selector: "leaky-child",
  templateUrl: "./leaky-child.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeakyChildComponent {}
