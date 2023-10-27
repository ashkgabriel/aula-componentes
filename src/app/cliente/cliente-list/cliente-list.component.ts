import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit{
  title = "Relação de Clientes"
  'clientes': Cliente []

  constructor () {

  }

  ngOnInit() {
    this.clientes = [
      {id: 1, nome: "Gabriel", endereco: "Rua do Gabriel", limiteCredito: 2000000},
      {id: 2, nome: "João", endereco: "Rua do João", limiteCredito: 1500000},
      {id: 3, nome: "Claudio", endereco: "Rua do Claudio", limiteCredito: 1300000},
      {id: 4, nome: "Joel", endereco: "Rua do Joel", limiteCredito: 1400000},
      {id: 5, nome: "Ali", endereco: "Rua do Ali", limiteCredito: 1200000}
    ]
  }
}
