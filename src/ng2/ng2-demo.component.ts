import {Component} from '@angular/core';


@Component({
  template: `
    <versionStamp></versionStamp>
    <p>ng2-demo.component - Angular</p>
    <ng1Demo [username]="username"></ng1Demo>
  `,
  styles : [
    `
      :host {
        display:block;
        padding:20px;
        border:1px solid blue;
      }
    `
  ]
})
export class Ng2DemoComponent {
  static selector = 'ng2Demo';
  username = 'ngUpgrade';
}
