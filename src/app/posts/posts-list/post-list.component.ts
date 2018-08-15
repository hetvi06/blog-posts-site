import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import {Post} from './../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {


  // posts = [
  //   {
  //     title: '1st Post',
  //     content: 'First Post Content'
  //   },
  //   {
  //     title: '2nd Post',
  //     content: 'Second Post Content'
  //   },
  //   {
  //     title: '3rd Post',
  //     content: 'Third Post Content'
  //   }
  // ];
  posts:Post[] = [];
  private postsSubscription : Subscription;
  constructor(public postService: PostsService){
    //saying public postService: PostService is equivalent to setting the value of a local variable postService
    //to the incoming parameter postService
    // we save the step of this.postService=postService

  }

  ngOnInit() {
    this.posts=this.postService.getPosts();
     // subscribe is used to listen to the observable that is returned by getPostUpdatedListener()
     // subsrcibe can take 3 arguments..all 3 functions
     // here we shall only use 1st function argument which is executed when new data is emitted.
     this.postsSubscription=this.postService.getPostUpdatedListener().subscribe((posts:Post[])=>{
      this.posts=posts;
    });
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
    // we unsubscribe because incase this component is destroyed in future but the subscription is not then it will cause memory leak.
  }

}
