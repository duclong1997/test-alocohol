import { Component, OnInit } from '@angular/core';
import { PosterService } from 'src/app/service/post/poster.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentService } from 'src/app/service/comment/comment.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  private detailPoster = new Object();
  private idpost: number;
  private errorMessage: String ;
  private commentList =[];

  constructor(private postService :PosterService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get parameter in route
    this.route.paramMap.subscribe((param: ParamMap)=>{
    this.idpost = parseInt(param.get('id'));
    this.postService.getDetailPoster(this.idpost).subscribe(data => this.detailPoster = data,
      errror =>this.errorMessage = errror);
    this.postService.getLitCommentByPoster(this.idpost).subscribe(data => this.commentList = data,
      error => this.errorMessage =error);
    });

  }

}
