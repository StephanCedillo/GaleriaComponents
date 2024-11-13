import { NgClass } from '@angular/common';
import { Component,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-btn-decline',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn-decline.component.html',
  styleUrl: './btn-decline.component.css'
})
export class BtnDeclineComponent {
  @Output() action = new EventEmitter<string>(); // Evento para emitir acción
  @Input() isDarkMode?:boolean;
  onClick() {
    this.action.emit('cancelar'); // Emitir 'aceptar' cuando el botón es presionado
  }

}
