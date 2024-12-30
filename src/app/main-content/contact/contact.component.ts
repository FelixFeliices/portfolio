import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  form: { name: string; email: string; message: string } = {
    name: '',
    email: '',
    message: '',
  };

  #name: string = '';

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log('Form submitted:', this.form);
      ngForm.resetForm();
      this.form = {
        name: '',
        email: '',
        message: '',
      };
    }
  }
}
