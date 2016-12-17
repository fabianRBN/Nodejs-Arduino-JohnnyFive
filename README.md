 # Nodejs- Arduino-Johnny FiVE
 
 NOMBRE: WILSO FABIAN TOAPANTA IZA

“El desarrollo de un sistema web que permita el control de luces led que a su vez estos simulen puntos de luz de un domicilio” 

![](https://github.com/rwaldron/johnny-five/raw/master/assets/sgier-johnny-five.png)

## Configurar Arduino
Lo primero que tenemos que hacer es cargar el estándar Firmata en nuestra placa de Arduino. Para ello conectamos nuestra placa de Arduino con el cable USB, abrimos el entorno de desarrollo oficial y vamos a:

Archivo > Ejemplos > Firmata > StandarFirmata

![](http://i0.wp.com/programarfacil.com/wp-content/uploads/2016/04/StandarFirmata.jpg?w=709)

## Framework Johnny-five
Como ya se menciono, vamos a utilizar el framework Johnny-five para facilitarnos la tarea de comunicarnos con el protocolo que acabamos de cargar en nuestra placa de Arduino y una vez instalado utilizaremos JavaScript para controlar nuestra placa. Con este framework tenemos objetos que son los componentes eléctricos que vamos a utilizar en nuestro proyecto y para todos ellos disponemos de métodos que nos facilitan interactuar con ellos desde código JavaScript. En su pagina puedes encontrar ejemplos para los componentes que necesites.

Este framework lo instalaremos en la maquina que va hacer de servidor pero antes necesitamos configurar varias herramientas para utilizarlo.

## Montar el servidor
![](https://hazelcast.org/wp-content/uploads/2016/04/nodejs-vert.png)
Para este cometido vamos a utilizar NodeJS, uno de los frameworks  de JavaScript. Esta plataforma de desarrollo Back-End trabaja con una arquitectura orientada a eventos y utiliza como lenguaje de desarrollo Javascript aprovechando el motor v8 creado por Google. Instalamos o actualizamos desde el siguiente enlace (Si utilizas UNIX puedes obtenerlo con el siguiente comando apt-get install nodejs) Una vez instalado seguimos con el resto de componentes.
![https://nodejs.org/](https://nodejs.org/)

## Este paso es la configuracion que se realizo para inciar el proyecto
Pare este caso se utilizara el Gestor de Paketes NPM: Esta Heramienta ayudara  organizar los diferentes modulos que integremos en nuestra aplicacion. Se debe tener encuenta que al instalar Node.js ya se instala NPM, la instalacion que realizaremos es la cual es para tener npm en  nuestro proyecto.
#### Source Code:

``` bash
npm install
```

Instalacion de los modulos: Johnny-Five , socket.io ,express,nodemon
``` bash
npm install johnny-five
npm install socket.io
npm install express
npm install nodemon
```
## Si se decea probar la aplicacion en algun otro ordenador, podemos unicamente arrancar nuestro Package.json el cual posee todos los modulos que se utilizaron esto ayudara a que se logre instalar la version con la que se a trabajado.

## Ejecutar la aplicacion:
Desde  un shell iniciamos el serbidor con el comando 

``` bash
npm start
```
