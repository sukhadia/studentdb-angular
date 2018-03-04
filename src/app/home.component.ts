import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `<br/>
  <div style="opacity: .9;">
    <a class="btn btn-primary btn-lg" role="button" href="/#students">Start Browsing<br/>On Desktop</a>
    <a class="btn btn-primary btn-lg" role="button" href="/mobile/#students">Start Browsing<br/>On Mobile</a>
  </div>`
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('In HomeComponent...');
  }

}
