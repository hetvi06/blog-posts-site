import { Component, EventEmitter, Output } from '@angular/core'; // EventEmitter needed to create events of our own
import {Post} from '../post.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create-component.html',
  styleUrls: ['./posts-create.component.css']
}) // this is a decorator which indicates that the below class isn't just a Typescript class but is a compoennt in angular
export class PostsCreateComponent {
  newPost = '';
  enteredContent='';
  enteredTitle='';

  @Output() postCreatedEvent=new EventEmitter<Post>(); //<Post> says that the data type of the emmitted event will be post. If we dont write
  // <Post> then it is generic type

  onClickButtonSavePost(postForm: NgForm) {
    if(postForm.invalid)
    {
      return;
    }
    const post:Post= {
      // title:this.enteredTitle,
      // content:this.enteredContent
      title:postForm.value.titleInput,
      content:postForm.value.contentInput
    };
    this.postCreatedEvent.emit(post);
  }
}
