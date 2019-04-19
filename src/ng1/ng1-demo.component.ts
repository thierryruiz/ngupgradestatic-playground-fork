import {Directive, ElementRef, Injector, Input} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';


export const ng1DemoComponent = {
  selector: 'ng1Demo',
  template: `
    <div style="display:block;border:1px solid red;padding:20px">
      <p>ng1-demo.component - AngularJS</p>
      Hello, {{ $ctrl.username }}!
    </div>
  `,
  bindings: {
    username: '<',
  },
  controller: class Ng1DemoComponent {
    username: string;
  },
};

@Directive({selector: ng1DemoComponent.selector})
export class Ng1DemoComponentFacade extends UpgradeComponent {
  @Input() username: string;
  
  constructor(elementRef: ElementRef, injector: Injector) {
    console.log( ng1DemoComponent.selector ) ;
    super(ng1DemoComponent.selector, elementRef, injector);
  }
}
