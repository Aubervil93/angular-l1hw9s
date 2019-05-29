import { Component, Input } from '@angular/core';
import {Contact} from './contact';

@Component({
  selector: 'hello',
 //templateUrl: './hello.component.html',
 template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
contact: Contact;

}
