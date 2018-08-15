import { Component } from '@angular/core'; // EventEmitter needed to create events of our own
// import {Post} from '../post.model';
import {NgForm} from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create-component.html',
  styleUrls: ['./posts-create.component.css']
}) // this is a decorator which indicates that the below class isn't just a Typescript class but is a compoennt in angular
export class PostsCreateComponent {
  newPost = '';
  enteredContent='';
  enteredTitle='';

  //if using service, we dont need emitter anymore so commentted below and also remove imports EventEmitter and Output
  // @Output() postCreatedEvent=new EventEmitter<Post>(); //<Post> says that the data type of the emmitted event will be post. If we dont write
  // <Post> then it is generic type

  constructor(public postsService:PostsService){

  }

  onClickButtonSavePost(postForm: NgForm) {
    if(postForm.invalid)
    {
      return;
    }
    // const post:Post= {
    //   // title:this.enteredTitle,
    //   // content:this.enteredContent
    //   title:postForm.value.titleInput,
    //   content:postForm.value.contentInput
    // };

    // this.postCreatedEvent.emit(post); //not using emitter anymore
    // now using service
    this.postsService.addPosts(postForm.value.titleInput, postForm.value.contentInput)
  }
}
