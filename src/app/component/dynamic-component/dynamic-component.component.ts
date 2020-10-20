import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  Type,
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
  cmpRef: ComponentRef<any>;

  secret = "";

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {}

  addDynamicCompOne() {
    // way 1:
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    // way 2:
    // this.containerRef.clear();
    // truyền component factory có chứa component(DynamicOneComponent) vào view child #dynamicComponent
    this.cmpRef = this.componentFactory(DynamicOneComponent);
  }

  clearComponent() {
    this.containerRef.clear();
  }

  addDynamicCompTwo() {
    // way 1:
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    // way 2:
    // this.containerRef.clear();
    this.cmpRef = this.componentFactory(DynamicTwoComponent);
    // truyeen data từ componenet cha sang component dynamic
    this.cmpRef.instance.data = "vào 2";
    // truyền data từ component con -> cha
    this.cmpRef.instance.sendData.subscribe((val) => {
      console.log(val);
      this.secret = val;
    });
  }

  componentFactory<T>(T: Type<T>): ComponentRef<T> {
    const componentFactory = this.cfr.resolveComponentFactory(T);
    return this.containerRef.createComponent(componentFactory);
  }
}
