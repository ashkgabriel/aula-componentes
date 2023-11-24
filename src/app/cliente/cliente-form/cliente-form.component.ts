import { Component } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  // Criando variável do tipo componente
  'cliente': Cliente;
  // Criando variável vazia
  title = '';

  constructor (private route: ActivatedRoute, private router: Router, private clienteservice: ClienteService) {}

  ngOnInit() {
    this.title = "Novo Cliente"
    this.cliente = new Cliente()

    const id = this.route.snapshot.paramMap.get("id")

    if (id) {
      this.clienteservice.getbyid(parseInt(id)).subscribe(resp => {
        this.cliente = resp
        this.title = `Alterando o Cliente ${this.cliente.nome}`
      })
    }
  }

  onSubmit () {
    let observable: Observable<Cliente>

    if (this.cliente.id) {
      observable = this.clienteservice.update(this.cliente)
    } else {
      observable = this.clienteservice.insert(this.cliente)
    }

    observable.subscribe(() => {
      this.router.navigate(['/clientes'])
    })
  }
}
