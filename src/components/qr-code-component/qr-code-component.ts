import { Directive } from '@angular/core';

/**
 * Generated class for the QRCodeComponent directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[qr-code-component]' // Attribute selector
})
export class QRCodeComponent {

  constructor() {
    console.log('Hello QRCodeComponent Directive');
  }

}
