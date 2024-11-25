import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { MenuController, AlertController } from '@ionic/angular'; // Importamos los controladores

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  public dbInstance!: SQLiteObject; // Instancia de la base de datos

  constructor(private sqlite: SQLite, private menuController: MenuController, private alertController: AlertController) {
    this.initializeDatabase();
  }

  // Inicializa la base de datos
  async initializeDatabase() {
    try {
      this.dbInstance = await this.sqlite.create({
        name: 'mydatabase.db',
        location: 'default',
      });
      await this.createTables();
      await this.insertInitialData(); // Inserta datos iniciales al crear la base
    } catch (error) {
      this.showAlert('Error', 'Error inicializando la base de datos');
    }
  }

  // Crea las tablas necesarias para la base de datos
  async createTables() {
    try {
      const queryUsuarios = `
        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY,
          nombre TEXT,
          apellido TEXT,
          usuario TEXT UNIQUE,
          contrasena TEXT,
          nivel_educacion TEXT,
          fecha_nacimiento TEXT
        )
      `;
      await this.dbInstance.executeSql(queryUsuarios, []);

      const queryCategorias = `
        CREATE TABLE IF NOT EXISTS categorias (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL
        )
      `;
      await this.dbInstance.executeSql(queryCategorias, []);

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
      this.showAlert('Error', 'Error creando las tablas');
    }
  }

  // Inserta datos iniciales en las tablas de categorías y juegos
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

      // Inserta categorías
      for (const categoria of categorias) {
        await this.dbInstance.executeSql(
          'INSERT OR IGNORE INTO categorias (nombre) VALUES (?)',
          [categoria]
        );
      }

      // Inserta juegos
      for (const juego of juegos) {
        await this.dbInstance.executeSql(
          'INSERT OR IGNORE INTO juegos (nombre, categoria_id) VALUES (?, ?)',
          [juego.nombre, juego.categoria_id]
        );
      }

      this.showAlert('Éxito', 'Datos iniciales insertados correctamente');
    } catch (error) {
      this.showAlert('Error', 'Error al insertar datos iniciales');
    }
  }

  // Registra un nuevo usuario en la base de datos
  async registerUser(
    nombre: string,
    apellido: string,
    usuario: string,
    contrasena: string,
    nivelEducacion: string,
    fechaNacimiento: string
  ): Promise<void> {
    try {
      const query = `
        INSERT INTO usuarios (nombre, apellido, usuario, contrasena, nivel_educacion, fecha_nacimiento)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      await this.dbInstance.executeSql(query, [
        nombre,
        apellido,
        usuario,
        contrasena, 
        nivelEducacion,
        fechaNacimiento,
      ]);
      this.showAlert('Éxito', 'Usuario registrado correctamente');
    } catch (error) {
      this.showAlert('Error', 'Error al registrar usuario');
      throw error; // Relanzar el error para manejarlo externamente
    }
  }

  // Verifica las credenciales del usuario para login
  async loginUser(usuario: string, contrasena: string): Promise<boolean> {
    try {
      const query = `
        SELECT * FROM usuarios
        WHERE usuario = ? AND contrasena = ?
      `;
      const result = await this.dbInstance.executeSql(query, [usuario, contrasena]);

      if (result.rows.length > 0) {
        return true; // Usuario encontrado
      } else {
        this.showAlert('Error', 'Credenciales incorrectas');
        return false; // Usuario no encontrado
      }
    } catch (error) {
      this.showAlert('Error', 'Error en la consulta de login');
      throw error; // Relanzar el error para manejarlo externamente
    }
  }

  // Muestra una alerta con título y mensaje
  private async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  // Abre el menú
  openMenu() {
    this.menuController.open();
  }
}
