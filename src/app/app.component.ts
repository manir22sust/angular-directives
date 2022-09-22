import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-directives';
  isActive: boolean = true;
  stepForm: string = 'something else';

  // objArray: Array<any> = [
  //   { id: 1, postTitle: 'Post 1' },
  //   { id: 2, postTitle: 'Post 2' },
  //   { id: 3, postTitle: 'Post 3' },
  //   { id: 4, postTitle: 'Post 4' },
  //   { id: 5, postTitle: 'Post 5' },
  //   { id: 6, postTitle: 'Post 6' },
  //   { id: 7, postTitle: 'Post 7' },
  // ];

  objArray: Array<any> = [];
  postArray: Array<string> = [
    'Post 1',
    'Post 2',
    'Post 3',
    'Post 4',
    'Post 5',
    'Post 6',
    'Post 7',
  ];

  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }

  addNew() {
    this.objArray.push({ id: 8, postTitle: 'Post 8' });
  }

  onDelete(index: any) {
    //let index = this.objArray.indexOf(post);
    this.objArray.splice(index, 1);
  }
  onClick(status: string) {
    this.stepForm = status;
    console.log(this.stepForm);
  }
}
