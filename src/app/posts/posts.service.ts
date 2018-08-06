// service is just a typescript class that is exported
// it provides easy access of values and variables to and from different components in angular
// a service's instance is only created once for the entire app execution so that all the components access
// the same service elements since there's only one copy and not multiple copies.

import {Post} from './post.model';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable({providedIn:'root'})
export class PostService{
  private posts:Post[]=[];
  //getter
  getPost(){
    return [...this.posts];
    // JS objects and arrays are pass by reference so if i return just the array then the address is returned
    // not the values and thus we use the spread operator [...array_name]
    // this creates a copy of the original array
    // we also do this because we dont want outside elements to edit the posts variable in this class and thus working on a copy is safe.
  }

  //setter
  addPost(title:string, content:string){
    const post:Post={title:title, content:content};
    this.posts.push(post);
  }

  //now we have this service that can be used to transfer data between different components
  // this can be done using something called as 'dependency injection'

  // for angular to know that this is a service we can do it in 2 ways:
  // 1. add PostService to the provider array (provider array is for services) in app.component.ts and also import it
  // 2. add @injectablr to this class, import injectable as well as done above.
  // the providedIn:'root' makes sure that this service is available at root level.
}
