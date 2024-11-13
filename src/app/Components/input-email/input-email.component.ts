import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from './email-validator';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-input-email',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,NgIf],
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.css']
})
export class InputEmailComponent {
  
  @Input() isDarkMode?: boolean;
  @Output() valorEnviadoEmail: EventEmitter<string> = new EventEmitter<string>();  // EventEmitter para emitir el valor
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email, emailValidator()]]  // Validadores para required, email y el validador personalizado
    });
  }

  // Método getter para acceder fácilmente al control 'email'
  get emailControl() {
    return this.form.get('email'); // Accede al control 'email' del formulario reactivo
  }

  // Emitir el valor del input cuando cambia
  enviarValorEmail(valor: string) {
    this.valorEnviadoEmail.emit(valor);  // Emitir el valor del input al componente padre
  }
}
