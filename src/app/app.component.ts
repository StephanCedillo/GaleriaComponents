import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VisualizadorComponent } from './Components/visualizador/visualizador.component';
import { InputEmailComponent } from './Components/input-email/input-email.component';
import { InputPasswordComponent } from './Components/input-password/input-password.component';
import { InputTextComponent } from './Components/input-text/input-text.component';
import { BtnAcceptComponent } from './Components/btn-accept/btn-accept.component';
import { BtnDarkmodeComponent } from './Components/btn-darkmode/btn-darkmode.component';
import { BtnDeclineComponent } from './Components/btn-decline/btn-decline.component';
import { BtnPrimaryComponent } from './Components/btn-primary/btn-primary.component';
import { BtnSecundaryComponent } from './Components/btn-secundary/btn-secundary.component';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BtnAcceptComponent,
    BtnDarkmodeComponent,
    BtnDeclineComponent,
    BtnPrimaryComponent,
    BtnSecundaryComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputTextComponent,
    VisualizadorComponent,
    FormsModule,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  // Estas son las propiedades que se enlazarán con los campos de entrada
  email: string = '';
  password: string = '';
  text: string = '';
  accion: string = '';  // Asigna un valor válido a `accion`

  // Puedes cambiar el valor de `accion` al hacer clic en un botón, por ejemplo
  onButtonClicked(action: string) {
    this.accion = action;  // Actualiza la acción según el botón presionado
  }
  
  recibirValorText(valor: string) {
    this.text = valor;  // Asigna el valor recibido a la propiedad
    console.log('Texto:', valor);  // Imprime el valor en consola
  }
  recibirValorEmail(valor: string) {
    this.email = valor;  // Asigna el valor recibido a la propiedad
    console.log('email:', valor);  // Imprime el valor en consola
  }
  recibirValorPassword(valor: string) {
    this.password= valor;  // Asigna el valor recibido a la propiedad
    console.log('password:', valor);  // Imprime el valor en consola
  }


  isDarkMode: boolean = false; // Estado del modo oscuro

  // Método que se ejecuta cuando se emite el evento desde el componente hijo
  onDarkModeToggle(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode; // Actualizamos el estado
    this.toggleDarkMode(); // Llamamos a la función para cambiar el estilo global
  }

  // Método para cambiar los estilos globales
  toggleDarkMode() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode'); // Activamos el modo oscuro
    } else {
      document.body.classList.remove('dark-mode'); // Desactivamos el modo oscuro
    }
  }
}
