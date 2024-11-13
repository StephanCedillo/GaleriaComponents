import { NgClass } from '@angular/common';
import { Component,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-btn-darkmode',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn-darkmode.component.html',
  styleUrl: './btn-darkmode.component.css'
})
export class BtnDarkmodeComponent {
  @Output() DarkMode = new EventEmitter<boolean>(); // Usamos un valor booleano para el modo oscuro
  // Variable para almacenar el estado actual del modo oscuro
  isDarkMode: boolean = false;

  // Método para alternar el modo oscuro
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;  // Alternamos el estado de 'isDarkMode'
    this.DarkMode.emit(this.isDarkMode); // Emitimos el valor 'true' o 'false'
    
  }
  
}
