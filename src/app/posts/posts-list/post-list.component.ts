import { Component, Input } from '@angular/core';
import {Post} from './../post.model';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
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
  @Input() posts:Post[] = [];
}
