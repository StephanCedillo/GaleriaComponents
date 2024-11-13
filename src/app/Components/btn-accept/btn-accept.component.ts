import { NgClass } from '@angular/common';
import { Component ,Output,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-btn-accept',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn-accept.component.html',
  styleUrl: './btn-accept.component.css'
})
export class BtnAcceptComponent {
  @Output() action = new EventEmitter<string>(); // Evento para emitir acción
  @Input() isDarkMode?:boolean;
  onClick() {
    this.action.emit('aceptar'); // Emitir 'aceptar' cuando el botón es presionado
  }

}
