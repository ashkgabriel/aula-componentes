import { Component } from '@angular/core';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent {

  // Criando variável do tipo componente
  'produto': Produto;
  // Criando variável vazia
  title = '';

  constructor () {}

  ngOnInit() {
    this.title = "Novo produto"
    this.produto = new Produto()
  }

  onSubmit () {
    console.log(this.produto);
  }
}
