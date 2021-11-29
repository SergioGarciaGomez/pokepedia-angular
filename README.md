# Pokepedia Angular

Este proyecto ha sido generado por [Angular CLI](https://github.com/angular/angular-cli) versión 12.2.9.

## Como usar

1. Clone este repositorio
2. Vaya a la ruta del directorio `cd pokepedia-angular`
3. Ejecute `npm install -g @angular/cli` si no tiene angular instalado
4. Ejecute `npm start`
5. Ejecute `ng serve`

## Introducción

Pokepedia vAngular es una aplicación Web pensada solo para resolución horizontal o de pantallas de ordenador.

Pokepedia vAngular guarda información sobre los Pokémon que hay, las habilidades, tipos, debilidades, ataques y estadísticas base de cada pokémon

## Versiones

* 1.0 &#8594; Commit inicial con proyecto creado.
* 1.1 &#8594; Creada la Interfaz Pokémon con todos sus atributos. Creado un array de tipo Pokémon, insertando los datos en el .ts para listarlo con `*ngFor`.
* 1.2 &#8594; Sustituida la forma de recibir los datos del array. Se ha creado un `Pokemon.json` con los datos de los Pokémon del 1 al 10. Se ha introducido una `promesa` para recibir el array con una función con `async` y `await` y el `http` para leer el archivo `.json`.
## Para más ayuda

Use `ng help` en la terminal o revise la página [Angular CLI Overview and Command Reference](https://angular.io/cli).
