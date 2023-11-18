# Practica 02 - Introducción al desarrollo web móvil

Esta es mi segunda práctica para la asignatura, en este archivo están los pasos a seguir para levantar el proyecto.

## Pasos a seguir:

- [Instalar MySQL (MySQL Server o XAMPP).](https://dev.mysql.com/downloads/mysql/) (Asumiendo que no hay una base de datos creada todavía)

- Crear un nuevo schema. (Asumiendo que no hay una base de datos creada todavía)

- [Instalar Composer.](https://getcomposer.org)

- [Instalar Node.js.](https://nodejs.org/en)

- Ejecutar  ``` copy .env.example .env ```

Dentro de este archivo configurar el puerto, nombre, usuario y contraseña de la bse de datos.

### Ejecutar los siguientes comandos para levantar el backend:

```
composer install
php artisan key:generate
php artisan migrate:fresh
php artisan db:seed
php artisan serve
```
Luego, para el frontend en otra terminal:
```
cd frontend
npm install
npm run start
```