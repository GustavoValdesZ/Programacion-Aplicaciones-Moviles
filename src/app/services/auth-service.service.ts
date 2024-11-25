import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  public dbInstance!: SQLiteObject;
  public dbReady: boolean = false;

  constructor(private sqlite: SQLite) {
    this.initializeDatabase();
  }

  // Inicializar la base de datos
  async initializeDatabase() {
    try {
      this.dbInstance = await this.sqlite.create({
        name: 'mydatabase.db',
        location: 'default',
      });
      await this.createTables();
      await this.insertInitialData();
      this.dbReady = true;
      console.log('Base de datos inicializada');
    } catch (error) {
      console.error('Error inicializando la base de datos:', error);
    }
  }

  // Crear las tablas necesarias
  async createTables() {
    try {
      // Tabla de usuarios: 'usuario' es la clave primaria
      const queryUsuarios = `
        CREATE TABLE IF NOT EXISTS usuarios (
          usuario TEXT PRIMARY KEY,
          nombre TEXT,
          apellido TEXT,
          contrasena TEXT,
          nivel_educacion TEXT,
          fecha_nacimiento TEXT
        )
      `;
      await this.dbInstance.executeSql(queryUsuarios, []);

      // Tabla de categorias
      const queryCategorias = `
        CREATE TABLE IF NOT EXISTS categorias (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL
        )
      `;
      await this.dbInstance.executeSql(queryCategorias, []);

      // Tabla de juegos
      const queryJuegos = `
        CREATE TABLE IF NOT EXISTS juegos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          categoria_id INTEGER,
          FOREIGN KEY (categoria_id) REFERENCES categorias (id) ON DELETE CASCADE
        )
      `;
      await this.dbInstance.executeSql(queryJuegos, []);
    } catch (error) {
      console.error('Error creando las tablas:', error);
    }
  }

  // Insertar datos iniciales en la base de datos
  async insertInitialData() {
    try {
      const categorias = ['Acción', 'Aventura', 'Deportes', 'Shooter', 'Terror'];
      const juegos = [
        { nombre: 'God of War', categoria_id: 1 },
        { nombre: 'Wukong', categoria_id: 1 },
        { nombre: 'Hogwarts Legacy', categoria_id: 2 },
        { nombre: 'Sackboy', categoria_id: 2 },
        { nombre: 'EA FC 25', categoria_id: 3 },
        { nombre: 'NBA 2K25', categoria_id: 3 },
        { nombre: 'COD Black Ops 6', categoria_id: 4 },
        { nombre: 'Halo Infinite', categoria_id: 4 },
        { nombre: 'Resident Evil Village', categoria_id: 5 },
        { nombre: 'Still Wakes the Deep', categoria_id: 5 },
      ];

      // Insertar categorías
      for (const categoria of categorias) {
        await this.dbInstance.executeSql(
          'INSERT OR IGNORE INTO categorias (nombre) VALUES (?)',
          [categoria]
        );
      }

      // Insertar juegos
      for (const juego of juegos) {
        await this.dbInstance.executeSql(
          'INSERT OR IGNORE INTO juegos (nombre, categoria_id) VALUES (?, ?)',
          [juego.nombre, juego.categoria_id]
        );
      }

      console.log('Datos iniciales insertados correctamente');
    } catch (error) {
      console.error('Error al insertar datos iniciales:', error);
    }
  }

  // Registrar un nuevo usuario
  async registerUser(
    nombre: string,
    apellido: string,
    usuario: string,
    contrasena: string,
    nivelEducacion: string,
    fechaNacimiento: string
  ): Promise<void> {
    if (!this.dbReady) throw new Error('Base de datos no está lista');

    try {
      // Insertar el nuevo usuario en la base de datos
      const query = `
        INSERT INTO usuarios (usuario, nombre, apellido, contrasena, nivel_educacion, fecha_nacimiento) 
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      await this.dbInstance.executeSql(query, [
        usuario,
        nombre,
        apellido,
        contrasena,
        nivelEducacion,
        fechaNacimiento,
      ]);
      console.log('Usuario registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
    }
  }

  // API Interna: Obtener detalles de un usuario
  async getUserDetails(usuario: string): Promise<any> {
    if (!this.dbReady) throw new Error('Base de datos no está lista');

    try {
      const query = 'SELECT * FROM usuarios WHERE usuario = ?';
      const result = await this.dbInstance.executeSql(query, [usuario]);
      if (result.rows.length > 0) {
        return result.rows.item(0);
      } else {
        throw new Error('Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al obtener detalles del usuario:', error);
      throw error;
    }
  }

  // API Interna: Obtener todas las categorías
  async getCategories(): Promise<any[]> {
    if (!this.dbReady) throw new Error('Base de datos no está lista');

    try {
      const query = 'SELECT * FROM categorias';
      const result = await this.dbInstance.executeSql(query, []);
      const categories = [];
      for (let i = 0; i < result.rows.length; i++) {
        categories.push(result.rows.item(i));
      }
      return categories;
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      throw error;
    }
  }

  // API Interna: Obtener juegos por categoría
  async getGamesByCategory(categoriaId: number): Promise<any[]> {
    if (!this.dbReady) throw new Error('Base de datos no está lista');

    try {
      const query = 'SELECT * FROM juegos WHERE categoria_id = ?';
      const result = await this.dbInstance.executeSql(query, [categoriaId]);
      const games = [];
      for (let i = 0; i < result.rows.length; i++) {
        games.push(result.rows.item(i));
      }
      return games;
    } catch (error) {
      console.error('Error al obtener juegos por categoría:', error);
      throw error;
    }
  }

  // Verificar las credenciales del usuario para login
  async loginUser(usuario: string, contrasena: string): Promise<boolean> {
    if (!this.dbReady) throw new Error('Base de datos no está lista');

    try {
      // Buscar el usuario en la base de datos
      const query = 'SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?';
      const result = await this.dbInstance.executeSql(query, [usuario, contrasena]);

      if (result.rows.length > 0) {
        console.log('Login exitoso');
        return true; // El usuario y la contraseña son correctos
      } else {
        console.log('Usuario o contraseña incorrectos');
        return false; // El usuario o la contraseña son incorrectos
      }
    } catch (error) {
      console.error('Error durante el login:', error);
      throw error;
    }
  }
}
