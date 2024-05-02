import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './service/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fakeApi';

  constructor(private connection:ConnectionService){}

  ngOnInit(): void {
    this.connection.getData().subscribe(data => {
      console.log(data)
    })
  }
}
