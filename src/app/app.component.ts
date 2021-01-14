import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from './post.action';
import * as ApplicationActions  from '../store/actions/application.action';
import { Application } from 'src/store/reducers/application.reducer';
interface Post{
  text: string;
  likes: number;
}

interface AppState{
  post: Post;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LBCHR-App';

  text: string;
  post$: Observable<Post>

  applications$: Observable<Array<Application>>;
  constructor(private store:Store<AppState>){
    this.post$ = this.store.select('post');
  }


  ngOnInit(){
    this.store.dispatch(new ApplicationActions.LoadApplications())

    this.applications$  =  this.store.select('applications');
  }

  editText(){
    this.store.dispatch(new PostActions.EditText(this.text))
  }

  resetPost(){
    this.store.dispatch(new PostActions.Reset());
  }

  upvote(){
    this.store.dispatch(new PostActions.Upvote())
  }
  
  downvote(){
    this.store.dispatch(new PostActions.Downvote())
  }
}
