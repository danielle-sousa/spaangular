import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela: boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Camila', idade: 27, email: 'camila@gmail.com', curso: 'Ciência da Computação' },
    { nome: 'Maria', idade: 22, email: 'maria@gmail.com', curso: 'Análise e Desenvolvimento de Sistemas' },
    { nome: 'Helena', idade: 32, email: 'helena@gmail.com', curso: 'Engenharia da Computação' },
    { nome: 'Thais', idade: 25, email: 'thais@gmail.com', curso: 'Sistemas da Informação' },
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela() {
    this.exibeTabela = true;
  }

}
