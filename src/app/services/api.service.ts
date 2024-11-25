import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';  // URL de la PokeAPI

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    const url = `${this.apiUrl}?limit=10`;  // Cambiar para obtener un número limitado de Pokémon
    return this.http.get<any>(url);
  }

  // Obtener detalles de un Pokémon específico
  getPokemonDetails(pokemonUrl: string): Observable<any> {
    return this.http.get<any>(pokemonUrl);
  }
}
