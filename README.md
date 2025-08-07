## Description

## Project setup

```bash
# Si necesitas instalar todas las dependencias solo utilizaras...
npm install

# En caso de que existan errores particulares puedes utilizar...
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
npm install --save-dev typescript-eslint
npm install @nestjs/config @nestjs/typeorm typeorm mysql2
npm install @nestjs/platform-express

## Compile and run the project

$ npm run start:dev

# production mode
$ npm run start:prod

## Run tests
$ npm run test

## Archivo .env 
1. Crear un usuario con la misma información en la BD de MySQL
2. Crear el archivo .env con esta información para conectar la BD
        # 📦 Base de datos
        DB_HOST=localhost
        DB_PORT=3306
        DB_USERNAME=proyecto
        DB_PASSWORD=
        DB_NAME=investigacion
3. Ingresar npm run start:dev en consola 

#Excepciones
PD: si creas la tabla por primera vez con npm run start:dev,
debes colocar poner synchronize: false, en el archivo database.module.ts
de la carpeta entity
