import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input('valueReceive') public receive ;
  private key;
  constructor(private rout: ActivatedRoute) { }

  ngOnInit() {
    // get param in router
    this.rout.paramMap.subscribe((param: ParamMap)=>{
      let keyId = parseInt(param.get('key'));
      this.key = keyId | 1;
    });
  }
}
