import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Output() public valueChild = new EventEmitter();
  public hero = {
    name: "long",
    age: 12
  };
  constructor(private router: Router, private rout: ActivatedRoute) { }

  ngOnInit() {
  }

  sendData():void{
    this.valueChild.emit(this.hero);
  }

  // call child path
  goChild1(){
    // relative navigation (ap dung tren cung 1 router)
    this.router.navigate(['child1'], {relativeTo: this.rout});
  }

  // call child path
  goChild2(){
    this.router.navigate(['/detail/child2']);
  }
}
