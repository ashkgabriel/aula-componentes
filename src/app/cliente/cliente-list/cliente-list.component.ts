import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit{
  title = "Relação de Clientes"
  'clientes': Cliente []

  constructor (private clienteservice: ClienteService, private cliente: Cliente ) {

  }

  ngOnInit() {
    // this.clientes = [
    //   {id: 1, nome: "Gabriel", endereco: "Rua do Gabriel", limiteCredito: 2000000},
    //   {id: 2, nome: "João", endereco: "Rua do João", limiteCredito: 1500000},
    //   {id: 3, nome: "Claudio", endereco: "Rua do Claudio", limiteCredito: 1300000},
    //   {id: 4, nome: "Joel", endereco: "Rua do Joel", limiteCredito: 1400000},
    //   {id: 5, nome: "Ali", endereco: "Rua do Ali", limiteCredito: 1200000}
    // ]
    this.getAll()
  }

  getAll() {
    this.clienteservice.getAll().subscribe(resp => {
      this.clientes = resp
    })
  }

  delete(cliente: Cliente) {
    if (window.confirm('Confirma a exclusão do registro? ')) {
      this.clienteservice.delete(cliente.id).subscribe(() => {
        this.clientes = this.clientes.filter(c => c !== cliente)
      })
    }
  }

}
