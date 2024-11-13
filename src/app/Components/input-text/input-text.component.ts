import { NgClass, NgIf } from '@angular/common';
import { Component,Output,EventEmitter,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [FormsModule,NgClass,NgIf

  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  @Input() isDarkMode?:boolean;
  text: string = '';  // Variable para almacenar el valor del input

  @Output() valorEnviadoText: EventEmitter<string> = new EventEmitter<string>();  // EventEmitter para emitir el valor

  // Emitir el valor del input cuando cambia
  enviarValorText(valor: string) {
    this.valorEnviadoText.emit(valor);  // Emitir el valor del input al componente padre
  }
  

}
