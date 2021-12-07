# Pokepedia Angular

Este proyecto ha sido generado por [Angular CLI](https://github.com/angular/angular-cli) versión 12.2.9.

## Como usar

1. Clone este repositorio
2. Vaya a la ruta del directorio `cd pokepedia-angular`
3. Ejecute `npm install -g @angular/cli` si no tiene angular instalado
4. Ejecute `npm start`
5. Ejecute `ng serve --open`

## Introducción

Pokepedia vAngular es una aplicación Web pensada solo para resolución horizontal o de pantallas de ordenador.

Pokepedia vAngular guarda información sobre los Pokémon que hay, las habilidades, tipos, debilidades, ataques y estadísticas base de cada pokémon

## Versiones

* v1.0 &#8594; Commit inicial con proyecto creado.
* v1.1 
    * Creada la Interfaz Pokémon con todos sus atributos. 
    * Creado un array de tipo Pokémon, insertando los datos en el .ts para listarlo con `*ngFor`.
* v1.2 
    * Se ha creado un `Pokemon.json` con los datos de los Pokémon del 1 al 10 para introducirlos en la web.
    * Sustituida la forma de recibir los datos del array. Se ha introducido una `promesa` para recibir el array con una función con `async` y `await` y el `http` para leer el archivo `.json`.
* v1.3 
    * 60 nuevos pokémons introducidos. 
    * Añadida barra de navegación Sticky.
    * Creado un `Ability.json` con las actuales 267 habilidades que existen en el juego, para guardarlas en un array.
* v1.4 
    * Creado el componente `pokemon-info`, que tiene una ruta de `pokedex/+id`, recibiendo el ID del Pokémon al hacerle click, muestra la información del mismo más detalladamente.
* v1.5 
    * Agregadas diferentes clases para, en función del tipo del Pokémon, pintar de un color u otro su cajita con el nombre de su tipo. 
    * Hecha la función `getPokemon()`, que devuelve un Pokémon concreto buscándolo por su `ID`. 
    * Mejoras varias en el `HTML` y `CSS`.
* v1.6 
    * Añadido un `Chart.js` en el nuevo componente `chart-stats` dentro del componente `pokemon-info`, que muestra una gráfica con los atributos de combate del pokémon. 
    * Creados dos botones dentro de `pokemon-info`, que llevan al pokémon anterior a este, y el otro botón al siguiente.
* v2.0 
    * Añadidos en el componente `pokedex` filtros para filtrar los pokémons por ID y nombre, tanto ascendente como descendente. 
    * Añadido un botón que te manda a un Pokémon aleatorio de los existentes.
    * Función `formatId()` que formatea un ID con X 0's a la izquierda, en función de si es menor a 100, añade o 1 o 2 ceros a la izquierda, para que el formato final sea #001, por ejemplo.
    * Función `getNextPokemon()` y `getPreviousPokemon()` añadidas, que devuelven el próximo y el anterior pokémon, en función del ID, y en relación al Pokémon en el que estamos viendo la información.
    * Función `getLastPokemon()` y `getFirstPokemon()` añadidas, que buscan el ID más grande y más pequeño respectivamente dentro del Array de Pokémons.
* v2.1
    * Mejoradas las funciones de filtrar la lista.
    * Un `bug` que, al pulsar en los botones de siguiente y anterior, colocaba la `url`, pero no recargaba el componente.
        * Arreglado haciendo que la función `ngOnInit()` se relance cuando pulsamos en los botones de siguiente y anterior.
    * Más ajustes de CSS y HTML tales como sustituir algunos `<p>` por `<div>` por temas de margin etc.
* v2.2
    * Agregado primeNg y Animations al proyecto.
    * Creado el componente `habilidades`, donde se muestra una tabla con las 267 habilidades.
    * Agregado un menú panel desplegable `p-panel` de primeNg para el filtro del componente `pokédex`. 
    * Agregados 2 atributos al `Chart.js`, `Puntos totales` y `Media`.
* v2.3
    * Añadida `Desviación Típica` al `Chart.js`.
    * Añadidos 3 iconos de Info al lado de `Puntos Totales`, `Media` y `Desviación Típica`, que al pulsarlos abre una ventana flotante emergente con información sobre ese atributo.
    * Creado un `GeneralService` para funciones de uso general, como `formatId()`, que se usa tanto en `pokedex` como en `pokemon-info`.
* v3.0
    * Añadidos estilos generales para las cajas de tipos.
    * Añadido `favicon.ico` propio.
    * Estilo del componente `Habilidades` terminado.
    * Función `goToRandomPokemon()` modificada. Antes te podía enviar a un pokémon que no existía aún, ya que se usaba `array.lenght`, y los ID de los pokémon no tenían porqué coincidir con el `.lenght`.
    * Arreglado un `bug` que al cambiar al pokémon anterior o siguiente, no se actualizaba el `Chart`
    * Añadidos y terminados dos nuevos componentes, `types-and-weaknesses`, que guarda los tipos y las debilidades del Pokémon que estamos visualizando, y `data-and-description`, que guarda la descripción, el peso, altura, y habilidades del Pokémon que estamos visualizando.
## Para más ayuda

Use `ng help` en la terminal o revise la página [Angular CLI Overview and Command Reference](https://angular.io/cli).
