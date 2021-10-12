import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao-component',
  templateUrl: './selecao-component.component.html',
  styleUrls: ['./selecao-component.component.css'],
})
export class SelecaoComponentComponent {
  opcoes: string[] = [
   '300 ml','500 ml'
  ];

  opcoesComplementos: string[] = [
    'Leite condensado',
    'Banana',
    'Granola',
    'Morango',
    'Leite em pó',
    'Côco',
    'Castanha de caju'
  ];

  opcoesSelecionadasT: string[] = [];
  opcoesSelecionadasC: string[] = [];
  escolhaAteT: number = 1;
  escolhaAteC: number = 3;

  marcaOpcao(opcao: string) {
    if(this.escolhaAteT === 1) {
      this.opcoesSelecionadasT = [opcao]
    }
    console.log(this.opcoesSelecionadasT);
  }

  marcaOpcaoC(opcao: string) {
    const index = this.opcoesSelecionadasC.indexOf(opcao);
    if (index === -1) {
      this.opcoesSelecionadasC.push(opcao);
    }else {
      this.opcoesSelecionadasC.splice(index, 1);
    }
    console.log(this.opcoesSelecionadasC);
  }
}
