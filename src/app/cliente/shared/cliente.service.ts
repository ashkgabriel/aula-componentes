import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL = 'http://localhost:9090/cliente'

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Cliente[]>(this.URL);
  }

  public insert (cliente: Cliente) {
    return this.http.post<Cliente>(this.URL, Cliente)
  }

  getbyid(id: number) {
    const newUrl = `${this.URL}/${id}`
    return this.http.get<Cliente>(newUrl)
  }

  public update (cliente: Cliente) {
    const newUrl = `${this.URL}/${cliente.id}`
    return this.http.put<Cliente>(newUrl, cliente)
  }

  public delete (id: number) {
    const newUrl = `${this.URL}/${id}`
    return this.http.delete<Cliente>(newUrl)
  }
}
