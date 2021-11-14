import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public tarefa = " ";
  public items = [];

  addTarefa() {
    this.items.push(this.tarefa);

    this.limparCampo();
  }

  removeTarefa(item) {
    this.items.splice(this.items.indexOf(item), 1) // encontra a posição do array da determinada palavra que ele precisa encontrar
  }

  limparCampo() {
    this.tarefa = " ";
  }

}
