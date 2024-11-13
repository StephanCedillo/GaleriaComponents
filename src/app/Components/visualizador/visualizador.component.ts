import { NgClass } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [NgClass],
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent{
  @Input() password?: string ;
  @Input() email?: string;
  @Input() text?: string;
  animationClass?: string;
  @Input() accion?: string;  // Recibe la acción desde el componente principal
  @Input() isDarkMode?:boolean;
  // Método para determinar el color del cuadrado según la acción recibida
  getColor() {
    switch (this.accion) {
      case 'aceptar':
        return 'green';
      case 'cancelar':
        return 'red';
      case 'primario':
        return 'blue';
      case 'secundario':
        return 'yellow';
      case 'modoOscuro':
        return 'black';
      default:
        return 'gray';
    }
  }

  triggerAnimation() {
    this.animationClass = 'animate';
    setTimeout(() => this.animationClass = '', 1000); // Resetea la animación después de 1 segundo
  }
}
