import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.css']
})
export class CtaButtonComponent {
  @Input() altStyle = false;
}
