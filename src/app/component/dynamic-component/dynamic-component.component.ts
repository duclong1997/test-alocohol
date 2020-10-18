import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { DynamicOneComponent } from "../dynamic-one/dynamic-one.component";
import { DynamicTwoComponent } from "../dynamic-two/dynamic-two.component";

@Component({
  selector: "app-dynamic-component",
  templateUrl: "./dynamic-component.component.html",
  styleUrls: ["./dynamic-component.component.css"],
})
export class DynamicComponentComponent implements OnInit {
  @ViewChild("dynamicComponent", { read: ViewContainerRef, static: true })
  containerRef: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {}

  addDynamicCompOne() {
    const componentFactory = this.cfr.resolveComponentFactory(
      DynamicOneComponent
    );
    const componentref = this.containerRef.createComponent(componentFactory);
  }

  addDynamicCompTwo() {
    const componentFactory = this.cfr.resolveComponentFactory(
      DynamicTwoComponent
    );
    const componentref = this.containerRef.createComponent(componentFactory);
  }
}
