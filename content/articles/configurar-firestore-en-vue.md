---
title: Configurar Firestore en Vue
date: 20 Oct 2020
description: Hoy veremos como configurar Firestore en nuestro proyecto Vue.
tags: [Vue, Firebase]
---

## Preparación

Antes de empezar debemos haber creado nuestro proyecto Vue. Para ello, haciendo uso de Vue CLI, lo creamos con el siguiente comando.

```
vue create prueba-firestore
```

Al escribirlo, te pedirá que elijas según tus intereses la configuración de tu proyecto. Una vez hecho esto, podemos continuar a lo importante.
<br/>
<br/>

## Firestore

<br/>

#### Paso 1. Crear un proyecto en Firebase.

Para empezar, debemos ir a la página de [Google Firebase](https://firebase.google.com/), clickar en Acceder y nos registramos con nuestra cuenta. Una vez en la consola, pinchamos en añadir proyecto. Esto abrirá un pop-up que rellenamos con los datos de nuestro proyecto y continuamos.

<br/>

#### Paso 2. Obtener nuestras credenciales.

Una vez creado el proyecto y nos encontremos dentro, pinchamos en la esquina superior izquierda, en el icono de la rueda dentada y posteriormente en 'Configuración del proyecto'. Esto nos abrirá los ajustes de nuestro proyecto. Por defecto, nos encontramos en la pestaña `General`. Si bajamos hacia abajo, nos dice que todavía no hay ninguna aplicación asociada al proyecto. Pulsamos en el icono de la web y rellenamos los datos del pop-up, igual que en el paso anterior. Finalmente, nos encontraremos con un código como este, que copiaremos (para este ejemplo he sustituido los datos reales por asteriscos):

```js
var firebaseConfig = {
  apiKey: "***",
  authDomain: "***",
  databaseURL: "***",
  projectId: "***",
  storageBucket: "***",
  messagingSenderId: "***",
  appId: "***",
  measurementId: "***"
};

firebase.initializeApp(firebaseConfig);
```

#### Paso 3. Añadir Firestore a nuestro proyecto.

Ahora, tenemos que instalar Firebase en nuestro proyecto Vue con el siguiente comando:

```
npm install firebase --save
```

Cuando finalice la instalación, creamos una carpeta llamada `Firebase` y un archivo JavaScript que llamaremos `firebase.js`. Una vez dentro del archivo, pegaremos el código anteriormente copiado e importaremos firebase para que utilice nuestras credenciales. Tiene que quedar así:

```js
import Firebase from "firebase/firebase";

var firebaseConfig = {
  apiKey: "***",
  authDomain: "***",
  databaseURL: "***",
  projectId: "***",
  storageBucket: "***",
  messagingSenderId: "***",
  appId: "***",
  measurementId: "***"
};

const app = Firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
```

Finalmente, cuando queramos usar Firestore en nuestros componentes solo tenemos que importar nuestro archivo, escribiendo la siguiente línea:

```js
import { db } from "../Firebase/firebase.js";
```
