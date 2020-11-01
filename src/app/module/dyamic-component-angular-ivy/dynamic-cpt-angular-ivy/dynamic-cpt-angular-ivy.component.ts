import { DynamicCptTwoComponent } from "./../dynamic-cpt-two/dynamic-cpt-two.component";
import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

@Component({
  selector: "app-dynamic-cpt-angular-ivy",
  templateUrl: "./dynamic-cpt-angular-ivy.component.html",
  styleUrls: ["./dynamic-cpt-angular-ivy.component.css"],
})
export class DynamicCptAngularIvyComponent implements OnInit {
  @ViewChild("dynamicComponent", { read: ViewContainerRef, static: true })
  containerRef: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {}

  async addDynamicCompOne() {
    const { DynamicCptOneComponent } = await import(
      "../dynamic-cpt-one/dynamic-cpt-one.component"
    );
    const componentFactory = this.cfr.resolveComponentFactory(
      DynamicCptOneComponent
    );

    const componentRef = this.containerRef.createComponent(componentFactory);
    componentRef.instance.data = "helo angular ivy";
  }

  async addDynamicCompTwo() {
    const { DynamicCptTwoComponent } = await import(
      "../dynamic-cpt-two/dynamic-cpt-two.component"
    );
    const componentFactory = this.cfr.resolveComponentFactory(
      DynamicCptTwoComponent
    );
    const componentRef = this.containerRef.createComponent(componentFactory);
  }

  clearComponent() {
    this.containerRef.clear();
  }
}
