import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.css'
})
export class BtnPrimaryComponent {
  @Output() action = new EventEmitter<string>(); // Evento para emitir acción
  @Input() isDarkMode?:boolean;
  onClick() {
    this.action.emit('primario'); // Emitir 'aceptar' cuando el botón es presionado
  }

}
