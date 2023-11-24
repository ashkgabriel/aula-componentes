import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';

const routes: Routes = [
  { path: "", redirectTo: "clientes", pathMatch: "full" },
  { path: "clientes", component: ClienteListComponent },
  { path: "clientes/novo", component: ClienteFormComponent },
  { path: "clientes/editar/:id", component: ClienteFormComponent },
  { path: "produtos", component: ProdutoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
