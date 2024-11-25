import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  pokemons: any[] = [];  // Array para almacenar los Pokémon obtenidos

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadPokemons();  // Llamar a la función para cargar los Pokémon
  }

  // Función para cargar los Pokémon desde la API
  loadPokemons() {
    this.apiService.getPokemons().subscribe(
      (data) => {
        // Obtener detalles de cada Pokémon
        this.pokemons = data.results;
        this.pokemons.forEach((pokemon) => {
          this.apiService.getPokemonDetails(pokemon.url).subscribe(
            (details) => {
              pokemon.image = details.sprites.front_default; // Guardar la imagen del Pokémon
              console.log('Detalles del Pokémon:', pokemon);
            },
            (error) => {
              console.error('Error al obtener detalles del Pokémon:', error);
            }
          );
        });
        console.log('Pokémon obtenidos:', this.pokemons);
      },
      (error) => {
        console.error('Error al obtener Pokémon:', error);
      }
    );
  }
}
