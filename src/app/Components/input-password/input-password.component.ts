import { CommonModule, NgIf } from '@angular/common';
import { Component,Output,EventEmitter,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [CommonModule,FormsModule,NgIf ],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css'
})
export class InputPasswordComponent {
  password: string = '';  // Variable para almacenar el valor del input
  @Input() isDarkMode?:boolean;
  @Output() valorEnviadoPassword: EventEmitter<string> = new EventEmitter<string>();  // EventEmitter para emitir el valor

  // Emitir el valor del input cuando cambia
  enviarValorPassword(valor: string) {
    this.valorEnviadoPassword.emit(valor);  // Emitir el valor del input al componente padre
  }
}
