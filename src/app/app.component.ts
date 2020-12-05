import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is the picture of a snowy mountain'
    },
    {
      title: 'Mountain biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking2222',
      content: 'I did some biking today',
    },
  ];
}
