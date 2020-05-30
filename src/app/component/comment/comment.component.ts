import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/service/comment/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  private listComment =[];
  constructor(private commentService : CommentService) { }

  ngOnInit() {
    
  }

}
