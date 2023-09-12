import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent {
  @Input() options!: string[];

  selectedOption = '';

  dropdownOpen = false;

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown(): void {
    this.dropdownOpen = false;
  }

  selectOption(option: string): void {
    if (option !== this.selectedOption) {
      this.selectedOption = option;
    }

    this.closeDropdown();
  }
}
