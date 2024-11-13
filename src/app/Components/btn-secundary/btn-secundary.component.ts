import { NgClass } from '@angular/common';
import { Component,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-btn-secundary',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn-secundary.component.html',
  styleUrl: './btn-secundary.component.css'
})
export class BtnSecundaryComponent {
  @Output() action = new EventEmitter<string>(); // Evento para emitir acción
  @Input() isDarkMode?:boolean;
  onClick() {
    this.action.emit('secundario'); // Emitir 'aceptar' cuando el botón es presionado
  }
}
