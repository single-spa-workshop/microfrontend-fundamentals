import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Subscription } from "rxjs";
import { CustomProps } from "single-spa";
import { singleSpaPropsSubject } from "../index";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  authToken: string;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = singleSpaPropsSubject.subscribe(
      (props: CustomProps) => {
        this.authToken = props.authToken;
      }
    );
  }
}
